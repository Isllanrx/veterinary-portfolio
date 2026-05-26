import { Users, Cat, Salad, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    icon: Users,
    title: "Campanhas de Esterilização",
    description:
      "Participação ativa em campanhas de esterilização de animais, contribuindo para o controle populacional e saúde pública.",
  },
  {
    icon: Cat,
    title: "Grupo de Estudos em Felinos",
    description:
      "Membro de grupo acadêmico dedicado ao estudo de medicina felina e comportamento animal.",
  },
  {
    icon: Salad,
    title: "Projetos de Extensão em Inspeção",
    description:
      "Participação em projetos de extensão relacionados à higiene pública e inspeção de alimentos.",
  },
]

const interests = [
  "Saúde Pública Veterinária",
  "Inspeção de Alimentos",
  "Programas de Bem-Estar Animal",
  "Prática Clínica Veterinária",
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
          Projetos & Atividades
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 sm:mb-12 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-colors group"
            >
              <CardHeader className="pb-2 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Areas of Interest */}
        <Card className="border-border">
          <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </div>
              <CardTitle className="text-base sm:text-lg">Áreas de Interesse</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-accent/10 text-accent border border-accent/20 rounded-full font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
