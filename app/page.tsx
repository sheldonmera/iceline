import Image from "next/image";
import { CheckCircle2, Phone, Star } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FloatingActions } from "@/components/FloatingActions";
import { Header } from "@/components/Header";
import { MaintenanceVideo } from "@/components/MaintenanceVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { brands, differentials, faqs, gallery, processSteps, services, stats, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <main id="inicio" className="overflow-hidden">
      <Header />
      <section className="relative flex min-h-screen items-center bg-navy pb-16 pt-28 text-white">
        <Image src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85" alt="Técnico especialista em refrigeração trabalhando" fill priority className="object-cover opacity-32" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,59,115,0.98),rgba(0,92,185,0.78),rgba(57,168,255,0.28))]" />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-white/24 bg-white/12 px-4 py-2 text-sm font-bold text-ice backdrop-blur">Refrigeração premium em Campo Grande</p>
            <h1 className="text-balance text-5xl font-black leading-[0.98] md:text-7xl"><span className="font-logo">IceLine</span> Refrigeração</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">Instalação, manutenção e diagnóstico técnico para sistemas de refrigeração e eletrodomésticos com atendimento ágil, acabamento limpo e padrão profissional.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contato" className="rounded-full bg-ice px-7 py-4 text-center font-black text-navy shadow-xl shadow-ice/30 transition hover:-translate-y-1 hover:bg-white">Solicitar atendimento</a>
              <a href="#servicos" className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/12">Ver serviços</a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="glass-panel rounded-[32px] p-5 md:p-7">
            <div className="rounded-[24px] bg-white/92 p-6 text-navy shadow-glass">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Plantão técnico</p>
                  <h2 className="mt-2 text-3xl font-black">Frio estável, operação segura.</h2>
                </div>
                <div className="grid size-16 place-items-center rounded-2xl bg-ice/20 text-brand"><Phone /></div>
              </div>
              <div className="grid gap-4">
                {["Câmaras frias e expositores", "Eletrodomésticos", "Planos preventivos", "Laudo e diagnóstico técnico"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-mist p-4 font-semibold"><CheckCircle2 className="text-ice" />{item}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="section-shell -mt-10 relative z-10 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="rounded-[24px] bg-white p-7 text-center shadow-premium">
            <strong className="text-4xl font-black text-brand">{stat.value}</strong>
            <p className="mt-2 font-semibold text-slate-600">{stat.label}</p>
          </Reveal>
        ))}
      </section>

      <section id="sobre" className="py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <MaintenanceVideo />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Sobre" title="Precisão técnica com atendimento humano" align="left">A IceLine combina conhecimento em refrigeração, organização de obra e comunicação clara para entregar serviços confiáveis em ambientes comerciais e residenciais.</SectionHeading>
            <div className="grid gap-4">
              {["Diagnóstico transparente antes da execução", "Orientação para reduzir consumo e evitar novas falhas", "Cuidado com limpeza, acabamento e segurança do local"].map((item) => <p key={item} className="flex gap-3 text-lg font-semibold text-slate-700"><CheckCircle2 className="mt-1 shrink-0 text-ice" />{item}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="servicos" className="bg-mist py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Serviços" title="Soluções para manter seu sistema no ponto certo">Do chamado emergencial ao plano preventivo, cada atendimento é pensado para estabilidade, eficiência e vida útil do equipamento.</SectionHeading>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => <Reveal key={service.title} delay={index * 0.05} className="rounded-[24px] bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-premium"><service.icon className="mb-6 size-11 text-brand" /><h3 className="text-xl font-black text-navy">{service.title}</h3><p className="mt-4 leading-7 text-slate-600">{service.description}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Marcas" title="Experiência com grandes fabricantes" />
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => <Reveal key={brand.name} className="flex h-28 w-[calc(50%-0.5rem)] items-center justify-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium md:w-[calc(25%-0.75rem)]"><Image src={brand.logo} alt={`Logo ${brand.name}`} width={220} height={90} className="max-h-16 w-auto max-w-full object-contain" loading="lazy" /></Reveal>)}
          </div>
        </div>
      </section>

      <section id="processo" className="bg-navy bg-radial-ice py-24 text-white">
        <div className="section-shell">
          <SectionHeading eyebrow="Como funciona" title="Um processo claro, sem surpresa no meio do caminho" tone="dark">Cada etapa aproxima o problema de uma solução definitiva, com comunicação objetiva e registro do que foi feito.</SectionHeading>
          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => <Reveal key={step.title} delay={index * 0.06} className="glass-panel rounded-[24px] p-6"><span className="text-4xl font-black text-ice">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{step.title}</h3><p className="mt-3 leading-7 text-white/76">{step.description}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Diferenciais" title="Padrão premium também aparece nos detalhes" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item) => <Reveal key={item.title} className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm"><item.icon className="mb-5 size-10 text-ice" /><h3 className="text-xl font-black text-navy">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.description}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-mist py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Galeria" title="Se esfria, esquenta ou lava, conte conosco !" />
          <div className="grid gap-5 md:grid-cols-2">
            {gallery.map((image, index) => <Reveal key={image.src} delay={index * 0.04} className="group overflow-hidden rounded-[28px] shadow-premium"><Image src={image.src} alt={image.alt} width={900} height={620} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Depoimentos" title="Confiança construída em campo" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => <Reveal key={item.name} className="rounded-[24px] bg-white p-7 shadow-premium"><div className="mb-5 flex gap-1 text-ice">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div><p className="leading-8 text-slate-700">&ldquo;{item.quote}&rdquo;</p><strong className="mt-6 block text-navy">{item.name}</strong><span className="text-sm font-semibold text-brand">{item.role}</span></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" align="left">As respostas essenciais antes de chamar a equipe técnica.</SectionHeading>
          <div className="grid gap-4">
            {faqs.map((faq) => <Reveal key={faq.question} className="rounded-[20px] bg-white p-6 shadow-sm"><h3 className="text-lg font-black text-navy">{faq.question}</h3><p className="mt-3 leading-7 text-slate-600">{faq.answer}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section id="contato" className="py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading eyebrow="Contato" title="Solicite uma visita técnica" align="left">Envie os dados do equipamento e a IceLine retorna com o melhor próximo passo para seu caso.</SectionHeading>
            <div className="rounded-[28px] bg-navy p-7 text-white shadow-premium">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-ice">Atendimento</p>
              <h3 className="mt-3 text-2xl font-black">Campo Grande e região</h3>
              <p className="mt-4 leading-8 text-white/76">Use o formulário, WhatsApp ou visite a localização no mapa abaixo. Ajuste telefone e e-mail nos arquivos de configuração conforme a operação.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </section>

      <section className="bg-mist pb-24">
        <div className="section-shell overflow-hidden rounded-[32px] bg-white shadow-premium">
          <div className="p-6 md:p-8"><SectionHeading eyebrow="Localização" title="IceLine Refrigeração no mapa" /></div>
          <div className="map-frame" dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.5876443489224!2d-54.597355024845285!3d-20.441043554425452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e951c86d521d%3A0xf0268b36ccde6e5f!2sIceLine%20Refrigera%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1782574535406!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' }} />
        </div>
      </section>

      <footer className="bg-navy py-12 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4"><Image src="/logo.png" alt="Logo IceLine Refrigeração" width={56} height={56} className="size-14 rounded-full bg-white object-cover" /><div><strong className="font-logo text-3xl font-black">IceLine</strong><p className="mt-2 text-white/68">Refrigeração e manutenção técnica em eletrodomésticos.</p><div className="mt-4 grid gap-1 text-sm font-semibold text-white/78"><a href="tel:+5567992434488" className="transition hover:text-ice">67 9 9243-4488</a><address className="not-italic">Rua Tapajós, 279 Campo Grande - MS - Brasil</address></div></div></div>
          <p className="text-sm text-white/60">© {new Date().getFullYear()} IceLine Refrigeração. Todos os direitos reservados.</p>
        </div>
      </footer>
      <FloatingActions />
    </main>
  );
}