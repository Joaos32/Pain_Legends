import { NextResponse } from "next/server"

// Simulação de banco de dados
const users = [
  { id: 1, name: "GamerPainFan", email: "gamer@example.com", points: 12500, badges: 8, interactions: 245 },
  { id: 2, name: "PainForever", email: "forever@example.com", points: 9800, badges: 7, interactions: 189 },
  // Mais usuários seriam adicionados aqui
]

export async function GET() {
  return NextResponse.json({ users })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validação básica
    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 })
    }

    // Simulação de criação de usuário
    const newUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
      points: 0,
      badges: 0,
      interactions: 0,
      // Outros campos seriam adicionados aqui
    }

    // Em um sistema real, salvaríamos no banco de dados
    users.push(newUser)

    return NextResponse.json({ user: newUser }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar a requisição" }, { status: 500 })
  }
}
