import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoButton } from "@/components/logo-button"
import { TeamSection } from "@/components/team-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
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
                <Link href="/ranking" className="hover:text-red-500 transition-colors">
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

      <main className="flex-grow">
        <section className="relative h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Pain Gaming Team"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/pain-logo.png"
                alt="Pain Gaming Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              COMUNIDADE DE FÃS DA <span className="text-red-500">PAIN GAMING</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Participe da maior comunidade de fãs da Pain Gaming. Registre suas interações, suba no ranking e mostre
              seu apoio ao time!
            </p>
            <Link href="/cadastro">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-6">
                JUNTE-SE AGORA
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black border-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center mr-3">
                      1
                    </div>
                    Cadastre-se
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    Crie sua conta e conecte suas redes sociais para começar a acumular pontos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center mr-3">
                      2
                    </div>
                    Interaja
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    Mencione a Pain Gaming em suas redes sociais e jogos para ganhar pontos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center mr-3">
                      3
                    </div>
                    Suba no Ranking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    Acumule pontos e suba no ranking para ganhar reconhecimento e prêmios exclusivos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Fãs da Semana</h2>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-gray-900 border-gray-800 text-white">
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-800">
                    {[
                      { name: "GamerPainFan", points: 1250, avatar: "/placeholder.svg?height=40&width=40" },
                      { name: "PainForever", points: 980, avatar: "/placeholder.svg?height=40&width=40" },
                      { name: "BruceGamer", points: 875, avatar: "/placeholder.svg?height=40&width=40" },
                      { name: "PainLover22", points: 720, avatar: "/placeholder.svg?height=40&width=40" },
                      { name: "GamerBR", points: 650, avatar: "/placeholder.svg?height=40&width=40" },
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 flex items-center justify-center font-bold mr-3">{index + 1}</div>
                          <img
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <span className="font-medium">{user.name}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold text-red-500">{user.points}</span>
                          <span className="ml-1 text-gray-400">pts</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-center border-t border-gray-800 py-4">
                  <Link href="/ranking">
                    <Button
                      variant="outline"
                      className="border-gray-700 text-white hover:bg-red-500 hover:text-white hover:border-red-500"
                    >
                      Ver Ranking Completo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção de Times */}
        <TeamSection />

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Junte-se à Comunidade</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Faça parte da maior comunidade de fãs da Pain Gaming e mostre seu apoio ao time!
            </p>
            <Link href="/cadastro">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-6">
                CADASTRE-SE AGORA
              </Button>
            </Link>
          </div>
        </section>
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
