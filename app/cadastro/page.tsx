"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function Cadastro() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulando envio para API
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Cadastro enviado!",
        description: "Verifique seu email para confirmar o cadastro.",
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
            <CardTitle className="text-2xl text-center">Crie sua conta</CardTitle>
            <CardDescription className="text-center text-gray-400">
              Entre para a comunidade de fãs da Pain Gaming
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome" className="text-white">
                    Nome completo
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Digite seu nome completo"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
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
                  <Label htmlFor="username" className="text-white">
                    Nome de usuário
                  </Label>
                  <Input
                    id="username"
                    placeholder="Escolha um nome de usuário"
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
                    placeholder="Crie uma senha"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <div className="text-sm font-medium text-white">Conecte suas redes sociais</div>
                  <div className="grid gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
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
                      Conectar com Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M24 12.0731C24 5.4046 18.6281 0 12 0C5.37188 0 0 5.4046 0 12.0731C0 18.1002 4.3875 23.0945 10.125 24V15.5633H7.07812V12.0731H10.125V9.41343C10.125 6.3879 11.9156 4.71615 14.6578 4.71615C15.9703 4.71615 17.3438 4.95197 17.3438 4.95197V7.92313H15.8297C14.3391 7.92313 13.875 8.85381 13.875 9.80864V12.0731H17.2031L16.6711 15.5633H13.875V24C19.6125 23.0945 24 18.1002 24 12.0731Z"
                          fill="#1877F2"
                        />
                      </svg>
                      Conectar com Facebook
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.5 6.5C21.5 4.84315 20.1569 3.5 18.5 3.5H5.5C3.84315 3.5 2.5 4.84315 2.5 6.5V17.5C2.5 19.1569 3.84315 20.5 5.5 20.5H18.5C20.1569 20.5 21.5 19.1569 21.5 17.5V6.5Z"
                          fill="#FF0000"
                        />
                        <path d="M14.2929 11.2929L10.5 7.5H14.5L16.5 9.5L14.2929 11.2929Z" fill="#FF0000" />
                        <path d="M9.70711 12.7071L13.5 16.5H9.5L7.5 14.5L9.70711 12.7071Z" fill="#FF0000" />
                        <path d="M12 8.32843L15.6716 12L12 15.6716L8.32843 12L12 8.32843Z" fill="white" />
                      </svg>
                      Conectar com YouTube
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                          fill="#1DA1F2"
                        />
                        <path
                          d="M17.5 8.5C17.0234 8.76562 16.5 8.94531 15.9531 9.03125C16.5 8.67188 16.9297 8.125 17.125 7.46875C16.6016 7.79297 16.0234 8.02344 15.4062 8.14062C14.9062 7.59375 14.1797 7.25 13.4062 7.25C11.8828 7.25 10.6484 8.48438 10.6484 10.0078C10.6484 10.2578 10.6719 10.5 10.7266 10.7266C8.45312 10.6016 6.4375 9.50781 5.0625 7.83594C4.78906 8.30469 4.64062 8.83594 4.64062 9.40625C4.64062 10.4844 5.17188 11.4375 5.96875 12C5.54688 11.9844 5.14062 11.875 4.78125 11.6875V11.7266C4.78125 13.0625 5.75 14.1719 7.02344 14.4609C6.75781 14.5312 6.47656 14.5703 6.18359 14.5703C5.98047 14.5703 5.78125 14.5547 5.58594 14.5156C5.98828 15.6094 7.01172 16.3984 8.21875 16.4219C7.26562 17.1562 6.07812 17.5859 4.78125 17.5859C4.52344 17.5859 4.26953 17.5703 4.01562 17.5391C5.23438 18.3281 6.67969 18.7578 8.23438 18.7578C13.3984 18.7578 16.2266 14.6172 16.2266 11.0312C16.2266 10.8906 16.2266 10.75 16.2188 10.6094C16.75 10.2031 17.2031 9.70312 17.5625 9.125L17.5 8.5Z"
                          fill="white"
                        />
                      </svg>
                      Conectar com Twitter
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="terms"
                    required
                    className="border-gray-600 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Aceito os termos de uso e política de privacidade
                  </label>
                </div>
              </div>
              <Button className="w-full mt-6 bg-red-500 hover:bg-red-600" type="submit" disabled={isLoading}>
                {isLoading ? "Processando..." : "Criar conta"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-gray-800">
            <div className="text-sm text-gray-400">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-red-500 hover:underline">
                Entrar
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
