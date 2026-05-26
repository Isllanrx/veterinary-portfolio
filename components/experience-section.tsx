"use client"

import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
          {t.experience.title}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 sm:mb-20 rounded-full" />

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2 hidden sm:block" />

          {t.experience.items.map((exp, index) => (
            <div key={index} className={`relative flex flex-col sm:flex-row gap-8 items-center ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
              
              {/* Central Dot */}
              <div className="absolute left-0 sm:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary sm:-translate-x-1/2 z-10 hidden sm:block" />

              {/* Sidebar Info (Period & Hours) */}
              <div className="sm:w-1/2 flex flex-col items-start sm:px-8">
                <div className={`flex flex-col ${index % 2 === 0 ? "sm:items-start" : "sm:items-end"} w-full gap-2`}>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest leading-none bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                    {exp.period}
                  </span>
                  <div className="text-[11px] font-mono text-muted-foreground">
                    {exp.hours} {t.experience.accumulated}
                  </div>
                </div>
              </div>

              {/* Card Container */}
              <div className="sm:w-1/2 w-full">
                <Card className="border-border/60 shadow-md hover:border-primary/40 transition-colors bg-card text-card-foreground">
                  <CardHeader className="p-5 sm:p-6 pb-2">
                    <h3 className="text-lg font-extrabold leading-tight">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <p className="text-primary font-bold text-sm">{exp.organization}</p>
                      {exp.supervisor && (
                        <p className="text-[10px] text-muted-foreground italic font-medium">
                          {t.experience.supervision}: {exp.supervisor}
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 sm:p-6 pt-0">
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
