import { Heart, Microscope, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Heart,
    title: "Bem-Estar Animal",
    description: "Experiência prática em resgate, triagem clínica e campanhas de castração",
  },
  {
    icon: Microscope,
    title: "Diagnóstico & Lab",
    description: "Atuação em análises hematológicas, bioquímicas e suporte anestesiológico",
  },
  {
    icon: Shield,
    title: "Saúde Pública",
    description: "Foco em inspeção sanitária, biossegurança e conformidade com normas",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
          Sobre Mim
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 sm:mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-muted-foreground leading-relaxed text-center text-base sm:text-lg px-2">
            Estudante de Medicina Veterinária com formação orientada à clínica de pequenos e 
            grandes animais, saúde pública e inspeção de produtos de origem animal. 
            Sou comprometido com o bem-estar animal, a segurança alimentar e a 
            aplicação de boas práticas sanitárias, com foco em contribuir para a promoção 
            da saúde e a garantia da qualidade na cadeia produtiva.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="pt-5 sm:pt-6 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
