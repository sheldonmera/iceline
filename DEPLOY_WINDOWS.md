# Deploy no Windows

Este guia cobre um deploy prático da landing page IceLine em um servidor Windows/Windows Server usando Node.js, PM2 e IIS como proxy reverso.

## 1. Preparar o servidor

Instale estes itens no Windows:

- Node.js LTS: https://nodejs.org
- Git for Windows: https://git-scm.com/download/win
- IIS habilitado no Windows
- IIS URL Rewrite
- Application Request Routing, também chamado ARR

No Windows Server, habilite o IIS em:

```powershell
Install-WindowsFeature Web-Server, Web-WebServer, Web-Common-Http, Web-Default-Doc, Web-Static-Content, Web-Http-Errors, Web-Http-Redirect, Web-Filtering, Web-Mgmt-Console
```

Depois instale manualmente o URL Rewrite e o ARR pelos instaladores oficiais da Microsoft.

## 2. Copiar o projeto para o servidor

Escolha uma pasta, por exemplo:

```powershell
C:\sites\iceline
```

Clone ou copie os arquivos do projeto para essa pasta.

```powershell
git clone URL_DO_REPOSITORIO C:\sites\iceline
cd C:\sites\iceline
```

Se copiar manualmente, entre na pasta:

```powershell
cd C:\sites\iceline
```

## 3. Instalar dependências

Dentro da pasta do projeto:

```powershell
npm install
```

## 4. Configurar variáveis de ambiente

Crie um arquivo chamado `.env.local` na raiz do projeto:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=usuario@example.com
SMTP_PASS=sua_senha
CONTACT_EMAIL=contato@iceline.com.br
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
```

Ajustes importantes:

- `CONTACT_EMAIL` é o e-mail que receberá os contatos do site.
- `SMTP_USER` normalmente também é usado como remetente.
- Use `SMTP_PORT=465` para SMTP com SSL.
- Use `SMTP_PORT=587` para TLS/STARTTLS.
- `NEXT_PUBLIC_SITE_URL` deve ser o domínio final do site.

## 5. Gerar build de produção

```powershell
npm run build
```

Se o build terminar sem erros, o projeto está pronto para rodar em produção.

## 6. Rodar com PM2

Instale o PM2 globalmente:

```powershell
npm install -g pm2
```

Inicie a aplicação na porta `3000`:

```powershell
pm2 start npm --name iceline -- start
pm2 save
```

Teste no navegador do servidor:

```text
http://localhost:3000
```

## 7. Fazer o PM2 iniciar com o Windows

```powershell
npm install -g pm2-windows-startup
pm2-startup install
pm2 save
```

Reinicie o servidor e confira:

```powershell
pm2 list
```

## 8. Configurar IIS como proxy reverso

No IIS Manager:

1. Crie um site apontando para uma pasta simples, por exemplo `C:\sites\iceline-iis`.
2. Defina o domínio em `Bindings`, por exemplo `www.seudominio.com.br`.
3. Ative o proxy no ARR em `Application Request Routing Cache` > `Server Proxy Settings` > `Enable proxy`.
4. No site criado, abra `URL Rewrite`.
5. Crie uma regra `Reverse Proxy` apontando para `http://localhost:3000`.

Se preferir criar o arquivo manualmente, coloque este `web.config` na pasta do site do IIS:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="ReverseProxyToNext" stopProcessing="true">
          <match url="(.*)" />
          <action type="Rewrite" url="http://localhost:3000/{R:1}" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## 9. Configurar HTTPS

No IIS Manager:

1. Abra o site.
2. Clique em `Bindings`.
3. Adicione `https` na porta `443`.
4. Selecione o certificado SSL do domínio.
5. Confirme.

## 10. Atualizar depois do deploy

```powershell
cd C:\sites\iceline
git pull
npm install
npm run build
pm2 restart iceline
```

## 11. Comandos úteis

```powershell
pm2 list
pm2 logs iceline
pm2 restart iceline
pm2 stop iceline
```

## 12. Checklist final

- `npm run build` conclui sem erros.
- `.env.local` está preenchido no servidor.
- O formulário envia e-mail corretamente.
- `NEXT_PUBLIC_SITE_URL` usa o domínio final com `https`.
- O WhatsApp usa o número real em `components/FloatingActions.tsx`.
- O domínio aponta para o servidor.
- HTTPS está ativo no IIS.
- `https://seudominio.com.br/sitemap.xml` abre corretamente.
- `https://seudominio.com.br/robots.txt` abre corretamente.