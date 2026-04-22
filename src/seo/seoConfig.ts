export type SeoOgImage = {
  src: string
  alt: string
}

export type SeoConfig = {
  title: string
  description: string
  ogType: 'website' | 'article'
  ogImage: SeoOgImage
  robots?: string
}

const SITE_NAME = 'Silvia Semeraro'

export const SEO = {
  SITE_NAME,
  DEFAULT_OG_IMAGE: {
    src: '/Logo.png',
    alt: 'Silvia Semeraro',
  } satisfies SeoOgImage,
} as const

// Nota: le descrizioni sono derivate dai contenuti presenti nelle rispettive pagine.
export const seoByPathname: Record<string, SeoConfig> = {
  '/': {
    title: 'Silvia Semeraro | Mental Coach per Ansia e Attacchi di Panico',
    description:
      'Mental coach per ansia e attacchi di panico. Percorso pratico per uscire dal loop: 1:1, esercizi e strumenti per ritrovare autonomia. Torino e online.',
    ogType: 'website',
    ogImage: { src: '/Immagini/foto17.png', alt: 'Silvia Semeraro' },
  },
  '/la-mia-storia': {
    title: 'La mia storia | Silvia Semeraro',
    description:
      'Dalla mia esperienza con ansia e attacchi di panico alla creazione dell’Accademia. Il metodo corpo, mente e strategia per diventare efficaci e liberi.',
    ogType: 'article',
    ogImage: { src: '/Immagini/foto1.png', alt: 'Silvia Semeraro' },
  },
  '/la-mia-formazione': {
    title: 'I miei studi | Metodo Corpo, Mente e Strategia',
    description:
      'Scopri gli studi e il metodo di Silvia Semeraro: scienze motorie, management dello sport, coaching e PNL. Approccio scientifico e strutturato.',
    ogType: 'article',
    ogImage: { src: '/Immagini/foto7.png', alt: 'Studi e metodo: corpo, mente e strategia' },
  },
  '/percorsi': {
    title: 'Il Percorso 90 giorni | Ansia e Panico',
    description:
      'Percorso di 90 giorni con 9 sedute 1:1: decodifica, riprogrammazione ed esposizione progressiva. Strumenti concreti per gestire i sintomi e tornare autonomo.',
    ogType: 'article',
    ogImage: { src: '/Immagini/foto11.png', alt: 'Percorso 90 giorni: Silvia Semeraro' },
  },
  '/eventi': {
    title: 'Eventi dal vivo | Workshop e incontri',
    description:
      'Workshop ed eventi dal vivo organizzati da Silvia Semeraro per uscire dal loop ansia–panico con esercizi guidati, condivisione e appuntamenti speciali.',
    ogType: 'website',
    ogImage: SEO.DEFAULT_OG_IMAGE,
    robots: 'noindex,follow',
  },
  '/testimonianze': {
    title: 'Testimonianze | Uscire da ansia e panico',
    description:
      'Videotestimonianze di persone che hanno smesso di vivere comandate dal sintomo: imparare la lingua del corpo e tornare presenti. Pagina in manutenzione.',
    ogType: 'article',
    ogImage: SEO.DEFAULT_OG_IMAGE,
    robots: 'noindex,follow',
  },
  '/contatti-e-dove-lavoro': {
    title: 'Contatti e dove lavoro | Torino e online',
    description:
      'Contattami per capire se posso esserti d’aiuto. Lavoro in studio a Torino (due sedi) e online da remoto. Prenota un incontro conoscitivo gratuito.',
    ogType: 'website',
    ogImage: { src: '/Immagini/foto10.png', alt: 'Silvia Semeraro' },
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Silvia Semeraro',
    description:
      'Informativa privacy sul trattamento dei dati personali. Per qualsiasi informazione puoi contattarmi via email.',
    ogType: 'website',
    ogImage: SEO.DEFAULT_OG_IMAGE,
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Silvia Semeraro',
    description:
      'Informativa cookie sul trattamento e l’utilizzo dei cookie. Per qualsiasi domanda puoi contattarmi via email.',
    ogType: 'website',
    ogImage: SEO.DEFAULT_OG_IMAGE,
  },
  '/sessione-strategica/grazie': {
    title: 'Richiesta ricevuta | Sessione Strategica',
    description:
      'Grazie per la tua richiesta della Sessione Strategica. Verrai ricontattata al piu presto per la conferma e i prossimi passi.',
    ogType: 'website',
    ogImage: { src: '/Immagini/foto17.png', alt: 'Silvia Semeraro' },
    robots: 'noindex,follow',
  },
  '*': {
    title: 'Pagina non trovata | Silvia Semeraro',
    description: 'La pagina che cerchi non esiste (o è stata spostata).',
    ogType: 'website',
    ogImage: SEO.DEFAULT_OG_IMAGE,
    robots: 'noindex,nofollow',
  },
}

export function getSeoConfigForPathname(pathname: string): SeoConfig {
  return seoByPathname[pathname] ?? seoByPathname['*']
}

export function getSeoSiteName(): string {
  return SEO.SITE_NAME
}

