"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Facebook, MessageCircle, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HotelClientPage() {
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
          style={{ backgroundImage: "url('/kushtata.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-8 font-serif text-5xl font-normal tracking-[0.2em] sm:text-6xl">
            Условия
          </h1>

          <p
            className="animate-fade-in-up mx-auto max-w-3xl text-xl font-light leading-9 tracking-wider opacity-90"
            style={{ animationDelay: "0.5s" }}
          >
            За ценители на една различна, вдъхновяваща почивка сред красотата на
            Троянския Балкан.
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
            <MessageCircle className="h-8 w-8 cursor-pointer text-white transition-all duration-300 hover:scale-125 hover:text-[#F3B53F]" />
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
            <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
              Природата и красотата на Троянския Балкан са навсякъде около Вас.
              Докосвате се до тях, седейки на терасата, съзерцавайки
              величествената гледка и отпивайки глътка сутрешно кафе. Тук Ви
              очакват свеж планински въздух, тишина и спокойствие.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,252,247,1)] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/troyanhoteldvor.jpeg"
                alt="Дворът на къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Името
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Всичко започва от името, което е свързано с природата.
                &quot;Nature&quot; означава природен и натурален — точно такова
                е и мястото, на което ще попаднете. Къщата за гости е сред
                природата, откъсната от забързаното ежедневие. Nature, Natur, Au
                Nature, Natura и Натура носят едно общо усещане — природа,
                чистота и спокойствие.
              </p>
            </div>
          </div>

          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Бягство от забързаното ежедневие
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Сред ридовете на Стара планина, в красивия Троянски Балкан, Ви
                очаква място за релакс, тишина и презареждане. Асфалтов път води
                до къща за гости Au Nature, сгушена в полите на Балкана. След нея
                остава само вълшебството на природата и красотата на планината.
                Изберете ни, за да прекарате една зареждаща почивка сред
                спокойствие и чист въздух.
              </p>
            </div>

            <div className="relative order-1 h-96 overflow-hidden rounded-lg md:order-2">
              <Image
                src="/troyanhotel3.jpg"
                alt="Място за отдих в къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/troyanhotelbillard.jpeg"
                alt="Билярд зона в къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Капацитет
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Къщата побира до 22 души, като има възможност за допълнителни
                легла в някои стаи след предварителна уговорка. Сградата е на
                три етажа, посреща първите си гости в началото на 2013 година и
                оттогава функционира като туристически обект. Всяка стая има
                отделен санитарен възел, тераса, хладилник, кабелна телевизия,
                интернет и индивидуален декор. Леглата са с хотелски матраци.
              </p>
            </div>
          </div>

          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Хранене
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Имате свободата сами да приготвите храната си в напълно
                оборудвана кухня. На разположение са готварска печка, хладилник,
                кафе машина, миялна машина, пералня, тостер, микровълнова фурна,
                електрическа кана, парти грил и всичко необходимо за едно
                домакинство. Работим и с ресторант, от който може да бъде
                доставена прясна и топла храна при поръчка.
              </p>
            </div>

            <div className="relative order-1 h-96 overflow-hidden rounded-lg md:order-2">
              <Image
                src="/navun.jpg"
                alt="Външна зона на къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/basein1.jpeg"
                alt="Басейн в къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Условия
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Настаняването в къщата е след 15:00 часа, а освобождаването е до
                11:00 часа. Всеки следващ час след часа за освобождаване се
                заплаща допълнително. При настаняване се заплаща сумата по
                резервацията и се оставя депозит от 200 лв, който се възстановява
                след оглед при освобождаване. Счупени или повредени вещи се
                заплащат и могат да бъдат удържани от депозита. Къщата трябва да
                бъде оставена в приличен вид, с измита посуда и изхвърлен боклук.
                В противен случай се удържат 30 лв за допълнително почистване. В
                стаите пушенето е забранено.
              </p>
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