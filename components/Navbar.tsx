"use client"

import { User, UserPlus } from "lucide-react"
import Link from "next/link"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario)
    })

    return () => unsubscribe()
  }, [])

  async function sair() {
    await signOut(auth)
  }

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo-desenrola.png"
            alt="Desenrola"
            className="h-17 w-auto object-contain"
          />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-[13px] text-gray-600 font-medium">
          <Link href="/recursos" className="hover:text-black transition">Recursos</Link>
          <Link href="/planos" className="hover:text-black transition">Planos</Link>
          <Link href="/sobre" className="hover:text-black transition">Sobre</Link>
          <Link href="/blog" className="hover:text-black transition">Blog</Link>
          <Link href="/contato" className="hover:text-black transition">Contato</Link>
        </div>

        {/* Botões */}
        <div className="flex items-center gap-3">

          {user ? (
            <>
              <span className="text-sm text-gray-700">
                {user.email}
              </span>

              <button
                onClick={sair}
                className="
                  px-4 h-10
                  rounded-lg
                  bg-red-500
                  text-white
                  text-sm
                  transition-all
                  hover:bg-red-600
                "
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="
                  flex items-center gap-2
                  px-5 h-10
                  rounded-lg
                  border border-green-500
                  text-green-600
                  font-medium text-sm
                  transition-all duration-200
                  hover:bg-green-50
                  hover:shadow-sm
                  hover:-translate-y-[1px]
                "
              >
                <User size={16} strokeWidth={2} />
                Entrar
              </Link>

              <Link
                href="/register"
                className="
                  flex items-center gap-2
                  px-5 h-10
                  rounded-lg
                  bg-green-600
                  text-white
                  font-medium text-sm
                  transition-all duration-200
                  shadow-sm
                  hover:bg-green-700
                  hover:shadow-md
                  hover:-translate-y-[1px]
                "
              >
                <UserPlus size={16} strokeWidth={2} />
                Criar conta
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  )
}