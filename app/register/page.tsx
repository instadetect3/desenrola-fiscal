"use client"

import { useState } from "react"
import { auth, db } from "@/lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function Register() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const router = useRouter()

  async function register() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha)

      // 🔥 salva no Firestore
      await setDoc(doc(db, "usuarios", userCredential.user.uid), {
        perguntasRestantes: 5,
      })

      toast.success("Conta criada com sucesso 🚀")
toast.error("Erro ao criar conta")
      router.push("/")

    } catch (err: any) {
  if (err.code === "auth/email-already-in-use") {
    toast.error("Esse email já está cadastrado.")
  } else if (err.code === "auth/weak-password") {
    toast.error("A senha deve ter pelo menos 6 caracteres.")
  } else if (err.code === "auth/invalid-email") {
    toast.error("Email inválido.")
  } else {
    toast.error("Erro ao criar conta.")
  }
}
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5fbf5]">

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

        {/* Título */}
        <h1 className="text-2xl font-bold text-center text-green-700 mb-2">
          Criar conta
        </h1>

        {/* Subtítulo */}
        <p className="text-center text-gray-500 text-sm mb-6">
          Crie sua conta para começar
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-700 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2.5 border rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Senha */}
        <div className="mb-6">
          <label className="text-sm text-gray-700 font-medium">
            Senha
          </label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full mt-1 p-2.5 border rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Botão */}
        <button
          onClick={register}
          className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Criar conta
        </button>

        {/* Rodapé */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Já tem conta?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Entrar
          </span>
        </p>

      </div>

    </div>
  )
}