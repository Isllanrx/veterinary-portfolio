"use client"

import { Stethoscope, FlaskConical, ShieldCheck, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

const icons = [Stethoscope, FlaskConical, ShieldCheck, Wrench]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="habilidades" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
          {t.skills.title}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 sm:mb-12 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.skills.categories.map((category, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-colors bg-background/50"
              >
                <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-5">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-sm sm:text-base font-bold uppercase tracking-wider">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0">
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 leading-tight"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
