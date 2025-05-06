import { NextResponse } from "next/server"

// Simulação de banco de dados
const interactions = [
  {
    id: 1,
    userId: 1,
    platform: "twitter",
    content: "Amei o jogo da @paingamingbr hoje!",
    points: 10,
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    userId: 1,
    platform: "instagram",
    content: "Torcendo pela PAIN no campeonato!",
    points: 5,
    timestamp: new Date().toISOString(),
  },
  // Mais interações seriam adicionadas aqui
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (userId) {
    const userInteractions = interactions.filter((interaction) => interaction.userId === Number.parseInt(userId))
    return NextResponse.json({ interactions: userInteractions })
  }

  return NextResponse.json({ interactions })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validação básica
    if (!body.userId || !body.platform || !body.content) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 })
    }

    // Lógica para calcular pontos baseado no conteúdo e plataforma
    let points = 0

    // Exemplo simples de cálculo de pontos
    if (body.platform === "twitter") {
      points = 10
    } else if (body.platform === "instagram") {
      points = 8
    } else if (body.platform === "facebook") {
      points = 6
    } else if (body.platform === "youtube") {
      points = 15
    } else if (body.platform === "game") {
      points = 20
    }

    // Bônus para menções específicas
    if (
      body.content.toLowerCase().includes("pain gaming") ||
      body.content.toLowerCase().includes("paingaming") ||
      body.content.toLowerCase().includes("@paingamingbr")
    ) {
      points += 5
    }

    // Simulação de criação de interação
    const newInteraction = {
      id: interactions.length + 1,
      userId: body.userId,
      platform: body.platform,
      content: body.content,
      points: points,
      timestamp: new Date().toISOString(),
    }

    // Em um sistema real, salvaríamos no banco de dados
    interactions.push(newInteraction)

    // Atualização de pontos do usuário seria feita aqui

    return NextResponse.json({ interaction: newInteraction }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar a requisição" }, { status: 500 })
  }
}
