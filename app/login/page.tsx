"use client"

import { useState } from "react"
import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const router = useRouter()

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, senha)
     toast.success("Login feito com sucesso 🚀")
      router.push("/")
    } catch (err) {
      toast.error("Erro ao fazer login")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5fbf5]">

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

        {/* Título */}
        <h1 className="text-2xl font-bold text-center text-green-700 mb-2">
          Entrar
        </h1>

        {/* Subtítulo */}
        <p className="text-center text-gray-500 text-sm mb-6">
          Faça login para continuar
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-700 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Digite seu email"
            className="w-full mt-1 p-2.5 border rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setEmail(e.target.value)}
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
            className="w-full mt-1 p-2.5 border rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {/* Botão */}
        <button
          onClick={login}
          className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Entrar
        </button>

        {/* Rodapé */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Não tem conta?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Criar conta
          </span>
        </p>

      </div>

    </div>
  )
}