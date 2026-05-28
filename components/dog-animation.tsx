"use client"

import Lottie from "lottie-react"
import dogAnimation from "@/public/perfil/91df62f2-1174-11ee-9d0e-873908132ba3.json"

export function DogAnimation() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-50 select-none overflow-hidden">
      {/* Cachorro da Esquerda para Direita */}
      <div className="absolute bottom-0 animate-run-right w-24 h-24 md:w-32 md:h-32 opacity-80">
        <Lottie 
          animationData={dogAnimation} 
          loop={true} 
          className="w-full h-full"
        />
      </div>

      {/* Cachorro da Direita para Esquerda */}
      <div className="absolute bottom-0 animate-run-left w-24 h-24 md:w-32 md:h-32 opacity-80" style={{ transform: 'scaleX(-1)' }}>
        <Lottie 
          animationData={dogAnimation} 
          loop={true} 
          className="w-full h-full"
        />
      </div>

      <style jsx global>{`
        @keyframes runRight {
          from { left: -150px; }
          to { left: 100%; }
        }
        @keyframes runLeft {
          from { right: -150px; }
          to { right: 100%; }
        }
        .animate-run-right {
          animation: runRight 15s linear infinite;
        }
        .animate-run-left {
          animation: runLeft 18s linear infinite;
        }
      `}</style>
    </div>
  )
}
