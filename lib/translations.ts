export type Language = "pt" | "en" | "es"

export const translations = {
  pt: {
    navbar: {
      experience: "Experiência",
      skills: "Habilidades",
      education: "Formação",
      contact: "Contato",
      language: "Alterar idioma",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      tagline: "Medicina Veterinária",
      motto: '"Cuidar é o nosso compromisso"',
      status: "Em Formação",
      description: "Focado em **saúde pública**, **inspeção sanitária** e **bem-estar animal**. Experiência consolidada em suporte clínico e análises laboratoriais, orientada à qualidade técnica e biossegurança.",
      whatsapp: "Contato via WhatsApp",
      download: "Download Currículo",
    },
    experience: {
      title: "Trajetória Profissional",
      accumulated: "Acumuladas",
      supervision: "Supervisão",
      items: [
        {
          title: "Estagiário Remunerado — Bem-Estar Animal",
          organization: "Prefeitura Municipal de Vila Velha",
          period: "Jan/2024 – Fev/2025",
          supervisor: "Celso Christo",
          hours: "1.500 horas",
          responsibilities: [
            "Resgate e recolhimento de animais em situação de vulnerabilidade e maus-tratos nas vias públicas.",
            "Triagem e avaliação clínica inicial dos animais resgatados com encaminhamento para atendimento.",
            "Manejo e resgate de animais silvestres e domésticos em situação de risco.",
            "Orientação à população sobre posse responsável, guarda consciente e legislação de proteção.",
            "Apoio na logística de campanhas de castração e organização documental dos atendimentos.",
          ],
        },
        {
          title: "Estagiário Voluntário — Laboratório Clínico",
          organization: "Universidade Vila Velha (UVV)",
          period: "Mar/2025 – Jun/2025",
          supervisor: "Prof. Paulo Henrique Puphal Kuster",
          hours: "97 horas",
          responsibilities: [
            "Apoio às aulas práticas da disciplina de Laboratório Clínico Veterinário.",
            "Auxílio na preparação e execução de análises hematológicas, bioquímicas e urinárias.",
            "Confecção de lâminas para análise microscópica e interpretação diagnóstica.",
            "Coleta e preparo de amostras biológicas para exames laboratoriais de rotina.",
            "Manutenção da biossegurança e higiene laboratorial seguindo normas técnicas.",
          ],
        },
        {
          title: "Estagiário Voluntário — Anestesiologia Veterinária",
          organization: "Universidade Vila Velha (UVV)",
          period: "Jan/2023 – Jul/2023",
          hours: "60 horas",
          responsibilities: [
            "Auxílio no preparo e monitoração anestésica em procedimentos cirúrgicos eletivos e de urgência.",
            "Verificação e organização de circuitos, vaporizadores e monitores multiparamétricos.",
            "Suporte na avaliação pré-anestésica dos pacientes e definição do escore de risco (ASA).",
            "Auxílio na administração e controle de protocolos de MPA e indução anestésica.",
            "Monitoração de parâmetros vitais: FC, FR, SpO₂, temperatura e pressão arterial.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      categories: [
        {
          title: "Clínica & Anestesia",
          skills: [
            "Clínica de pequenos e grandes animais",
            "Avaliação pré-anestésica e escore ASA",
            "Monitoramento multiparamétrico (FC, FR, SpO2, PAr)",
            "Protocolos de MPA e indução anestésica",
          ],
        },
        {
          title: "Laboratório & Diagnóstico",
          skills: [
            "Hematologia (Wright/Giemsa e morfologia)",
            "Bioquímica (analisadores automatizados)",
            "Urinálise e Parasitologia (sedimentos e fezes)",
            "Confecção e interpretação de lâminas",
          ],
        },
        {
          title: "Saúde Pública & Inspeção",
          skills: [
            "Inspeção de carnes, leite, ovos e derivados",
            "SUASA, SISBI-POA e vigilância sanitária",
            "Normas MAPA, ANVISA e Codex Alimentarius",
            "Bem-estar animal e controle populacional",
          ],
        },
        {
          title: "Tecnologias & Ferramentas",
          skills: [
            "Sistemas de prontuário eletrônico",
            "Pacote Office (Excel avançado para controles)",
            "Bases científicas (SciELO, PubMed, Portal CAPES)",
            "Equipamentos anestésicos e cirúrgicos",
          ],
        },
      ],
    },
    education: {
      title: "Formação Acadêmica",
      graduation: "Graduação",
      course: "Bacharelado em Medicina Veterinária",
      institution: "UVV - Vila Velha/ES",
      period: "Jul/2022 – Jul/2027 (Previsão)",
      certificationsTitle: "Certificações",
      certificationCategories: {
        congress: "Congressos",
        courses: "Cursos e Treinamentos"
      },
      certifications: [
        { 
          title: "CONASIM 2025", 
          subtitle: "Insp. Municipal (23h)", 
          date: "2025",
          category: "congress",
          link: "https://drive.google.com/file/d/1mtdDKPn2H-bI9FEPigcrDdsEuy2JGJFs/view?usp=sharing"
        },
        { 
          title: "Congresso de Cardiologia - HIPE", 
          subtitle: "Cardiologia (8h)", 
          date: "2024",
          category: "congress",
          link: "https://drive.google.com/file/d/1poP-hf877iEv5xlli4FwlZMaRHxqS9Ss/view?usp=sharing"
        },
        { 
          title: "The Horse Course", 
          subtitle: "Univ. of Florida", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1WWmf3bFhSX_YpGN2--mddkiufbxpcJkv/view?usp=sharing"
        },
        { 
          title: "Auxiliar Veterinário", 
          subtitle: "Grande Porte (18h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/17QZpU0oQrWQnyI4_SS99NEIgBTysrGWA/view?usp=sharing"
        },
        { 
          title: "Manejo Pre-Abate", 
          subtitle: "Agroindustrial (9h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1ef2AKHtjfmJNK4QGoYriNvIqsdE_67MC/view?usp=sharing"
        },
        { 
          title: "Farmacologia", 
          subtitle: "Básica (51.5h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1RfOInvu59beaN6BGcB9f_YSjGFgn5kNR/view?usp=sharing"
        },
        { 
          title: "Pacote Office", 
          subtitle: "Produtividade", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1ZAKNcbLe5pKQ_rqNuzoohaX5OYCcW94l/view?usp=sharing"
        },
      ],
      languagesTitle: "Idiomas",
      languages: [
        { language: "Português", level: "Nativo", progress: 100 },
        { language: "Inglês", level: "Intermediário", progress: 65 },
        { language: "Espanhol", level: "Intermediário", progress: 55 },
      ],
      languageNote: "*Foco em leitura técnica de artigos científicos e cursos internacionais.",
    },
    contact: {
      title: "Entre em Contato",
      description: "Estou à disposição para novos desafios e parcerias na área veterinária. Escolha o melhor canal ou envie uma mensagem direta.",
      form: {
        nameLabel: "Nome Completo",
        namePlaceholder: "Seu nome",
        emailLabel: "E-mail",
        emailPlaceholder: "seu@email.com",
        subjectLabel: "Assunto",
        subjectPlaceholder: "Como posso ajudar?",
        messageLabel: "Mensagem",
        messagePlaceholder: "Descreva brevemente sua solicitação...",
        submit: "Enviar Mensagem via WhatsApp",
        footer: "Atendimento rápido e personalizado via WhatsApp.",
        validation: {
          limitExceeded: "Limite de caracteres excedido",
          limitMessage: "A mensagem deve ter no máximo 400 caracteres.",
          maxReached: "Limite máximo de caracteres atingido.",
        },
      },
    },
  },
  en: {
    navbar: {
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      language: "Change Language",
      openMenu: "Open Menu",
      closeMenu: "Close Menu",
    },
    hero: {
      tagline: "Veterinary Medicine",
      motto: '"Caring is our commitment"',
      status: "Veterinary Student",
      description: "Focusing on **public health**, **sanitary inspection**, and **animal welfare**. Proven experience in clinical support and laboratory analysis, committed to technical excellence and biosafety.",
      whatsapp: "Contact via WhatsApp",
      download: "Download Resume",
    },
    experience: {
      title: "Professional Experience",
      accumulated: "Total",
      supervision: "Supervision",
      items: [
        {
          title: "Intern — Animal Welfare",
          organization: "Vila Velha City Hall",
          period: "Jan 2024 – Feb 2025",
          supervisor: "Celso Christo",
          hours: "1,500 hours",
          responsibilities: [
            "Rescued and recovered animals in vulnerable or abusive situations within public areas.",
            "Performed initial clinical triage and evaluation of rescued animals for veterinary referral.",
            "Managed and assisted in the rescue of both wildlife and domestic animals in high-risk scenarios.",
            "Provided public guidance on responsible ownership, ethical guardianship, and animal protection laws.",
            "Supported logistics for sterilization campaigns and maintained organized clinical records.",
          ],
        },
        {
          title: "Intern — Clinical Pathology Laboratory",
          organization: "Vila Velha University (UVV)",
          period: "Mar 2025 – Jun 2025",
          supervisor: "Prof. Paulo Henrique Puphal Kuster",
          hours: "97 hours",
          responsibilities: [
            "Supported practical classes for the Veterinary Clinical Pathology discipline.",
            "Assisted in performing and analyzing hematological, biochemical, and urinalysis tests.",
            "Prepared slides for microscopic analysis and diagnostic interpretation.",
            "Collected and processed biological samples for routine laboratory screenings.",
            "Ensured strict adherence to biosafety protocols and laboratory hygiene standards.",
          ],
        },
        {
          title: "Intern — Veterinary Anesthesiology",
          organization: "Vila Velha University (UVV)",
          period: "Jan 2023 – Jul 2023",
          hours: "60 hours",
          responsibilities: [
            "Assisted in anesthetic preparation and monitoring for elective and emergency surgical procedures.",
            "Verified and organized anesthetic circuits, vaporizers, and multiparameter monitors.",
            "Contributed to pre-anesthetic patient evaluations and ASA physical status classification.",
            "Assisted in the administration and management of pre-medication (MPA) and induction protocols.",
            "Monitored vital parameters, including HR, RR, SpO₂, temperature, and blood pressure.",
          ],
        },
      ],
    },
    skills: {
      title: "Professional Skills",
      categories: [
        {
          title: "Clinical & Anesthesia",
          skills: [
            "Small and large animal clinical practice",
            "Pre-anesthetic assessment and ASA scoring",
            "Multiparameter monitoring (HR, RR, SpO2, BP)",
            "Pre-medication and induction protocols",
          ],
        },
        {
          title: "Lab & Diagnostics",
          skills: [
            "Hematology (Wright/Giemsa staining and morphology)",
            "Biochemistry (automated analyzer systems)",
            "Urinalysis and Parasitology (sediment and fecal exams)",
            "Slide preparation and diagnostic microscopy",
          ],
        },
        {
          title: "Public Health & Inspection",
          skills: [
            "Inspection of meat, dairy, eggs, and derivatives",
            "Sanitary surveillance and regulatory compliance (SUASA, SISBI-POA)",
            "International and domestic standards (MAPA, ANVISA, Codex Alimentarius)",
            "Animal welfare and population control management",
          ],
        },
        {
          title: "Technology & Tools",
          skills: [
            "Electronic Medical Record (EMR) systems",
            "Microsoft Office Suite (Advanced Excel for data management)",
            "Scientific research (SciELO, PubMed, CAPES)",
            "Specialized anesthetic and surgical equipment",
          ],
        },
      ],
    },
    education: {
      title: "Academic Background",
      graduation: "Education",
      course: "B.S. in Veterinary Medicine",
      institution: "UVV - Vila Velha/ES",
      period: "Jul 2022 – Jul 2027 (Expected Completion)",
      certificationsTitle: "Certifications",
      certificationCategories: {
        congress: "Congresses",
        courses: "Courses & Training"
      },
      certifications: [
        { 
          title: "CONASIM 2025", 
          subtitle: "Municipal Inspection (23h)", 
          date: "2025",
          category: "congress",
          link: "https://drive.google.com/file/d/1mtdDKPn2H-bI9FEPigcrDdsEuy2JGJFs/view?usp=sharing"
        },
        { 
          title: "HIPE Cardiology Congress", 
          subtitle: "Cardiology (8h)", 
          date: "2024",
          category: "congress",
          link: "https://drive.google.com/file/d/1poP-hf877iEv5xlli4FwlZMaRHxqS9Ss/view?usp=sharing"
        },
        { 
          title: "The Horse Course", 
          subtitle: "University of Florida", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1WWmf3bFhSX_YpGN2--mddkiufbxpcJkv/view?usp=sharing"
        },
        { 
          title: "Veterinary Assistant", 
          subtitle: "Large Animals (18h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/17QZpU0oQrWQnyI4_SS99NEIgBTysrGWA/view?usp=sharing"
        },
        { 
          title: "Pre-Slaughter Management", 
          subtitle: "Agro-industrial (9h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1ef2AKHtjfmJNK4QGoYriNvIqsdE_67MC/view?usp=sharing"
        },
        { 
          title: "Basic Pharmacology", 
          subtitle: "Training (51.5h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1RfOInvu59beaN6BGcB9f_YSjGFgn5kNR/view?usp=sharing"
        },
        { 
          title: "Office Suite", 
          subtitle: "Productivity", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1ZAKNcbLe5pKQ_rqNuzoohaX5OYCcW94l/view?usp=sharing"
        },
      ],
      languagesTitle: "Languages",
      languages: [
        { language: "Portuguese", level: "Native", progress: 100 },
        { language: "English", level: "Intermediate", progress: 65 },
        { language: "Spanish", level: "Intermediate", progress: 55 },
      ],
      languageNote: "*Focus on technical literature review and international coursework.",
    },
    contact: {
      title: "Get in Touch",
      description: "I am available for new challenges and partnerships in the veterinary field. Choose the best channel or send a direct message.",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Email Address",
        emailPlaceholder: "your@email.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "How can I help?",
        messageLabel: "Message",
        messagePlaceholder: "Briefly describe your request...",
        submit: "Send Message via WhatsApp",
        footer: "Fast and personalized service via WhatsApp.",
        validation: {
          limitExceeded: "Character limit exceeded",
          limitMessage: "The message must have a maximum of 400 characters.",
          maxReached: "Maximum character limit reached.",
        },
      },
    },
  },
  es: {
    navbar: {
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Formación",
      contact: "Contacto",
      language: "Cambiar idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      tagline: "Medicina Veterinaria",
      motto: '"Cuidar es nuestro compromiso"',
      status: "En Formación",
      description: "Enfocado en **salud pública**, **inspección sanitaria** e **bienestar animal**. Experiencia consolidada en soporte clínico y análisis de laboratorio, orientada a la calidad técnica y bioseguridad.",
      whatsapp: "Contacto por WhatsApp",
      download: "Descargar Currículum",
    },
    experience: {
      title: "Trayectoria Profesional",
      accumulated: "Total",
      supervision: "Supervisión",
      items: [
        {
          title: "Pasante Remunerado — Bienestar Animal",
          organization: "Ayuntamiento de Vila Velha",
          period: "Ene/2024 – Feb/2025",
          supervisor: "Celso Christo",
          hours: "1.500 horas",
          responsibilities: [
            "Rescate y recolección de animales en situación de vulnerabilidad e maltrato en vías públicas.",
            "Triaje y evaluación clínica inicial de los animales rescatados con derivación para atención.",
            "Manejo y rescate de animales silvestres y domésticos en situación de riesgo.",
            "Orientación a la población sobre tenencia responsable, tutela consciente y leyes de protección.",
            "Apoyo en la logística de campañas de castración y organización documental de los servicios.",
          ],
        },
        {
          title: "Pasante Voluntario — Laboratorio Clínico",
          organization: "Universidad de Vila Velha (UVV)",
          period: "Mar/2025 – Jun/2025",
          supervisor: "Prof. Paulo Henrique Puphal Kuster",
          hours: "97 horas",
          responsibilities: [
            "Apoyo a las clases prácticas de la asignatura de Laboratorio Clínico Veterinario.",
            "Ayuda en la preparación y ejecución de análisis hematológicos, bioquímicos y urinarios.",
            "Preparación de láminas para análisis microscópico e interpretación diagnóstica.",
            "Recolección y preparación de muestras biológicas para pruebas de laboratorio de rutina.",
            "Mantenimiento de la bioseguridad e higiene del laboratorio siguiendo normas técnicas.",
          ],
        },
        {
          title: "Pasante Voluntario — Anestesiología Veterinaria",
          organization: "Universidad de Vila Velha (UVV)",
          period: "Ene/2023 – Jul/2023",
          hours: "60 horas",
          responsibilities: [
            "Ayuda en el preparado e monitoreo anestésico en cirugías electivas y de urgencia.",
            "Verificación e organización de circuitos, vaporizadores y monitores multiparamétricos.",
            "Soporte en la evaluación preanestésica de los pacientes y definición del escore de riesgo (ASA).",
            "Ayuda en la administración y control de protocolos de MPA e inducción anestésica.",
            "Monitoreo de parámetros vitales: FC, FR, SpO₂, temperatura y presión arterial.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      categories: [
        {
          title: "Clínica y Anestesia",
          skills: [
            "Clínica de pequeños y grandes animales",
            "Evaluación preanestésica y escore ASA",
            "Monitoreo multiparamétrico (FC, FR, SpO2, PAr)",
            "Protocolos de MPA e inducción anestésica",
          ],
        },
        {
          title: "Lab y Diagnóstico",
          skills: [
            "Hematología (Wright/Giemsa y morfología)",
            "Bioquímica (analizadores automatizados)",
            "Urianálisis y Parasitología (sedimentos y heces)",
            "Preparación e interpretación de láminas",
          ],
        },
        {
          title: "Salud Pública e Inspección",
          skills: [
            "Inspección de carnes, leche, huevos y derivados",
            "SUASA, SISBI-POA y vigilancia sanitaria",
            "Normas MAPA, ANVISA y Codex Alimentarius",
            "Bienestar animal y control poblacional",
          ],
        },
        {
          title: "Tecnología y Herramientas",
          skills: [
            "Sistemas de registro veterinario electrónico",
            "Paquete Office (Excel avanzado para controles)",
            "Bases científicas (SciELO, PubMed, Portal CAPES)",
            "Equipamiento anestésico y quirúrgico",
          ],
        },
      ],
    },
    education: {
      title: "Formación Académica",
      graduation: "Graduación",
      course: "Licenciatura en Medicina Veterinaria",
      institution: "UVV - Vila Velha/ES",
      period: "Ene/2022 – Jul/2027 (Previsión)",
      certificationsTitle: "Certificaciones",
      certificationCategories: {
        congress: "Congresos",
        courses: "Cursos y Capacitación"
      },
      certifications: [
        { 
          title: "CONASIM 2025", 
          subtitle: "Insp. Municipal (23h)", 
          date: "2025",
          category: "congress",
          link: "https://drive.google.com/file/d/1mtdDKPn2H-bI9FEPigcrDdsEuy2JGJFs/view?usp=sharing"
        },
        { 
          title: "Congreso de Cardiología - HIPE", 
          subtitle: "Cardiología (8h)", 
          date: "2024",
          category: "congress",
          link: "https://drive.google.com/file/d/1poP-hf877iEv5xlli4FwlZMaRHxqS9Ss/view?usp=sharing"
        },
        { 
          title: "The Horse Course", 
          subtitle: "Univ. de Florida", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1WWmf3bFhSX_YpGN2--mddkiufbxpcJkv/view?usp=sharing"
        },
        { 
          title: "Auxiliar Veterinario", 
          subtitle: "Grandes Animales (18h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/17QZpU0oQrWQnyI4_SS99NEIgBTysrGWA/view?usp=sharing"
        },
        { 
          title: "Manejo Pre-Abate", 
          subtitle: "Agroindustrial (9h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1ef2AKHtjfmJNK4QGoYriNvIqsdE_67MC/view?usp=sharing"
        },
        { 
          title: "Farmacología", 
          subtitle: "Básica (51.5h)", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1RfOInvu59beaN6BGcB9f_YSjGFgn5kNR/view?usp=sharing"
        },
        { 
          title: "Paquete Office", 
          subtitle: "Productividad", 
          date: "2023",
          category: "courses",
          link: "https://drive.google.com/file/d/1ZAKNcbLe5pKQ_rqNuzoohaX5OYCcW94l/view?usp=sharing"
        },
      ],
      languagesTitle: "Idiomas",
      languages: [
        { language: "Português", level: "Nativo", progress: 100 },
        { language: "Inglés", level: "Intermedio", progress: 65 },
        { language: "Español", level: "Intermedio", progress: 55 },
      ],
      languageNote: "*Enfoque en lectura técnica de artículos científicos y cursos internacionales.",
    },
    contact: {
      title: "Ponerse en Contacto",
      description: "Estoy a su disposición para nuevos desafíos y colaboraciones en el área veterinaria. Elija el mejor canal o envíe un mensaje directo.",
      form: {
        nameLabel: "Nombre Completo",
        namePlaceholder: "Su nombre",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "su@email.com",
        subjectLabel: "Asunto",
        subjectPlaceholder: "¿Cómo puedo ayudar?",
        messageLabel: "Mensaje",
        messagePlaceholder: "Describa brevemente su solicitud...",
        submit: "Enviar Mensaje por WhatsApp",
        footer: "Atención rápida y personalizada por WhatsApp.",
        validation: {
          limitExceeded: "Límite de caracteres excedido",
          limitMessage: "El mensaje debe tener un máximo de 400 caracteres.",
          maxReached: "Límite máximo de caracteres alcanzado.",
        },
      },
    },
  },
}
