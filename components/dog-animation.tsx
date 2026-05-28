"use client"

import Lottie from "lottie-react"
import dogAnimation from "@/public/perfil/91df62f2-1174-11ee-9d0e-873908132ba3.json"

export function DogAnimation() {
  return (
    <div className="fixed bottom-2 right-2 md:bottom-6 md:right-6 w-20 h-20 md:w-32 md:h-32 pointer-events-none z-50 select-none opacity-80 hover:opacity-100 transition-opacity">
      <Lottie 
        animationData={dogAnimation} 
        loop={true} 
        className="w-full h-full"
      />
    </div>
  )
}
