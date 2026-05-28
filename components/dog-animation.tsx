"use client"

import Lottie from "lottie-react"
import dogAnimation from "@/public/perfil/91df62f2-1174-11ee-9d0e-873908132ba3.json"

export function DogAnimation() {
  return (
    <div className="w-full h-32 flex items-center justify-center overflow-hidden bg-transparent pointer-events-none -my-16 relative z-0 opacity-40 select-none">
      <div className="w-[800px] h-full flex items-center justify-center">
        <Lottie 
          animationData={dogAnimation} 
          loop={true} 
          style={{ height: '300px', width: 'auto' }}
        />
      </div>
    </div>
  )
}
