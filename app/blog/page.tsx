export default function Blog() {
  return (
    <div className="bg-[#f5f7f6] min-h-screen py-20">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Blog
          </h1>

          <p className="text-gray-500">
            Dicas e conteúdos sobre o mundo fiscal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">
              Como pagar menos impostos legalmente
            </h2>
            <p className="text-gray-500 text-sm">
              Veja estratégias simples para reduzir sua carga tributária.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">
              MEI: o que você precisa saber
            </h2>
            <p className="text-gray-500 text-sm">
              Entenda tudo sobre o regime de microempreendedor.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}