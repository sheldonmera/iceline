import { Award, Clock, Gauge, ShieldCheck, Snowflake, ThermometerSnowflake, Truck, Wrench } from "lucide-react";

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" }
];

export const stats = [
  { value: "+ de 7", label: "anos de experiência" },
  { value: "24h", label: "suporte emergencial" },
  { value: "98%", label: "clientes satisfeitos" }
];

export const services = [
  {
    icon: ThermometerSnowflake,
    title: "Refrigeração comercial",
    description: "Instalação e manutenção de câmaras frias, expositores, freezers e sistemas sob medida."
  },
  {
    icon: Snowflake,
    title: "Eletrodomésticos",
    description: "Manutenção e diagnóstico de geladeiras, freezers, lavadoras e equipamentos domésticos selecionados."
  },
  {
    icon: Wrench,
    title: "Manutenção preventiva",
    description: "Planos recorrentes para reduzir paradas, consumo de energia e custos inesperados."
  },
  {
    icon: Gauge,
    title: "Diagnóstico técnico",
    description: "Análise precisa de performance, vazamentos, componentes elétricos e rendimento térmico."
  }
];

export const brands = [
  { name: "Elgin", logo: "/brands/elgin.png" },
  { name: "Danfoss", logo: "/brands/danfoss.png" },
  { name: "Metalfrio", logo: "/brands/metalfrio.png" },
  { name: "Midea", logo: "/brands/midea.png" },
  { name: "Consul", logo: "/brands/consul.png" },
  { name: "Brastemp", logo: "/brands/brastemp.png" },
  { name: "Electrolux", logo: "/brands/electrolux.png" },
  { name: "LG", logo: "/brands/lg.png" },
  { name: "Embraco", logo: "/brands/embraco.png" },
  { name: "Samsung", logo: "/brands/samsung.png" }
];

export const processSteps = [
  { title: "Atendimento", description: "Entendemos o equipamento, a urgência e o contexto da operação." },
  { title: "Diagnóstico", description: "Avaliamos a causa raiz, a segurança e o melhor caminho técnico." },
  { title: "Execução", description: "Serviço limpo, documentado e com peças adequadas ao sistema." },
  { title: "Garantia", description: "Orientações finais, testes e acompanhamento pós-serviço." }
];

export const differentials = [
  { icon: ShieldCheck, title: "Serviço com garantia", description: "Transparência em cada etapa e compromisso com o resultado." },
  { icon: Clock, title: "Resposta ágil", description: "Atendimento pensado para quem não pode parar a operação." },
  { icon: Award, title: "Padrão premium", description: "Acabamento, organização e cuidado técnico acima do comum." },
  { icon: Truck, title: "Atendimento local", description: "Equipe pronta para Campo Grande e região." }
];

export const gallery = [
  {
    src: "/gallery/camara-fria.png",
    alt: "Câmara fria personalizada IceLine"
  },
  {
    src: "/gallery/geladeira-french-door.png",
    alt: "Geladeira French Door em inox"
  },
  {
    src: "/gallery/ilha-congelados.webp",
    alt: "Ilha para congelados comercial"
  },
  {
    src: "/gallery/maquina-lavar.webp",
    alt: "Máquina de lavar moderna"
  }
];

export const testimonials = [
  {
    quote: "Atendimento rápido e muito técnico. Resolveram uma falha que já tinha parado nossa câmara fria duas vezes.",
    name: "Mariana Costa",
    role: "Gestora de mercado"
  },
  {
    quote: "A instalação ficou limpa, silenciosa e bem dimensionada. Da visita ao pós-venda, tudo foi claro.",
    name: "Renato Almeida",
    role: "Empresário"
  },
  {
    quote: "Hoje temos manutenção preventiva e parou aquela correria de emergência. Excelente parceria.",
    name: "Camila Rocha",
    role: "Administradora"
  }
];

export const faqs = [
  { question: "A IceLine atende emergências?", answer: "Sim. O atendimento emergencial depende da disponibilidade da agenda e da localização, com prioridade para sistemas críticos." },
  { question: "Quais equipamentos vocês atendem?", answer: "Câmaras frias, freezers, expositores, sistemas comerciais e eletrodomésticos selecionados." },
  { question: "O serviço tem garantia?", answer: "Sim. A garantia é informada conforme o tipo de serviço, peça aplicada e condição do equipamento." },
  { question: "Como solicito um orçamento?", answer: "Você pode usar o formulário, WhatsApp ou telefone. Quanto mais detalhes sobre o equipamento, melhor será o primeiro atendimento." }
];