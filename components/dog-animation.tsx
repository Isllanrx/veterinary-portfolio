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
        @keyframes runRoundTripRight {
          /* Ida: Esquerda para Direita */
          0% { left: -120px; transform: scaleX(1) translateY(0) scale(0.9); }
          22% { left: 50%; transform: scaleX(1) translateY(-20px) scale(0.85); }
          49% { left: calc(100% + 20px); transform: scaleX(1) translateY(0) scale(0.9); }
          
          /* Giro Rápido na Direita */
          50% { left: calc(100% + 20px); transform: scaleX(-1) translateY(0) scale(0.9); }
          
          /* Volta: Direita para Esquerda */
          72% { left: 50%; transform: scaleX(-1) translateY(-20px) scale(0.85); }
          99% { left: -120px; transform: scaleX(-1) translateY(0) scale(0.9); }
          
          /* Giro Rápido na Esquerda */
          100% { left: -120px; transform: scaleX(1) translateY(0) scale(0.9); }
        }

        @keyframes runRoundTripLeft {
          /* Ida: Direita para Esquerda */
          0% { right: -120px; transform: scaleX(-1) translateY(0) scale(1); }
          22% { right: 50%; transform: scaleX(-1) translateY(15px) scale(1.05); }
          49% { right: calc(100% + 20px); transform: scaleX(-1) translateY(0) scale(1); }
          
          /* Giro Rápido na Esquerda */
          50% { right: calc(100% + 20px); transform: scaleX(1) translateY(0) scale(1); }
          
          /* Volta: Esquerda para Direita */
          72% { right: 50%; transform: scaleX(1) translateY(15px) scale(1.05); }
          99% { right: -120px; transform: scaleX(1) translateY(0) scale(1); }
          
          /* Giro Rápido na Direita */
          100% { right: -120px; transform: scaleX(-1) translateY(0) scale(1); }
        }

        .animate-run-right {
          animation: runRoundTripRight 22s linear infinite;
        }
        .animate-run-left {
          animation: runRoundTripLeft 26s linear infinite;
        }
      `}</style>
    </div>
  )
}
