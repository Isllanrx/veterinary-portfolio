"use client"

import Image from "next/image"
import { Download, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const WHATSAPP_NUMBER = "5527996176406"

export function HeroSection() {
  const { t } = useLanguage()

  // Função para renderizar texto com negrito fake (visto que não usamos markdown real aqui)
  const renderDescription = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/)
    return parts.map((part, i) => 
      i % 2 === 1 ? <span key={i} className="text-foreground font-bold">{part}</span> : part
    )
  }

  return (
    <section className="min-h-[90dvh] flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in flex flex-col items-center">
          {/* Foto de Perfil com Badge */}
          <div className="relative mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-[2.5rem] overflow-hidden border-2 border-border shadow-2xl bg-muted">
              <Image
                src="/perfil/perfil.webp"
                alt="Vitor Casagrande"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
            {/* Badge de Status */}
            <div className="absolute -bottom-4 -right-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border-2 border-background">
              {t.hero.status}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.4em]">
              {t.hero.tagline}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground tracking-tighter">
              Vitor Casagrande
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground italic mt-2 opacity-80">
              {t.hero.motto}
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
            {renderDescription(t.hero.description)}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" asChild className="w-full sm:w-64 h-14 text-base font-bold rounded-2xl shadow-lg shadow-primary/20">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.hero.whatsapp}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-64 h-14 text-base font-bold rounded-2xl border-2">
              <a href="https://drive.google.com/uc?export=download&id=1qZWeyK-_apgNdWnjchn2RrxGy4XB9Xdi" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {t.hero.download}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
