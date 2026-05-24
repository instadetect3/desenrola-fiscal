import { NextResponse } from "next/server"
import { MercadoPagoConfig, Preference } from "mercadopago"

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export async function POST() {
  try {
    const preference = new Preference(client)

    const response = await preference.create({
      body: {
        items: [
          {
            id: "plano-pro",
            title: "Plano Pro",
            quantity: 1,
            unit_price: 19.9,
          },
        ],
      },
    })

    return NextResponse.json({
      init_point: response.init_point,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Erro ao criar pagamento" },
      { status: 500 }
    )
  }
}