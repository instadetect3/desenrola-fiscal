import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { mensagem } = await req.json()

    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
Você é um assistente especialista em legislação tributária brasileira.

REGRAS IMPORTANTES:
- Responda SOMENTE com base na legislação vigente de 2025 e 2026.
- Priorize regras atualizadas da Receita Federal, MEI, Simples Nacional e Reforma Tributária.
- Nunca utilize legislações antigas sem avisar que podem estar desatualizadas.
- Se houver mudanças em transição entre 2025 e 2026, explique isso claramente.
- Nunca invente leis, impostos ou regras.
- Caso não tenha certeza absoluta sobre alguma informação, informe isso claramente.
- Explique tudo de forma simples, objetiva e profissional.
- Sempre que possível, contextualize para MEI, pequenas empresas e autônomos.
- Considere mudanças recentes sobre:
  • emissão de nota fiscal
  • DAS
  • impostos federais
  • impostos estaduais
  • obrigações acessórias
  • reforma tributária
- Evite linguagem jurídica excessivamente complexa.
`,
          },
          {
            role: "user",
            content: mensagem,
          },
        ],
      }),
    })

    const data = await resposta.json()

    console.log("RESPOSTA DA API:", data)

    // 🔥 proteção contra erro da API
    if (!data.choices || !data.choices[0]) {
      return NextResponse.json({
        resposta: "Erro na IA. Verifique a API Key ou saldo.",
      })
    }

    return NextResponse.json({
      resposta: data.choices[0].message.content,
    })

  } catch (error) {
    return NextResponse.json({
      resposta: "Erro interno no servidor.",
    })
  }
}