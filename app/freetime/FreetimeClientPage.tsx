"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Facebook, MessageCircle, Phone } from "lucide-react"
import { Navigation } from "@/components/site-navigation"

export default function FreetimeClientPage() {
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
          style={{ backgroundImage: "url('/svobodnovremetroyan.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-8 font-serif text-5xl font-normal tracking-[0.2em] sm:text-6xl">
            Свободно време
          </h1>

          <p
            className="animate-fade-in-up mx-auto max-w-3xl text-xl font-light leading-9 tracking-wider opacity-90"
            style={{ animationDelay: "0.5s" }}
          >
            Вашият престой е съприкосновение с природата. Вие се намирате в
            сърцето на Стара планина, в Троянския Балкан!
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
            <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
              Намирате се само на 1500 метра от язовир Сопот, който е идеален
              за водни спортове и риболов, както и близо до Троян — град с
              богато културно наследство. Това е добра предпоставка за
              пълноценна планинска почивка сред свеж въздух, мек климат,
              красиви гледки, възможности за спорт, отдих и забавления.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,252,247,1)] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/svobodnovreme2.jpg"
                alt="Спорт и отдих около къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 mt-5 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Спорт и отдих
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                В Голяма Желязна Ви очакват еко-преходи, с които ще се заредите
                с енергията на непокътнатата природа. Върховете около селото
                предлагат разнообразен терен, подходящ за разходки и
                колоездене. През юни селото оживява със състезания по мотокрос
                и ATV. Местността е богата на дивеч, а язовир Сопот предлага
                възможности за риболов, водни колелета и спокойна почивка край
                водата. При допълнителна уговорка можем да съдействаме и за
                разходка с джип по планинските склонове.
              </p>
            </div>
          </div>

          <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 mt-5 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Туризъм
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <ul className="space-y-3 text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                <li>
                  <strong>Пещера Съева дупка</strong> — една от най-красивите
                  пещери в България, на около 30 км.
                </li>
                <li>
                  <strong>Пещера Топля</strong> — намира се в района на селото,
                  с горска екопътека и извор на река Топля.
                </li>
                <li>
                  <strong>Троянски манастир</strong> — един от най-големите и
                  прочути български манастири.
                </li>
                <li>
                  <strong>Природонаучен музей, с. Черни Осъм</strong> —
                  експонати, звуци от дивата природа и впечатляващи диорами.
                </li>
                <li>
                  <strong>Национално изложение на художествените занаяти</strong>{" "}
                  — с. Орешак.
                </li>
                <li>
                  <strong>Музей на занаятите, гр. Троян</strong> — място,
                  свързано с традициите на троянските майстори.
                </li>
                <li>
                  <strong>Крушунски водопади</strong> — красива природна
                  забележителност, подходяща за разходка.
                </li>
              </ul>
            </div>

            <div className="relative order-1 h-96 overflow-hidden rounded-lg md:order-2">
              <Image
                src="/svobodnovrememanastir.jpg"
                alt="Троянски манастир и забележителности около Троян"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/svobodnovremegledka.jpg"
                alt="Панорамна гледка към Троянския Балкан"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 mt-5 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Природа в Троянския Балкан
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                От къщата за гости се разкриват панорамни гледки към природата
                на Троянския Балкан. Само на 1500 метра се намира язовир Сопот —
                подходящ за риболов и водни спортове. Околностите на селото
                пазят следи от дълбока древност с множество могили и църква,
                датираща от 1857 г. Сред природните забележителности са пещерите
                Топля и Яловица, скалата Купена и районът около река Топля.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,242,227,1)] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-12 mt-5 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C] sm:text-5xl">
              Заповядайте!
            </h3>

            <p className="mb-16 text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
              Ако Ви влекат пещерните потайности, водните спортове, лов и
              риболов или просто искате отдих и почивка — не се колебайте да се
              отправите към това привлекателно място. Тук можете да направите
              следобедите си спокойни, тонизиращи, приключенски или туристически.
              Подарете си почивка на планина в къща за гости Au Nature, в
              Троянския Балкан.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <Link
                href="/hotel"
                className="group inline-flex items-center gap-2 font-bold tracking-wider text-[#8A3E36] transition-colors hover:text-[#8A3E36]/80"
              >
                УСЛОВИЯ
                <span className="transition-transform group-hover:translate-x-1">
                  &gt;
                </span>
              </Link>

              <Link
                href="/rooms"
                className="group inline-flex items-center gap-2 font-bold tracking-wider text-[#8A3E36] transition-colors hover:text-[#8A3E36]/80"
              >
                НАСТАНЯВАНЕ
                <span className="transition-transform group-hover:translate-x-1">
                  &gt;
                </span>
              </Link>

              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 font-bold tracking-wider text-[#8A3E36] transition-colors hover:text-[#8A3E36]/80"
              >
                ГАЛЕРИЯ
                <span className="transition-transform group-hover:translate-x-1">
                  &gt;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,242,227,1)] py-0">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "ПРИРОДА",
                image: "/troyanhoteldvor.jpeg",
                alt: "Природа около къща за гости Au Nature",
              },
              {
                title: "ОТДИХ",
                image: "/troyanhotelmasa.jpg",
                alt: "Място за отдих в къща за гости Au Nature",
              },
              {
                title: "СВЕЖЕСТ",
                image: "/troyanhotelchillarka.jpeg",
                alt: "Свежест и спокойствие в Троянския Балкан",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative h-80 cursor-pointer overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-center font-serif text-2xl font-light tracking-widest text-white md:text-3xl">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#8A3E36] text-white">
        <div className="container mx-auto px-5 py-20">
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