"use client"

import { useRouter } from "next/navigation"

export default function LimitModal({ open, onClose }: any) {
  const router = useRouter()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Fundo escuro */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">

        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Você atingiu o limite 😅
        </h2>

        <p className="text-gray-600 mb-6">
          Você usou todas as perguntas do plano gratuito.
          Faça upgrade para continuar usando a IA 🚀
        </p>

        <div className="flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 border rounded-lg py-2 text-gray-600 hover:bg-gray-50"
          >
            Voltar
          </button>

          <button
            onClick={() => router.push("/planos")}
            className="flex-1 bg-green-600 text-white rounded-lg py-2 hover:bg-green-700"
          >
            Ver planos
          </button>

        </div>

      </div>
    </div>
  )
}