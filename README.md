# IceLine Refrigeração

Landing page premium criada com Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod e Nodemailer.

## Recursos

- Header transparente com mudança ao rolar
- Hero fullscreen com imagem, gradiente e glassmorphism
- Seções de sobre, serviços, marcas, processo, diferenciais, galeria, depoimentos, FAQ, contato, mapa e rodapé
- Formulário validado com Zod e React Hook Form
- API Route em `app/api/contact/route.ts` para envio via SMTP com Nodemailer
- Botão flutuante de WhatsApp e botão voltar ao topo
- SEO com Metadata API, OpenGraph, Twitter Cards, JSON-LD LocalBusiness, `robots.txt`, `sitemap.xml`, favicon e manifest
- Layout responsivo e imagens com lazy loading
- Logo real da IceLine em `public/logo.png`
- Fonte Adelle carregada com `next/font/local`

## Instalação

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=usuario@example.com
SMTP_PASS=sua_senha
CONTACT_EMAIL=contato@iceline.com.br
NEXT_PUBLIC_SITE_URL=https://www.icelinerefrigeracao.com.br
```

`CONTACT_EMAIL` é o destinatário dos contatos enviados pelo formulário. Para SMTP com SSL normalmente use porta `465`; para TLS/STARTTLS normalmente use `587`.

## Personalização

- Troque imagens e textos em `lib/data.ts`
- Atualize telefone do WhatsApp em `components/FloatingActions.tsx`
- Ajuste dados locais e telefone no JSON-LD em `app/layout.tsx`
- Substitua assets em `public/` por arquivos finais da marca quando disponíveis

## Deploy

O projeto está pronto para Vercel ou qualquer ambiente Node compatível com Next.js.

```bash
npm run build
npm run start
```

No provedor de deploy, configure as mesmas variáveis de ambiente do arquivo `.env.example`.

## Tutorial de deploy no Windows

Veja o passo a passo em [DEPLOY_WINDOWS.md](DEPLOY_WINDOWS.md).