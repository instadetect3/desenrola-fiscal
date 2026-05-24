export default function Contato() {
  return (
    <div className="bg-[#f5f7f6] min-h-screen py-20">

      <div className="max-w-xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Fale com a gente
        </h1>

        <p className="text-gray-500 text-center mb-10">
          Tem alguma dúvida ou sugestão? Entre em contato.
        </p>

        <form className="bg-white p-6 rounded-2xl shadow-sm space-y-4">

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Seu email"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            placeholder="Sua mensagem"
            className="w-full p-3 border rounded-lg h-32"
          />

          <button className="w-full py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
            Enviar mensagem
          </button>

        </form>

      </div>

    </div>
  )
}