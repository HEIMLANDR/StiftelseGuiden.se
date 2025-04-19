# StiftelseGuiden.se

En komplett guide till stiftelser i Sverige. Denna webbplats hjälper användare att förstå, starta och driva stiftelser i Sverige, samt hitta information om aktiva stiftelser.

## Funktioner

- **Omfattande information** om hur man startar, driver och ansöker om medel från stiftelser
- **Juridisk vägledning** om stiftelselagen och stiftelseförordningen
- **Verktyg** som kapitalberäknare för att hjälpa till vid stiftelsebildning
- **Dokumentmallar** för ansökningar, stadgar, budgetar och checklistor
- **Databas med 100 aktiva stiftelser** i Sverige, kategoriserade efter fokusområde
- **Integration med SökaStiftelseMedel.se** för djupare sökningar och ansökningshjälp

## Teknisk Stack

- Next.js 14
- React
- Tailwind CSS
- TypeScript

## Projektstruktur

```
StiftelseGuiden.se/
├── public/                  # Statiska filer
│   ├── dokument/            # Nedladdningsbara dokument och mallar
│   └── pictures/            # Bilder och grafik
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── stiftelser/      # Sidor relaterade till stiftelsedatabasen
│   │   │   └── aktiva-stiftelser/ # SEO-sida med 100 aktiva stiftelser
│   │   ├── starta-stiftelse/ # Guide för att starta stiftelse
│   │   ├── driva-stiftelse/  # Guide för att driva stiftelse
│   │   ├── juridik/          # Juridisk information
│   │   ├── dokument/         # Dokumentsida
│   │   ├── verktyg/          # Verktygssida
│   │   ├── kontakt/          # Kontaktsida
│   │   ├── layout.tsx        # Huvudlayout
│   │   └── page.tsx          # Startsida
│   └── components/           # Återanvändbara komponenter
│       ├── Breadcrumb.tsx    # Brödsmulor för navigation
│       ├── CapitalCalculator.tsx # Kapitalberäknare
│       ├── ContactForm.tsx   # Kontaktformulär
│       ├── Footer.tsx        # Sidfot
│       ├── Header.tsx        # Sidhuvud
│       ├── Hero.tsx          # Hero-sektion
│       └── SearchBar.tsx     # Sökfunktion
```

## Dokument och Mallar

Webbplatsen erbjuder flera nedladdningsbara dokument och mallar:

### Ansökningsblanketter
- Allmän ansökningsblankett för stiftelser
- Ansökan om forskningsmedel
- Stipendium-ansökan
- Projektansökan för organisationer

### Mallar och Checklistor
- Mall för stadgar (allmännyttig stiftelse)
- Checklista för ansökningsprocessen
- Projektbudget-mall

### Juridiska Dokument
- Stiftelselagen (1994:1220)
- Stiftelseförordningen (1995:1280)

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

- **Uppdatera innehåll:** Redigera filerna i `src/app/` för att uppdatera sidornas innehåll
- **Ändra design:** Anpassa Tailwind-konfigurationen i `tailwind.config.js`
- **Lägg till nya sidor:** Skapa nya mappar i `src/app/` med en `page.tsx`-fil
- **Lägg till dokument:** Placera nya dokument i `public/dokument/` och uppdatera `src/app/dokument/page.tsx`
- **Uppdatera stiftelsedatabasen:** Redigera `src/app/stiftelser/aktiva-stiftelser/page.tsx`

## Stiftelsedatabasen

Databasen innehåller information om 100 av Sveriges mest aktiva stiftelser, kategoriserade i följande grupper:

1. Forsknings-, utbildnings- och innovationsstiftelser (40+ stiftelser)
2. Hälso- och medicinforskningsstiftelser (9 stiftelser)
3. Kultur-, konst- och kulturarvsstiftelser (16 stiftelser)
4. Miljö- och hållbarhetsstiftelser (10 stiftelser)
5. Företags- och regionala filantropiska stiftelser (25+ stiftelser)

Varje stiftelse presenteras med namn, fokusområde och kort beskrivning. Databasen är integrerad med SökaStiftelseMedel.se för mer detaljerad information och ansökningshjälp.

## Licens

Copyright © 2025 StiftelseGuiden.se. Alla rättigheter förbehållna.

Skapad av [heimlandr.io](https://heimlandr.io)
