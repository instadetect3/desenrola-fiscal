"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Send, Sparkles } from "lucide-react"
import { auth, db } from "@/lib/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import LimitModal from "./LimitModal"
import toast from "react-hot-toast"

export default function ChatBox() {
  const [mensagem, setMensagem] = useState("")
  const [respostas, setRespostas] = useState<string[]>([])
  const [user, setUser] = useState<any>(null)
  const [perguntasRestantes, setPerguntasRestantes] = useState(0)
  const [showLimit, setShowLimit] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        setUser(usuario)

        const docRef = doc(db, "usuarios", usuario.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setPerguntasRestantes(docSnap.data().perguntasRestantes)
        }
      }
    })
  }, [])

  async function enviarPergunta() {
    if (!mensagem) return

    // 🔒 precisa estar logado
    if (!user) {
      toast.error("Faça login para usar a IA")
      return
    }

    // 🔒 limite
    if (perguntasRestantes <= 0) {
      setShowLimit(true)
      return
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ mensagem }),
      })

      const data = await res.json()

      setRespostas((prev) => [...prev, mensagem, data.resposta])
      setMensagem("")

      // 🔥 atualiza contador
      const novoValor = perguntasRestantes - 1
      setPerguntasRestantes(novoValor)

      await updateDoc(doc(db, "usuarios", user.uid), {
        perguntasRestantes: novoValor,
      })

    } catch (error) {
      toast.error("Erro ao enviar pergunta")
    }
  }

  return (
    <div className="w-full max-w-xl">

      {/* Ícone */}
      <div className="flex justify-center mb-4">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <MessageCircle size={18} className="text-white" />
        </div>
      </div>

      {/* Título */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
        <span className="text-gray-900">Sobre o que posso ajudar </span>
        <span className="text-green-600">você</span>{" "}
        <span className="text-gray-900">hoje?</span>
      </h2>

      {/* Chat */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

        {/* Mensagens */}
        <div className="max-h-60 overflow-y-auto mb-4 space-y-2">
          {respostas.map((msg, i) => (
            <div
              key={i}
              className={`text-sm ${
                i % 2 === 0
                  ? "text-right text-green-700"
                  : "text-left text-gray-700"
              }`}
            >
              {msg}
            </div>
          ))}
        </div>

        {/* Input */}
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Digite sua dúvida aqui..."
          className="w-full h-24 resize-none outline-none text-gray-700 placeholder:text-gray-400"
        />

        {/* Rodapé */}
        <div className="border-t border-gray-100 mt-4 pt-3 flex items-center justify-between">

          <div className="flex flex-col text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-green-500" />
              <span>IA com dados atualizados</span>
            </div>

            <span className="mt-1">
              Perguntas restantes: {perguntasRestantes}
            </span>
          </div>

          <button
            onClick={enviarPergunta}
            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition"
          >
            <Send size={16} className="text-white" />
          </button>

        </div>
      </div>

      {/* 🔥 MODAL */}
      <LimitModal open={showLimit} onClose={() => setShowLimit(false)} />

    </div>
  )
}