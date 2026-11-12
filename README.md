# Pedro Rios — portfólio

Site pessoal em Next.js 15, construído a partir do template Blayden.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

- Conteúdo: `data/portfolios.json` (projetos), `data/services.json` (stack), `data/resume.json` (trajetória), `data/socials.json`.
- Imagens: `public/img/pedro/`. O `og.png` é a prévia que aparece ao compartilhar o link (LinkedIn, WhatsApp).
- Metadados e SEO: `app/layout.tsx`.

## Publicação (GitHub Pages)

Cada push na `main` roda `.github/workflows/deploy.yml`, que gera o site estático (`out/`) e publica no GitHub Pages.

- Endereço atual: https://rios-pedro.github.io/portfoliopedrorios/
- Para usar domínio próprio: no workflow, deixe `NEXT_PUBLIC_BASE_PATH: ""` e troque `NEXT_PUBLIC_SITE_URL` pelo domínio; crie `public/CNAME` com o domínio (uma linha) e configure o domínio em Settings → Pages.

Testar o build igual ao do Pages, localmente:

```bash
NEXT_PUBLIC_BASE_PATH=/portfoliopedrorios npx next build
```
