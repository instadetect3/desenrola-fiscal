import { NextResponse } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    const payment = new Payment(client)

    const response = await payment.create({
      body: {
        transaction_amount: 19.9,
        description: "Plano Pro",
        payment_method_id: "pix",
        payer: {
          email: email || "test_user@test.com",
        },
      },
    })

    return NextResponse.json({
      qr_code_base64:
        response.point_of_interaction?.transaction_data?.qr_code_base64,
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Erro PIX" },
      { status: 500 }
    )
  }
}