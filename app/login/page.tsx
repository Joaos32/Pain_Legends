"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function Login() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulando login
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Login realizado!",
        description: "Você foi autenticado com sucesso.",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-gray-900 border-gray-800 text-white">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/pain-logo.png"
                  alt="Pain Gaming Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-bold">FANS</span>
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Entrar</CardTitle>
            <CardDescription className="text-center text-gray-400">
              Entre na sua conta para acessar o ranking e suas interações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-white">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="text-right">
                  <Link href="#" className="text-sm text-red-500 hover:underline">
                    Esqueceu sua senha?
                  </Link>
                </div>
              </div>
              <Button className="w-full mt-6 bg-red-500 hover:bg-red-600" type="submit" disabled={isLoading}>
                {isLoading ? "Processando..." : "Entrar"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Ou continue com</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5 12.0645C22.5 11.2329 22.4355 10.4452 22.3161 9.68549H12V13.8484H17.9032C17.6613 15.0323 16.9516 16.0452 15.8871 16.7419V19.4226H19.3548C21.4452 17.5161 22.5 15.0387 22.5 12.0645Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 22.5C14.9516 22.5 17.4194 21.5742 19.3548 19.4226L15.8871 16.7419C14.9677 17.3419 13.6935 17.7097 12 17.7097C9.39677 17.7097 7.19032 15.9 6.46452 13.4677H2.90323V16.2323C4.83871 19.9129 8.2 22.5 12 22.5Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.46452 13.4677C6.25161 12.8677 6.12903 12.2226 6.12903 11.5C6.12903 10.7774 6.25161 10.1323 6.46452 9.53226V6.76774H2.90323C2.18065 8.20968 1.75806 9.80645 1.75806 11.5C1.75806 13.1935 2.18065 14.7903 2.90323 16.2323L6.46452 13.4677Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.29032C13.4903 5.29032 14.8194 5.83548 15.8645 6.82903L18.9484 3.74516C17.4194 2.33548 14.9516 1.5 12 1.5C8.2 1.5 4.83871 4.08709 2.90323 7.76774L6.46452 10.5323C7.19032 8.1 9.39677 5.29032 12 5.29032Z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 12.0731C24 5.4046 18.6281 0 12 0C5.37188 0 0 5.4046 0 12.0731C0 18.1002 4.3875 23.0945 10.125 24V15.5633H7.07812V12.0731H10.125V9.41343C10.125 6.3879 11.9156 4.71615 14.6578 4.71615C15.9703 4.71615 17.3438 4.95197 17.3438 4.95197V7.92313H15.8297C14.3391 7.92313 13.875 8.85381 13.875 9.80864V12.0731H17.2031L16.6711 15.5633H13.875V24C19.6125 23.0945 24 18.1002 24 12.0731Z"
                    fill="#1877F2"
                  />
                </svg>
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-gray-800">
            <div className="text-sm text-gray-400">
              Não tem uma conta?{" "}
              <Link href="/cadastro" className="text-red-500 hover:underline">
                Cadastre-se
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
