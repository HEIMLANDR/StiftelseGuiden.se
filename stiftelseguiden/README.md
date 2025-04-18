# StiftelseGuiden.se

En komplett guide till stiftelser i Sverige. Denna webbplats hjälper användare att förstå, starta och driva stiftelser i Sverige.

## Teknisk Stack

- Next.js 14
- React
- Tailwind CSS
- TypeScript

## Utveckling

För att köra projektet lokalt:

```bash
# Installera beroenden
npm install

# Starta utvecklingsservern
npm run dev
```

Besök sedan [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Bygga för produktion

```bash
# Bygg projektet
npm run build

# Kör produktionsversionen lokalt
npm start
```

## Deployment på Netlify

Denna webbplats är konfigurerad för att enkelt kunna deployas på Netlify.

### Automatisk deployment via GitHub

1. Forka eller pusha detta repo till GitHub
2. Logga in på Netlify och klicka på "New site from Git"
3. Välj GitHub som Git-provider
4. Välj ditt repo
5. Använd följande inställningar:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Klicka på "Deploy site"

### Manuell deployment

Om du föredrar att deploya manuellt:

1. Installera Netlify CLI: `npm install -g netlify-cli`
2. Bygg projektet: `npm run build`
3. Deploya till Netlify: `netlify deploy --prod`

## Formulär

Kontaktformuläret är konfigurerat för att fungera med Netlify Forms. När sidan är deployad på Netlify kommer formuläret automatiskt att fångas upp och hanteras av Netlify Forms.

## Anpassning

- Uppdatera innehåll: Redigera filerna i `src/app/` för att uppdatera sidornas innehåll
- Ändra design: Anpassa Tailwind-konfigurationen i `tailwind.config.js`
- Lägg till nya sidor: Skapa nya mappar i `src/app/` med en `page.tsx`-fil

## Licens

Copyright © 2025 StiftelseGuiden.se. Alla rättigheter förbehållna.

Skapad av [heimlandr.io](https://heimlandr.io)
