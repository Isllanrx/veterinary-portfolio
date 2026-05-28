"use client"

import Lottie from "lottie-react"
import dogLeftToRight from "@/public/perfil/dog_2.json"
import dogRightToLeft from "@/public/perfil/dog.json"

export function DogAnimation() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-40 pointer-events-none z-50 select-none overflow-hidden">
      {/* Cachorro da Esquerda para Direita (dog_2) - Fica "atrás" e desvia para cima */}
      <div className="absolute bottom-4 animate-run-right w-20 h-20 md:w-28 md:h-28 opacity-70 z-10">
        <Lottie 
          animationData={dogLeftToRight} 
          loop={true} 
          className="w-full h-full"
        />
      </div>

      {/* Cachorro da Direita para Esquerda (dog) - Fica "à frente" e desvia para baixo */}
      <div className="absolute bottom-0 animate-run-left w-24 h-24 md:w-32 md:h-32 opacity-90 z-20">
        <Lottie 
          animationData={dogRightToLeft} 
          loop={true} 
          className="w-full h-full"
        />
      </div>

      <style jsx global>{`
        @keyframes runRight {
          0% { left: -150px; transform: translateY(0) scale(0.95); }
          30% { transform: translateY(-5px) scale(0.95); }
          50% { transform: translateY(-20px) scale(0.9); } /* Desvia para cima (fundo) */
          70% { transform: translateY(-5px) scale(0.95); }
          100% { left: 100%; transform: translateY(0) scale(0.95); }
        }
        @keyframes runLeft {
          0% { right: -150px; transform: scaleX(-1) translateY(0) scale(1); }
          30% { transform: scaleX(-1) translateY(5px) scale(1); }
          50% { transform: scaleX(-1) translateY(15px) scale(1.05); } /* Desvia para baixo (frente) */
          70% { transform: scaleX(-1) translateY(5px) scale(1); }
          100% { right: 100%; transform: scaleX(-1) translateY(0) scale(1); }
        }
        .animate-run-right {
          animation: runRight 14s linear infinite;
        }
        .animate-run-left {
          animation: runLeft 17s linear infinite;
        }
      `}</style>
    </div>
  )
}
