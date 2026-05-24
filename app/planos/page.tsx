"use client"

export default function Planos() {
  return (
    <div className="min-h-screen bg-[#f5fbf5]">

      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Escolha seu plano
        </h1>

        <p className="text-gray-600 mb-12">
          Comece grátis e evolua quando precisar 🚀
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FREE */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Plano Free
            </h2>

            <p className="text-gray-500 mb-6">
              Ideal para testar a ferramenta
            </p>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              R$ 0
            </p>

            <ul className="space-y-2 text-gray-600 mb-6">
              <li>✔ 5 perguntas</li>
              <li>✔ Respostas com IA</li>
              <li>✔ Acesso básico</li>
            </ul>

            <button className="w-full border border-green-500 text-green-600 py-2 rounded-lg">
              Seu plano atual
            </button>

          </div>

          {/* PRO */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-green-500 text-left relative">

            <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
              Mais popular
            </span>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Plano Pro
            </h2>

            <p className="text-gray-500 mb-6">
              Para quem usa no dia a dia
            </p>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              R$ 19,90<span className="text-sm">/mês</span>
            </p>

            <ul className="space-y-2 text-gray-600 mb-6">
              <li>✔ Perguntas ilimitadas</li>
              <li>✔ Respostas mais rápidas</li>
              <li>✔ Prioridade no sistema</li>
            </ul>

            <button
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              onClick={async () => {
  const res = await fetch("/api/checkout", {
    method: "POST",
  })

  const data = await res.json()

  window.location.href = data.init_point
}}
            >
              Assinar agora
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}