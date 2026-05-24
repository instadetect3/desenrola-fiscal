import { Shield, Scale, Clock, MessageCircle } from "lucide-react"

export default function FeaturesBar() {
  return (
    <section className="w-full bg-white border-t border-gray-100 mt-10">

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Shield size={18} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Segurança e privacidade
              </p>
              <p className="text-sm text-gray-500">
                Seus dados protegidos
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Scale size={18} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Informações atualizadas
              </p>
              <p className="text-sm text-gray-500">
                Baseadas na legislação vigente
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Clock size={18} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Respostas rápidas
              </p>
              <p className="text-sm text-gray-500">
                Economize tempo e evite dores de cabeça
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Feito para você
              </p>
              <p className="text-sm text-gray-500">
                MEI, Simples, Empresários e Contadores
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}