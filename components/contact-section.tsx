"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { useLanguage } from "@/components/language-provider"

const WHATSAPP_NUMBER = "5527996176406"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const template = `*${t.contact.title}*

*${t.contact.form.nameLabel}:* ${formData.name}
*${t.contact.form.emailLabel}:* ${formData.email}
*${t.contact.form.subjectLabel}:* ${formData.subject}

*${t.contact.form.messageLabel}:*
${formData.message}`
    
    const encodedMessage = encodeURIComponent(template)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            {t.contact.title}
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base md:text-lg px-4">
            {t.contact.description}
          </p>
        </div>

        {/* Formulário Centralizado */}
        <Card className="border-border/60 shadow-xl shadow-foreground/5 rounded-2xl overflow-hidden bg-card">
          <CardContent className="p-5 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-xs sm:text-sm font-bold ml-1">{t.contact.form.nameLabel}</Label>
                  <Input
                    id="name"
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 h-11 sm:h-12 rounded-lg text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm font-bold ml-1">{t.contact.form.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 h-11 sm:h-12 rounded-lg text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="subject" className="text-xs sm:text-sm font-bold ml-1">{t.contact.form.subjectLabel}</Label>
                <Input
                  id="subject"
                  placeholder={t.contact.form.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 h-11 sm:h-12 rounded-lg text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="message" className="text-xs sm:text-sm font-bold ml-1">{t.contact.form.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 rounded-lg p-3 sm:p-4 min-h-[120px] sm:min-h-[150px] resize-none text-sm sm:text-base"
                />
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full h-12 sm:h-14 text-sm sm:text-base font-bold rounded-xl transition-all active:scale-[0.98]" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.contact.form.submit}
                </Button>
                <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
                  {t.contact.form.footer}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
