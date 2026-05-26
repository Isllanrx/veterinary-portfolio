"use client"

import { GraduationCap, Award, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="formacao" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
          {t.education.title}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-10 sm:mb-16 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Graduação */}
          <Card className="lg:col-span-1 border-border shadow-md hover:border-primary/50 transition-all bg-card flex flex-col">
            <CardHeader className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{t.education.graduation}</CardTitle>
              </div>
              <h4 className="font-bold text-foreground leading-snug">
                {t.education.course}
              </h4>
              <p className="text-primary text-sm font-semibold">{t.education.institution}</p>
              <p className="text-xs text-muted-foreground mt-2">{t.education.period}</p>
            </CardHeader>
            <CardContent className="p-6 pt-0 mt-auto">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t.education.studyAxes}</p>
                <div className="grid grid-cols-2 gap-2">
                  {t.education.axes.map((tag) => (
                    <div key={tag} className="px-3 py-1.5 bg-muted rounded-lg text-[10px] font-bold text-center text-muted-foreground border border-border/50">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificações */}
          <Card className="lg:col-span-1 border-border shadow-md hover:border-primary/50 transition-all bg-card flex flex-col">
            <CardHeader className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{t.education.certificationsTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="space-y-4">
                {t.education.certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-foreground truncate">{cert.title}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{cert.subtitle}</p>
                    </div>
                    <span className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Idiomas */}
          <Card className="lg:col-span-1 border-border shadow-md hover:border-primary/50 transition-all bg-card flex flex-col">
            <CardHeader className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{t.education.languagesTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="space-y-6">
                {t.education.languages.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <p className="text-sm font-bold text-foreground">{item.language}</p>
                      <p className="text-[10px] font-medium text-primary uppercase tracking-widest">{item.level}</p>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-muted/30 rounded-xl border border-border/50">
                <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                  {t.education.languageNote}
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
