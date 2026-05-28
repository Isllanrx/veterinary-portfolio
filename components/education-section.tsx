"use client"

import { GraduationCap, Award, Globe, ExternalLink, Calendar, MapPin } from "lucide-react"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          
          {/* Coluna da Esquerda: Graduação e Idiomas */}
          <div className="space-y-6 sm:space-y-8 h-full flex flex-col">
            
            {/* Graduação */}
            <Card className="border-border shadow-md hover:border-primary/50 transition-all bg-card flex-1">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{t.education.graduation}</CardTitle>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground leading-tight mb-1">
                      {t.education.course}
                    </h4>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <MapPin className="h-4 w-4" />
                      <span>{t.education.institution}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 p-3 rounded-xl w-fit border border-border/50">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{t.education.period}</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Idiomas */}
            <Card className="border-border shadow-md hover:border-primary/50 transition-all bg-card">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{t.education.languagesTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {t.education.languages.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <p className="text-sm font-bold text-foreground">{item.language}</p>
                        <p className="text-[10px] font-medium text-primary uppercase tracking-widest">{item.level}</p>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden border border-border/30">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                    {t.education.languageNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna da Direita: Certificações */}
          <Card className="border-border shadow-md hover:border-primary/50 transition-all bg-card h-full">
            <CardHeader className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{t.education.certificationsTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-8">
                {/* Congressos */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border/50" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 px-2">
                      {t.education.certificationCategories.congress}
                    </p>
                    <div className="h-px flex-1 bg-border/50" />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {t.education.certifications.filter(c => c.category === 'congress').map((cert, index) => (
                      <CertificationItem key={index} cert={cert} />
                    ))}
                  </div>
                </div>

                {/* Cursos */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border/50" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 px-2">
                      {t.education.certificationCategories.courses}
                    </p>
                    <div className="h-px flex-1 bg-border/50" />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {t.education.certifications.filter(c => c.category === 'courses').map((cert, index) => (
                      <CertificationItem key={index} cert={cert} />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}

function CertificationItem({ cert }: { cert: any }) {
  return (
    <a 
      href={cert.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex justify-between items-center gap-4 p-3 rounded-xl hover:bg-muted transition-all group border border-transparent hover:border-border/50"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
            {cert.title}
          </p>
          <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
        </div>
        <p className="text-[10px] text-muted-foreground truncate mt-0.5">{cert.subtitle}</p>
      </div>
      <span className="text-[10px] font-bold bg-muted group-hover:bg-background px-2.5 py-1 rounded-lg text-muted-foreground border border-border/50 transition-colors shrink-0">
        {cert.date}
      </span>
    </a>
  )
}
