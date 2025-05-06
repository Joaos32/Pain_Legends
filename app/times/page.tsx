import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/logo-button"
import { TeamSection } from "@/components/team-section"

export default function TimesPage() {
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
                <Link href="/times" className="text-red-500">
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
        <section className="relative h-[300px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=300&width=1920"
              alt="Pain Gaming Teams"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-6">
              TIMES <span className="text-red-500">PAIN GAMING</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça os jogadores que representam a Pain Gaming nas principais competições de esports
            </p>
          </div>
        </section>

        {/* Seção de Times */}
        <TeamSection />

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Acompanhe os Times</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Siga a Pain Gaming nas redes sociais para ficar por dentro de todas as novidades e resultados
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-red-500 hover:border-red-500">
                Twitter
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-red-500 hover:border-red-500">
                Instagram
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-red-500 hover:border-red-500">
                YouTube
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-red-500 hover:border-red-500">
                Twitch
              </Button>
            </div>
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
