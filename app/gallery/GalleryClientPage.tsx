"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Facebook, MessageCircle, Phone, X } from "lucide-react"
import { Navigation } from "@/components/navigation"

const galleryImages = [
  { src: "/aromatnaesen_1.jpg", alt: "Стая Ароматна есен" },
  { src: "/aromatnaesenstaq3.jpeg", alt: "Стая Ароматна есен" },
  { src: "/aromatnaesenstaq3_2.jpg", alt: "Стая Ароматна есен" },
  { src: "/morskitaini1_2.jpg", alt: "Стая Морски тайни" },
  { src: "/morsktaini1_1.jpg", alt: "Стая Морски тайни" },
  { src: "/cvetnaprolet.jpg", alt: "Стая Цветна пролет" },
  { src: "/cvetnaproletapartament1.jpg", alt: "Апартамент Цветна пролет" },
  { src: "/planinskiromans_1.jpg", alt: "Стая Планински романс" },
  { src: "/pustinnanosht.jpg", alt: "Стая Пустинна нощ" },
  { src: "/basein1.jpeg", alt: "Басейн в Au Nature Guest House" },
  { src: "/basein2.jpg", alt: "Басейн в двора" },
  { src: "/basein3.jpg", alt: "Зона около басейна" },
  { src: "/basein4.jpg", alt: "Басейн и двор" },
  { src: "/basein5.jpeg", alt: "Басейн в къща за гости Au Nature" },
  { src: "/basein6.jpeg", alt: "Басейн и място за отдих" },
  { src: "/basein7.jpeg", alt: "Лятна зона с басейн" },
  { src: "/basein8.jpeg", alt: "Басейн в Троянския Балкан" },
  { src: "/salon.jpg", alt: "Салон за събирания" },
  { src: "/galeriarestorant.jpg", alt: "Салон за хранене" },
  { src: "/billardsalon.jpg", alt: "Билярд салон" },
  { src: "/galeriabiliard.jpg", alt: "Билярд зона" },
  { src: "/koridor.jpg", alt: "Коридор в къщата" },
  { src: "/galeriastulbi.jpg", alt: "Стълбище в къщата" },
  { src: "/dvor.jpg", alt: "Двор на къща за гости Au Nature" },
  { src: "/kushtata.jpg", alt: "Къща за гости Au Nature" },
  { src: "/terasa.jpg", alt: "Тераса с гледка" },
  { src: "/chillarka2.jpg", alt: "Зона за отдих" },
  { src: "/chaduri.jpg", alt: "Чадъри и място за почивка" },
  { src: "/navun.jpg", alt: "Външна част на къщата" },
  { src: "/galeria1.jpeg", alt: "Галерия на Au Nature Guest House" },
  {
    src: "/zimnopredizvikatelstvostaq5.jpeg",
    alt: "Стая Зимно предизвикателство",
  },
  { src: "/troyanhotelparzalka.jpg", alt: "Детска пързалка в двора" },
  { src: "/troyanhotelmasa.jpg", alt: "Маса за хранене и отдих" },
  { src: "/rechnibregovestaq7.jpg", alt: "Стая Речни брегове" },
  { src: "/letniemociiapartament2.jpg", alt: "Апартамент Летни емоции" },
]

export default function GalleryClientPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null)
      }
    }

    if (lightboxImage) {
      window.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [lightboxImage])

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute right-8 top-8 z-10 text-white transition-colors hover:text-[#F3B53F]"
            aria-label="Затвори снимката"
          >
            <X className="h-10 w-10" />
          </button>

          <div className="relative h-full max-h-[90vh] w-full max-w-7xl">
            <Image
              src={lightboxImage}
              alt="Уголемена снимка от галерията"
              fill
              className="object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}

      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/dvor.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-8 font-serif text-5xl font-normal tracking-[0.2em] sm:text-6xl">
            Галерия
          </h1>

          <p
            className="animate-fade-in-up mx-auto max-w-2xl text-xl font-light leading-9 tracking-wider opacity-90"
            style={{ animationDelay: "0.5s" }}
          >
            Разгледайте красотата на нашата къща за гости.
          </p>
        </div>

        <div
          className="animate-fade-in absolute bottom-8 left-8 z-10 flex space-x-4"
          style={{ animationDelay: "1s" }}
        >
          <Link
            href="https://www.facebook.com/troyanhotel.aunature"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook страница на Au Nature"
          >
            <Facebook className="h-8 w-8 cursor-pointer text-white transition-all duration-300 hover:scale-125 hover:text-[#F3B53F]" />
          </Link>

          <a
            href="viber://chat?number=%2B359877133188"
            className="cursor-pointer"
            title="Chat on Viber"
            aria-label="Свържете се с нас във Viber"
          >
            <MessageCircle className="h-8 w-8 text-white transition-all duration-300 hover:scale-125 hover:text-[#F3B53F]" />
          </a>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-[rgba(255,252,247,0.85)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {galleryImages.map((image) => (
                <button
                  type="button"
                  key={image.src}
                  className="group relative h-64 cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setLightboxImage(image.src)}
                  aria-label={`Отвори снимка: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#8A3E36] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-7 mt-5 font-serif text-4xl font-normal tracking-[0.125em] text-white sm:text-6xl">
              Посетете ни!
            </h2>

            <p className="mb-8 max-w-3xl font-serif text-lg font-light leading-relaxed tracking-wide text-white/90">
              Намираме се в село Голяма Желязна, в сърцето на Троянския Балкан.
              Селото е разположено на 30 км западно от град Троян и на 110 км от
              град София. Локацията е леснодостъпна, тъй като се намира на 10 км
              от главния път София – Варна.
            </p>

            <a
              href="tel:+359877133188"
              className="inline-flex items-center gap-3 rounded-full border border-[#F3B53F] px-6 py-3 font-serif text-xl font-bold tracking-wide text-[#F3B53F] transition-colors hover:bg-[#F3B53F] hover:text-[#8A3E36]"
            >
              <Phone className="h-5 w-5" />
              +359 877 133 188
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}