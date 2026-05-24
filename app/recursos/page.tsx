export default function Recursos() {
  return (
    <div className="bg-[#f5f7f6] min-h-screen py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Recursos da Plataforma
          </h1>

          <p className="text-gray-500">
            Tudo que você pode fazer com o Desenrola Fiscal
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              ⚡ Respostas rápidas
            </h2>
            <p className="text-gray-500 text-sm">
              Tire dúvidas fiscais em segundos com nossa IA.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              🧠 Inteligência especializada
            </h2>
            <p className="text-gray-500 text-sm">
              Respostas baseadas em legislação atualizada.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              📊 Organização de dúvidas
            </h2>
            <p className="text-gray-500 text-sm">
              Acompanhe e organize suas perguntas facilmente.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}