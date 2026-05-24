import { NextResponse } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { db } from "@/lib/firebase"
import { doc, updateDoc } from "firebase/firestore"

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (body.type === "payment") {
      const payment = new Payment(client)

      const data = await payment.get({
        id: body.data.id,
      })

      if (data.status === "approved") {
        const email = data.payer?.email

        if (!email) {
          console.log("⚠️ Pagamento sem email")
          return NextResponse.json({ ok: true })
        }

        const userRef = doc(db, "usuarios", email)

        await updateDoc(userRef, {
          plano: "pro",
          perguntasRestantes: 999999,
        })

        console.log("🔥 Usuário liberado:", email)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Erro webhook:", error)
    return NextResponse.json({ error: "Erro webhook" })
  }
}