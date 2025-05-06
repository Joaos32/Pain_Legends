import Image from "next/image"

// Tipos para os jogadores
type Player = {
  id: number
  name: string
  nickname: string
  role: string
  image: string
}

// Tipos para os times
type Team = {
  game: string
  players: Player[]
}

// Dados simulados dos times
const teams: Team[] = [
  {
    game: "League of Legends",
    players: [
      { id: 1, name: "Jogador 1", nickname: "Nickname1", role: "Top", image: "/placeholder.svg?height=300&width=300" },
      {
        id: 2,
        name: "Jogador 2",
        nickname: "Nickname2",
        role: "Jungle",
        image: "/placeholder.svg?height=300&width=300",
      },
      { id: 3, name: "Jogador 3", nickname: "Nickname3", role: "Mid", image: "/placeholder.svg?height=300&width=300" },
      { id: 4, name: "Jogador 4", nickname: "Nickname4", role: "ADC", image: "/placeholder.svg?height=300&width=300" },
      {
        id: 5,
        name: "Jogador 5",
        nickname: "Nickname5",
        role: "Support",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    game: "Valorant",
    players: [
      {
        id: 6,
        name: "Jogador 6",
        nickname: "Nickname6",
        role: "Duelist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 7,
        name: "Jogador 7",
        nickname: "Nickname7",
        role: "Sentinel",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 8,
        name: "Jogador 8",
        nickname: "Nickname8",
        role: "Controller",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 9,
        name: "Jogador 9",
        nickname: "Nickname9",
        role: "Initiator",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 10,
        name: "Jogador 10",
        nickname: "Nickname10",
        role: "Flex",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    game: "Counter-Strike",
    players: [
      {
        id: 11,
        name: "Jogador 11",
        nickname: "Nickname11",
        role: "AWPer",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 12,
        name: "Jogador 12",
        nickname: "Nickname12",
        role: "Rifler",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 13,
        name: "Jogador 13",
        nickname: "Nickname13",
        role: "IGL",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 14,
        name: "Jogador 14",
        nickname: "Nickname14",
        role: "Entry Fragger",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 15,
        name: "Jogador 15",
        nickname: "Nickname15",
        role: "Support",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
]

export function TeamSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Times da Pain Gaming</h2>

        <div className="space-y-16">
          {teams.map((team) => (
            <div key={team.game} className="space-y-8">
              <h3 className="text-2xl font-bold text-center">
                <span className="text-red-500">{team.game}</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {team.players.map((player) => (
                  <div key={player.id} className="text-center group">
                    <div className="aspect-square relative mb-3 overflow-hidden rounded-md bg-gray-900 border border-gray-800 group-hover:border-red-500 transition-all">
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.nickname}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="w-full">
                          <p className="text-white font-bold">{player.nickname}</p>
                          <p className="text-gray-300 text-sm">{player.role}</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white">{player.nickname}</h3>
                    <p className="text-sm text-gray-400">{player.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
