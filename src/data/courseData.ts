import { CourseModule, BonusItem, FaqItem, AudienceItem, CourseFeature } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    number: "MÓDULO 1",
    title: "Primeiros passos",
    description: "A base fundamental para quem nunca mexeu com código antes.",
    iconName: "Compass",
    lessons: [
      "O que é programação",
      "O que é um site",
      "Como a IA pode ajudar",
      "Conhecendo as ferramentas",
    ],
  },
  {
    id: 2,
    number: "MÓDULO 2",
    title: "Inteligência Artificial na prática",
    description: "Como se comunicar com a IA e extrair o código exato que você precisa.",
    iconName: "Cpu",
    lessons: [
      "Google AI Studio",
      "Como criar prompts",
      "Como pedir para a IA criar seu site",
      "Como melhorar seus resultados",
    ],
  },
  {
    id: 3,
    number: "MÓDULO 3",
    title: "Criando um site profissional",
    description: "Montagem da estrutura visual, elementos interativos e design responsivo.",
    iconName: "Layout",
    lessons: [
      "Estrutura de um site",
      "Design",
      "Cores",
      "Imagens",
      "Botões",
      "WhatsApp",
      "Instagram",
      "Formulários",
      "Versão para celular",
    ],
  },
  {
    id: 4,
    number: "MÓDULO 4",
    title: "Publicando seu site",
    description: "Tirando o site do computador e colocando na internet com link real.",
    iconName: "Globe",
    lessons: [
      "GitHub",
      "Netlify",
      "Publicação",
      "Domínio",
      "Atualizações",
      "Como manter seu projeto funcionando",
    ],
  },
  {
    id: 5,
    number: "MÓDULO 5",
    title: "Projeto final",
    description: "Aplicação prática de todo o conhecimento em um projeto completo do início ao fim.",
    iconName: "Sparkles",
    lessons: [
      "Criando um site completo",
      "Do zero",
      "Usando IA",
      "Publicando na internet",
    ],
  },
];

export const COURSE_AUDIENCE: AudienceItem[] = [
  {
    id: 1,
    emoji: "🎯",
    title: "Está começando do zero",
    description: "Não tem nenhuma experiência prévia e quer um passo a passo simples e guiado.",
  },
  {
    id: 2,
    emoji: "💻",
    title: "Quer aprender uma habilidade digital",
    description: "Deseja dominar a criação de páginas modernas utilizando a tecnologia mais recente.",
  },
  {
    id: 3,
    emoji: "🤖",
    title: "Quer aprender a usar Inteligência Artificial na prática",
    description: "Sair da teoria e usar a IA como uma parceira de desenvolvimento ágil.",
  },
  {
    id: 4,
    emoji: "🚀",
    title: "Quer criar seus próprios projetos",
    description: "Tirar ideias da cabeça e transformá-las em sites funcionais para seus negócios ou projetos pessoais.",
  },
  {
    id: 5,
    emoji: "🌐",
    title: "Tem interesse em criar sites para outras pessoas",
    description: "Aprender a desenvolver páginas para amigos, comércios locais, clientes e empresas.",
  },
  {
    id: 6,
    emoji: "👨‍💻",
    title: "Quer começar a entrar no mundo da tecnologia",
    description: "Dar o primeiro passo sem travar em conceitos complexos de programação tradicional.",
  },
];

export const COURSE_FEATURES: CourseFeature[] = [
  {
    id: 1,
    emoji: "🎥",
    title: "14 aulas práticas",
    description: "Conteúdo direto ao ponto, sem enrolação e focado na prática.",
  },
  {
    id: 2,
    emoji: "🤖",
    title: "Inteligência Artificial",
    description: "Aprenda a guiar a IA para gerar páginas modernas e bem estruturadas.",
  },
  {
    id: 3,
    emoji: "💻",
    title: "Projeto completo",
    description: "Desenvolvimento de um projeto real do início ao fim durante as aulas.",
  },
  {
    id: 4,
    emoji: "🌐",
    title: "Publicação na internet",
    description: "Aprenda a publicar gratuitamente com GitHub e Netlify.",
  },
  {
    id: 5,
    emoji: "📚",
    title: "Material complementar",
    description: "Arquivos de apoio, resumos práticos e guias de consulta rápida.",
  },
  {
    id: 6,
    emoji: "⚡",
    title: "Acesso online",
    description: "Estude no seu próprio ritmo, onde e quando quiser.",
  },
];

export const COURSE_BONUSES: BonusItem[] = [
  {
    id: 1,
    badge: "BÔNUS #01",
    title: "Biblioteca de Prompts",
    description: "Prompts prontos para ajudar você a criar, melhorar e corrigir seus sites com eficiência máxima.",
    iconName: "Terminal",
    tag: "Exclusivo",
  },
  {
    id: 2,
    badge: "BÔNUS #02",
    title: "Checklist do Primeiro Site",
    description: "Um passo a passo completo e organizado para você não esquecer nenhuma etapa do desenvolvimento e publicação.",
    iconName: "CheckSquare",
    tag: "Guia Prático",
  },
  {
    id: 3,
    badge: "BÔNUS #03",
    title: "Desafio Final",
    description: "Coloque seu conhecimento em prática criando seu próprio projeto e consolidando todas as técnicas aprendidas.",
    iconName: "Award",
    tag: "Prática Real",
  },
];

export const COURSE_FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Preciso saber programar?",
    answer: "Não. O curso foi desenhado especificamente para quem está começando do zero. Você vai aprender a usar ferramentas de Inteligência Artificial para gerar o código e os elementos visuais, entendendo todo o processo sem precisar decorar linhas de código.",
  },
  {
    id: 2,
    question: "Preciso ter experiência com Inteligência Artificial?",
    answer: "Não é necessário. Você aprenderá desde a criação da sua conta nas ferramentas até a escrita dos prompts corretos para que a IA crie exatamente o que você deseja.",
  },
  {
    id: 3,
    question: "Qual computador preciso ter?",
    answer: "Qualquer computador ou notebook comum com acesso à internet e um navegador (como Google Chrome, Edge ou Firefox) é suficiente. Você não precisará de equipamentos caros ou programas pesados.",
  },
  {
    id: 4,
    question: "Vou aprender a criar um site completo?",
    answer: "Sim! Você aprenderá a criar a estrutura completa: cabeçalho, seções de apresentação, botões interativos (como botão do WhatsApp e links de redes sociais), formulários e layout adaptado para computadores e celulares.",
  },
  {
    id: 5,
    question: "Vou aprender a colocar o site na internet?",
    answer: "Com certeza. O curso inclui um módulo prático mostrando passo a passo como hospedar e publicar seu site gratuitamente utilizando ferramentas profissionais como GitHub e Netlify.",
  },
  {
    id: 6,
    question: "Posso fazer o curso pelo celular?",
    answer: "Você pode assistir às aulas em vídeo pelo celular perfeitamente. No entanto, para praticar e criar seus projetos, recomendamos utilizar um computador ou notebook para uma experiência mais confortável.",
  },
  {
    id: 7,
    question: "Por quanto tempo terei acesso?",
    answer: "Você terá acesso online ilimitado para assistir às aulas quantas vezes quiser e no seu próprio ritmo.",
  },
  {
    id: 8,
    question: "Como receberei acesso depois da compra?",
    answer: "Assim que o seu pagamento for confirmado pela plataforma de pagamento segura, você receberá instantaneamente um e-mail com seus dados de login e link de acesso à área de membros.",
  },
];

export const NO_CODE_CHECKLIST = [
  "Comece do zero",
  "Aprenda passo a passo",
  "Faça junto comigo",
  "Crie seu primeiro projeto",
  "Publique seu site",
];
