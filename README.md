This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configurazione curriculum e CRM

Copia `.env.example` in `.env.local` e inserisci le credenziali del CRM e di MongoDB Atlas.

1. Crea un cluster gratuito MongoDB Atlas e un utente database con una password forte e univoca.
2. Autorizza nell'IP access list soltanto gli indirizzi del server che ospita il sito. Se il provider
   usa IP dinamici e devi autorizzare `0.0.0.0/0`, proteggi l'accesso con credenziali uniche e con un
   utente limitato al solo database dell'applicazione.
3. Copia la connection string in `MONGODB_URI` e configura `PUBLIC_SITE_URL` con il dominio HTTPS
   pubblico del sito. `MONGODB_URI` è un segreto server-side e non deve mai avere il prefisso
   `NEXT_PUBLIC_`.

Il server salva ogni curriculum come documento binario privato nella collection `curricula`. Nel
CRM inserisce in `TK_ALLEGATI` un URL del tipo `/api/curriculum/<token-casuale>`: il token è
imprevedibile e nel database viene conservato soltanto il suo hash. Se il CRM rifiuta la lead, il
documento appena caricato viene eliminato.

Per impostazione predefinita i curriculum scadono dopo 365 giorni e MongoDB li elimina tramite un
indice TTL. Imposta `MONGODB_CURRICULUM_RETENTION_DAYS=0` per conservarli senza scadenza oppure
scegli un numero diverso di giorni in base alla policy privacy applicabile.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
