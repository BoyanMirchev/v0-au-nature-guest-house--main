"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Facebook, MessageCircle, Phone } from "lucide-react"
import { Navigation } from "@/components/site-navigation"

export default function EventsClientPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />

      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/dvor.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-8 font-serif text-5xl font-normal tracking-[0.2em] sm:text-6xl">
            Събития
          </h1>

          <p
            className="animate-fade-in-up mx-auto max-w-3xl text-xl font-light leading-9 tracking-wider opacity-90"
            style={{ animationDelay: "0.5s" }}
          >
            Отпразнувайте Вашия специален повод при нас!
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

      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/background.png')" }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-center text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
              Къща за гости Au Nature е идеалното място за специални и
              неповторими събития.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,252,247,1)] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/troyanhotelveranda.jpg"
                alt="Просторна веранда за тиймбилдинг в къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Тиймбилдинг
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Имате възможност да организирате Вашия тиймбилдинг в къщата за
                гости, тъй като тя е просторна и удобна за големи групи.
                Салонът за хранене е 100 кв.м. и разполага с 30 места, което го
                прави подходящ за фирмени събирания, работни срещи и неформални
                празненства.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Сватба
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Сватбата е едно от най-вълнуващите събития в живота на човек.
                За да остане този ден незабравим, можем да предложим съдействие
                при организирането на красиво парти и специална церемония.
                Църковен брак може да сключите в църквата в селото — „Св. Всях
                Светих“.
              </p>
            </div>

            <div className="relative order-1 h-96 overflow-hidden rounded-lg md:order-2">
              <Image
                src="/troyanhotel1.jpeg"
                alt="Сватбено събитие в къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
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