import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogoButton } from "@/components/logo-button"

export default function Ranking() {
  // Dados simulados para o ranking
  const users = [
    {
      name: "GamerPainFan",
      points: 12500,
      avatar: "/placeholder.svg?height=50&width=50",
      badges: 8,
      interactions: 245,
    },
    { name: "PainForever", points: 9800, avatar: "/placeholder.svg?height=50&width=50", badges: 7, interactions: 189 },
    { name: "BruceGamer", points: 8750, avatar: "/placeholder.svg?height=50&width=50", badges: 6, interactions: 167 },
    { name: "PainLover22", points: 7200, avatar: "/placeholder.svg?height=50&width=50", badges: 5, interactions: 142 },
    { name: "GamerBR", points: 6500, avatar: "/placeholder.svg?height=50&width=50", badges: 5, interactions: 128 },
    { name: "PainFanatic", points: 5800, avatar: "/placeholder.svg?height=50&width=50", badges: 4, interactions: 115 },
    { name: "ProGamerPain", points: 5200, avatar: "/placeholder.svg?height=50&width=50", badges: 4, interactions: 103 },
    { name: "BRGamer123", points: 4900, avatar: "/placeholder.svg?height=50&width=50", badges: 3, interactions: 98 },
    { name: "PainSupporter", points: 4500, avatar: "/placeholder.svg?height=50&width=50", badges: 3, interactions: 92 },
    { name: "GamerElite", points: 4200, avatar: "/placeholder.svg?height=50&width=50", badges: 3, interactions: 87 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <LogoButton />
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="text-red-500">
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/times" className="hover:text-red-500 transition-colors">
                  Times
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-red-500 transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Link href="/login">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-red-500 hover:text-white hover:border-red-500"
              >
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro" className="ml-2">
              <Button className="bg-red-500 hover:bg-red-600 text-white">Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Ranking de Fãs</h1>
          <p className="text-gray-400 mb-8">
            Confira os fãs mais engajados da Pain Gaming. Interaja nas redes sociais e jogos para subir no ranking!
          </p>

          <Tabs defaultValue="geral" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-6 bg-gray-900">
              <TabsTrigger value="geral" className="data-[state=active]:bg-red-500">
                Geral
              </TabsTrigger>
              <TabsTrigger value="semanal" className="data-[state=active]:bg-red-500">
                Semanal
              </TabsTrigger>
              <TabsTrigger value="mensal" className="data-[state=active]:bg-red-500">
                Mensal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="geral" className="space-y-4">
              <Card className="bg-gray-900 border-gray-800 text-white">
                <CardHeader className="pb-0">
                  <CardTitle>Ranking Geral</CardTitle>
                  <CardDescription className="text-gray-400">Pontuação acumulada desde o início</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-md border border-gray-800">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-black">
                          <th className="p-3 text-left font-medium">Posição</th>
                          <th className="p-3 text-left font-medium">Usuário</th>
                          <th className="p-3 text-center font-medium">Interações</th>
                          <th className="p-3 text-center font-medium">Badges</th>
                          <th className="p-3 text-right font-medium">Pontos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                            <td className="p-3">
                              <div className="flex items-center">
                                {index < 3 ? (
                                  <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                      index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"
                                    }`}
                                  >
                                    {index + 1}
                                  </div>
                                ) : (
                                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-medium">
                                    {index + 1}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <img
                                  src={user.avatar || "/placeholder.svg"}
                                  alt={user.name}
                                  className="w-10 h-10 rounded-full mr-3"
                                />
                                <span className="font-medium">{user.name}</span>
                              </div>
                            </td>
                            <td className="p-3 text-center">{user.interactions}</td>
                            <td className="p-3 text-center">{user.badges}</td>
                            <td className="p-3 text-right font-bold text-red-500">{user.points.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="semanal">
              <Card className="bg-gray-900 border-gray-800 text-white">
                <CardHeader className="pb-0">
                  <CardTitle>Ranking Semanal</CardTitle>
                  <CardDescription className="text-gray-400">Pontuação acumulada nos últimos 7 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-md border border-gray-800">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-black">
                          <th className="p-3 text-left font-medium">Posição</th>
                          <th className="p-3 text-left font-medium">Usuário</th>
                          <th className="p-3 text-center font-medium">Interações</th>
                          <th className="p-3 text-right font-medium">Pontos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users
                          .slice()
                          .sort(() => Math.random() - 0.5)
                          .map((user, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                              <td className="p-3">
                                <div className="flex items-center">
                                  {index < 3 ? (
                                    <div
                                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                        index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"
                                      }`}
                                    >
                                      {index + 1}
                                    </div>
                                  ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-medium">
                                      {index + 1}
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="flex items-center">
                                  <img
                                    src={user.avatar || "/placeholder.svg"}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                  />
                                  <span className="font-medium">{user.name}</span>
                                </div>
                              </td>
                              <td className="p-3 text-center">{Math.floor(user.interactions * 0.3)}</td>
                              <td className="p-3 text-right font-bold text-red-500">
                                {Math.floor(user.points * 0.2).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mensal">
              <Card className="bg-gray-900 border-gray-800 text-white">
                <CardHeader className="pb-0">
                  <CardTitle>Ranking Mensal</CardTitle>
                  <CardDescription className="text-gray-400">Pontuação acumulada nos últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-md border border-gray-800">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-black">
                          <th className="p-3 text-left font-medium">Posição</th>
                          <th className="p-3 text-left font-medium">Usuário</th>
                          <th className="p-3 text-center font-medium">Interações</th>
                          <th className="p-3 text-right font-medium">Pontos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users
                          .slice()
                          .sort(() => Math.random() - 0.5)
                          .map((user, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                              <td className="p-3">
                                <div className="flex items-center">
                                  {index < 3 ? (
                                    <div
                                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                        index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"
                                      }`}
                                    >
                                      {index + 1}
                                    </div>
                                  ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-medium">
                                      {index + 1}
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="flex items-center">
                                  <img
                                    src={user.avatar || "/placeholder.svg"}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                  />
                                  <span className="font-medium">{user.name}</span>
                                </div>
                              </td>
                              <td className="p-3 text-center">{Math.floor(user.interactions * 0.6)}</td>
                              <td className="p-3 text-right font-bold text-red-500">
                                {Math.floor(user.points * 0.4).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-bold mb-4">Como funciona o sistema de pontos?</h2>
            <div className="space-y-3 text-gray-300">
              <p>Nosso sistema de pontuação recompensa os fãs mais engajados da Pain Gaming:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-white">Menções nas redes sociais:</span> Ganhe pontos ao mencionar
                  @paingamingbr em suas postagens.
                </li>
                <li>
                  <span className="font-medium text-white">Interações em jogos:</span> Use o nome "PAIN" ou variações em
                  seus nomes de usuário em jogos.
                </li>
                <li>
                  <span className="font-medium text-white">Compartilhamento de conteúdo:</span> Compartilhe publicações
                  oficiais da Pain Gaming.
                </li>
                <li>
                  <span className="font-medium text-white">Participação em eventos:</span> Participe de eventos oficiais
                  para ganhar pontos bônus.
                </li>
              </ul>
              <p className="mt-4">Quanto mais você interagir, mais pontos acumulará e mais alto ficará no ranking!</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/pain-logo.png"
                  alt="Pain Gaming Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-lg font-semibold">FANS</span>
              </div>
              <p className="text-sm text-gray-400">© 2025 Pain Gaming Fans. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-red-500">
                Termos de Uso
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500">
                Contato
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <h3 className="text-center text-sm text-gray-500 mb-4">PATROCINADORES</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {["Cassino", "Corsair", "Dorflex", "ExitLag", "JBL", "Melitta"].map((sponsor) => (
                <div key={sponsor} className="grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={`/placeholder.svg?height=30&width=100`}
                    alt={sponsor}
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
