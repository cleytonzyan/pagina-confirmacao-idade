"use client"

import { useState } from "react"

export default function AgeVerification() {
  const [isVerified, setIsVerified] = useState(false)

  const handleYes = () => {
    setIsVerified(true)
  }

  const handleNo = () => {
    // Redireciona para uma página externa ou mostra mensagem
    window.location.href = "https://www.google.com"
  }

  if (isVerified) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Bem-vindo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Acesso liberado. Conteúdo para maiores de 18 anos.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Texto no topo */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Você tem mais de 18 anos?
        </h1>
        <p className="text-gray-400 text-lg">
          Este conteúdo é destinado apenas para maiores de idade
        </p>
      </div>

      {/* Botões centralizados */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <button
          onClick={handleYes}
          className="bg-white text-black px-12 py-4 rounded-lg text-xl font-semibold 
                   hover:bg-gray-200 transition-all duration-300 ease-in-out
                   hover:scale-105 shadow-2xl min-w-[140px]"
        >
          Sim
        </button>
        
        <button
          onClick={handleNo}
          className="bg-gray-800 text-white px-12 py-4 rounded-lg text-xl font-semibold 
                   hover:bg-gray-700 transition-all duration-300 ease-in-out
                   hover:scale-105 shadow-2xl border border-gray-600 min-w-[140px]"
        >
          Não
        </button>
      </div>

      {/* Rodapé discreto */}
      <div className="absolute bottom-8 text-center">
        <p className="text-gray-600 text-sm">
          Ao continuar, você confirma ter mais de 18 anos
        </p>
      </div>
    </div>
  )
}