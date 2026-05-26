"use client"

import { Heart, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const WHATSAPP_NUMBER = "5527996176406"

export function Footer() {
  const { t } = useLanguage()

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "vitorcasagrande1306@gmail.com",
      href: "mailto:vitorcasagrande1306@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 27 99617-6406",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      icon: MapPin,
      label: t.navbar.education === "Education" ? "Location" : "Localização",
      value: "Vila Velha, ES",
      href: null,
    },
  ]

  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mb-8">
          {contactLinks.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <item.icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col items-start">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors leading-none"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-foreground leading-none">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Vitor Casagrande. {t.navbar.experience === "Experience" ? "All rights reserved." : "Todos os direitos reservados."}</p>
            <span className="hidden sm:block text-border">|</span>
            <div className="flex items-center gap-2">
              <span>{t.navbar.experience === "Experience" ? "Developed by" : "Desenvolvido por"} <span className="font-bold text-foreground">Isllan Toso</span></span>
              <a 
                href="https://www.linkedin.com/in/isllantoso/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:bg-primary/10 hover:text-primary transition-all"
                title="LinkedIn Isllan Toso"
                aria-label="LinkedIn Isllan Toso"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
