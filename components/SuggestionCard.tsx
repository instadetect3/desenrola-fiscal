import { Lightbulb, FileText, DollarSign, Truck } from "lucide-react"

interface Props {
  text: string
  icon: "user" | "file" | "money" | "truck"
}

export default function SuggestionCard({ text, icon }: Props) {

  const icons = {
    user: <Lightbulb size={18} />,
    file: <FileText size={18} />,
    money: <DollarSign size={18} />,
    truck: <Truck size={18} />,
  }

  return (
    <button className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:bg-green-50 transition text-gray-800 font-medium text-sm">

      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        {icons[icon]}
      </div>

      <span className="text-left">{text}</span>

    </button>
  )
}