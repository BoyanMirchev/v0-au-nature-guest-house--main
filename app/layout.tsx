import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a472a",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aunaturetroyanhotel.com"),
  title: {
    default: "Къща за гости Троян | Au Nature Guest House | Вили Троян | Хотели Троянски Балкан",
    template: "%s | Au Nature Guest House Троян",
  },
  description: "Къща за гости Троянски Балкан - Au Nature Guest House. Луксозни вили под наем Троян, хотели Троян, къщи под наем в Троянския Балкан. Настаняване близо до язовир Сопот. Резервирайте сега! Premium accommodation in Troyan Balkan mountains near Sopot Dam.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  generator: "v0.app",
  applicationName: "Au Nature Guest House",
  referrer: "origin-when-cross-origin",
  keywords: [
  // Основни
  "къща за гости Троян",
  "къща за гости Троянски Балкан",
  "къща за гости Голяма Желязна",
  "Au Nature Guest House",
  "настаняване Троян",
  "нощувки Троян",
  "почивка Троян",
  "почивка в Троянския Балкан",

  // Локация
  "Голяма Желязна",
  "Троян",
  "Троянски Балкан",
  "Ловешка област",
  "Стара планина",
  "Централен Балкан",

  // Туристически обекти
  "язовир Сопот",
  "Троянски манастир",
  "пещера Съева дупка",
  "Беклемето",
  "Орешак",
  "Априлци",

  // Тип настаняване
  "вила под наем Троян",
  "къща под наем Троян",
  "семейна къща за гости",
  "луксозна къща за гости",
  "планинска къща",
  "вила с басейн",
  "къща с барбекю",
  "настаняване с басейн",

  // Видове почивка
  "семейна почивка",
  "романтична почивка",
  "уикенд в планината",
  "почивка сред природата",
  "релакс в планината",
  "еко туризъм",
  "селски туризъм",

  // Активности
  "риболов язовир Сопот",
  "планински преходи",
  "еко пътеки",
  "велосипедни маршрути",
  "джип турове",
  "лов и риболов",

  // Събития
  "сватба в планината",
  "тиймбилдинг",
  "корпоративни събития",
  "рожден ден",

  // English
  "guest house Troyan",
  "Troyan accommodation",
  "holiday house Bulgaria",
  "mountain accommodation Bulgaria",
  "guest house near Troyan Monastery",
  "Sopot Dam accommodation",
],
  authors: [{ name: "Au Nature Guest House", url: "https://www.aunaturetroyanhotel.com" }],
  creator: "Au Nature Guest House",
  publisher: "Au Nature Guest House",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Къща за гости Троян | Au Nature Guest House | Вили и Хотели Троянски Балкан",
    description: "Луксозна къща за гости в Троянския Балкан. Вили под наем, хотели, къщи под наем Троян. Настаняване близо до язовир Сопот и Троянски манастир. Premium guest house in Troyan Balkan.",
    type: "website",
    url: "https://www.aunaturetroyanhotel.com",
    siteName: "Au Nature Guest House",
    locale: "bg_BG",
    alternateLocale: "en_US",
    images: [
      {
        url: "/kushtata.jpg",
        width: 1200,
        height: 630,
        alt: "Au Nature Guest House - Къща за гости Троян",
        type: "image/jpeg",
      },
      {
        url: "/troyanhotel2.jpg",
        width: 1200,
        height: 630,
        alt: "Вили под наем Троян - Au Nature",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Къща за гости Троян | Au Nature Guest House | Вили Троянски Балкан",
    description: "Луксозна къща за гости в Троянския Балкан. Вили под наем, хотели, къщи под наем Троян. Резервирайте сега!",
    images: ["/kushtata.jpg"],
    creator: "@aunatureguesthouse",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.aunaturetroyanhotel.com",
    languages: {
      "bg-BG": "https://www.aunaturetroyanhotel.com",
      "en-US": "https://www.aunaturetroyanhotel.com",
    },
  },
  category: "travel",
  classification: "Guest House, Hotel, Accommodation, Vacation Rental",
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "BG-11",
    "geo.placename": "Troyan, Lovech, Bulgaria",
    "geo.position": "42.8833;24.7167",
    "ICBM": "42.8833, 24.7167",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "7 days",
    "author": "Au Nature Guest House",
    "copyright": "Au Nature Guest House",
    "language": "Bulgarian, English",
    "content-language": "bg, en",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.aunaturetroyanhotel.com/#organization",
  name: "Au Nature Guest House",
  alternateName: ["Къща за гости Au Nature", "Au Nature Троян", "Къща за гости Троянски Балкан"],
  description: "Луксозна къща за гости в Троянския Балкан. Вили под наем, хотели, къщи под наем Троян. Настаняване близо до язовир Сопот.",
  url: "https://www.aunaturetroyanhotel.com",
  telephone: "+359877133188",
  email: "szp@abv.bg",
  image: [
    "https://www.aunaturetroyanhotel.com/kushtata.jpg",
    "https://www.aunaturetroyanhotel.com/troyanhotel2.jpg",
    "https://www.aunaturetroyanhotel.com/gledka.jpg",
  ],
  logo: "https://www.aunaturetroyanhotel.com/logokushta.jpg",
  priceRange: "$$",
  currenciesAccepted: "BGN, EUR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Село Голяма Желязна",
    addressLocality: "Троян",
    addressRegion: "Ловеч",
    postalCode: "5680",
    addressCountry: "BG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.8833,
    longitude: 24.7167,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 42.8833,
      longitude: 24.7167,
    },
    geoRadius: "50000",
  },
  hasMap: "https://maps.google.com/?q=42.8833,24.7167",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Barbecue Area", value: true },
    { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
    { "@type": "LocationFeatureSpecification", name: "Billiard", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
  ],
  numberOfRooms: 8,
  petsAllowed: true,
  checkinTime: "14:00",
  checkoutTime: "12:00",
  starRating: {
    "@type": "Rating",
    ratingValue: "4",
    bestRating: "5",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.aunaturetroyanhotel.com/contacts",
      actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
    },
    result: {
      "@type": "LodgingReservation",
      name: "Reservation at Au Nature Guest House",
    },
  },
  sameAs: [
    "https://www.facebook.com/aunatureguesthouse",
    "https://www.instagram.com/aunatureguesthouse",
  ],
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Au Nature Guest House - Къща за гости Троян",
  image: "https://www.aunaturetroyanhotel.com/kushtata.jpg",
  "@id": "https://www.aunaturetroyanhotel.com",
  url: "https://www.aunaturetroyanhotel.com",
  telephone: "+359877133188",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Село Голяма Желязна",
    addressLocality: "Троян",
    addressRegion: "Ловеч",
    postalCode: "5680",
    addressCountry: "BG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.8833,
    longitude: 24.7167,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Начало",
      item: "https://www.aunaturetroyanhotel.com",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="tracking-normal text-center font-sans font-thin text-xs" lang="bg">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a472a" />
        <meta httpEquiv="content-language" content="bg" />
        <meta name="language" content="Bulgarian" />
        <meta name="geo.region" content="BG-11" />
        <meta name="geo.placename" content="Троян, Ловеч, България" />
        <meta name="geo.position" content="42.8833;24.7167" />
        <meta name="ICBM" content="42.8833, 24.7167" />
        {/* Add your Google Search Console verification code here */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
