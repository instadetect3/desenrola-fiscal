import { NextResponse } from "next/server"
import mercadopago from "mercadopago"

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    const payment = await mercadopago.payment.create({
      transaction_amount: 19.9,
      description: "Plano PRO Desenrola Fiscal",
      payment_method_id: "pix",
      payer: {
        email: email || "teste@email.com",
      },
    })

    return NextResponse.json({
      qr_code_base64:
        payment.body.point_of_interaction.transaction_data.qr_code_base64,
    })

  } catch (error) {
    console.log("ERRO PIX:", error)

    return NextResponse.json({
      error: "Erro ao gerar PIX",
    })
  }
}