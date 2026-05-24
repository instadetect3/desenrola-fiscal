import Navbar from "../components/Navbar"
import DuckMascot from "../components/DuckMascot"
import ChatBox from "../components/ChatBox"
import SuggestionCard from "../components/SuggestionCard"
import FeaturesBar from "../components/FeaturesBar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5fbf5]">

      

      <main className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10">

        {/* Hero principal */}
        <section
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            lg:gap-20
            min-h-[70vh]
          "
        >

          {/* Adalberto */}
          <div className="flex-1 flex justify-center lg:justify-start items-end">
            <DuckMascot />
          </div>

          {/* Área direita */}
          <div className="flex-1 w-full max-w-3xl">
            <ChatBox />
          </div>

        </section>

        {/* 👇 AGORA FORA DO HERO */}
        <section className="mt-10 flex flex-col items-center">

          <h3 className="text-center text-xl font-semibold text-gray-800 mb-8">
            Sugestões populares
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6x1 w-full">
            <SuggestionCard text="MEI pode contratar funcionário?" icon="user" />
            <SuggestionCard text="Como emitir uma nota fiscal?" icon="file" />
            <SuggestionCard text="Qual imposto vou pagar?" icon="money" />
            <SuggestionCard text="Posso vender para outro estado?" icon="truck" />
          </div>

        </section>


      </main>

{/* 🔥 FULL WIDTH */}
<FeaturesBar />


    </div>
  )
}