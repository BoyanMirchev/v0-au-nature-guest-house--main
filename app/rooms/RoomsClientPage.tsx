"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Facebook, MessageCircle, Phone } from "lucide-react"

import { BookingModal } from "@/components/booking-modal"
import { Navigation } from "@/components/navigation"

type Room = {
  title: string
  image: string
  alt: string
  subtitle: string
  description: string
}

type PriceCard = {
  title: string
  priceBgn: string
  priceEur: string
  note: string
  featured?: boolean
}

const rooms: Room[] = [
  {
    title: "Цветна пролет",
    image: "/cvetnaprolet.jpg",
    alt: "Апартамент Цветна пролет в къща за гости Au Nature",
    subtitle: "Удобство, поднесено в цветна красота.",
    description:
      "Апартамент в лилави тонове, с много цветя и цветни хербарии. Разполага с функционален разтегателен диван, холна маса, телевизор, хладилник, отделна спалня и голяма тераса.",
  },
  {
    title: "Летни емоции",
    image: "/letniemociiapartament2.jpg",
    alt: "Апартамент Летни емоции в къща за гости Au Nature",
    subtitle: "Енергията на слънцето и лятото.",
    description:
      "Апартамент в топли жълти тонове, създаващ усещане за уют и светлина. Разполага с функционален разтегателен диван, холна маса, телевизор, хладилник, отделна спалня и голяма тераса.",
  },
  {
    title: "Ароматна есен",
    image: "/aromatnaesen_1.jpg",
    alt: "Стая Ароматна есен в къща за гости Au Nature",
    subtitle: "Есенният сезон в най-красиво измерение.",
    description:
      "Стая с есенна атмосфера, вдъхновена от цветовете на Стара планина. В декорацията са използвани есенни листа, клонки и природни елементи, създадени ръчно.",
  },
  {
    title: "Морски тайни",
    image: "/morsktaini1_1.jpg",
    alt: "Стая Морски тайни в къща за гости Au Nature",
    subtitle: "Невероятна хармония в синьо-бялата гама.",
    description:
      "Стая, вдъхновена от морето, корабните въжета, мидите, пясъка и морските тоналности. Интериорът създава усещане за спокойствие, лекота и свежест.",
  },
  {
    title: "Зимно предизвикателство",
    image: "/zimnopredizvikatelstvostaq5.jpeg",
    alt: "Стая Зимно предизвикателство в къща за гости Au Nature",
    subtitle: "Декорите в стаята Ви въвеждат в красива зимна приказка.",
    description:
      "Стая в бели тонове, вдъхновена от зимата, снежинките и заскрежените дървета. Подходяща е за гости, които харесват спокойна и приказна атмосфера.",
  },
  {
    title: "Планински романс",
    image: "/planinskiromans_1.jpg",
    alt: "Стая Планински романс в къща за гости Au Nature",
    subtitle: "Досег до непокътнатата природа.",
    description:
      "Стая, вдъхновена от планината и природата. В декорацията присъстват дървесни елементи, клонки и кафяви тонове, които създават усещане за топлина и близост до Балкана.",
  },
  {
    title: "Речни брегове",
    image: "/rechnibregovestaq7.jpg",
    alt: "Стая Речни брегове в къща за гости Au Nature",
    subtitle: "Приключения край реката.",
    description:
      "Стая в сивата гама, декорирана с речни камъни и природни елементи. Интериорът е вдъхновен от реките, бреговете и усещането за движение и спокойствие.",
  },
  {
    title: "Пустинна нощ",
    image: "/pustinnanosht.jpg",
    alt: "Стая Пустинна нощ в къща за гости Au Nature",
    subtitle: "Пригответе се за загадъчен и красив свят.",
    description:
      "Стая с бежови нюанси, кактуси, пясък и сухи клони. Интериорът Ви пренася в различна атмосфера, вдъхновена от природното богатство на пустинните пейзажи.",
  },
]

const housePrices: PriceCard[] = [
  {
    title: "При повече нощувки",
    priceBgn: "879.90",
    priceEur: "450.00",
    note: "на вечер",
  },
  {
    title: "При една нощувка",
    priceBgn: "1300.00",
    priceEur: "650.00",
    note: "на вечер",
    featured: true,
  },
]

const singlePrices: PriceCard[] = [
  {
    title: "Стая",
    priceBgn: "97.80",
    priceEur: "50.00",
    note: "на нощувка",
  },
  {
    title: "Апартамент",
    priceBgn: "136.90",
    priceEur: "70.00",
    note: "на нощувка",
    featured: true,
  },
]

function RoomCard({
  room,
  onBookingClick,
}: {
  room: Room
  onBookingClick: () => void
}) {
  return (
    <article className="text-center">
      <div className="relative mb-8 h-64 overflow-hidden rounded-lg">
        <Image
          src={room.image}
          alt={room.alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <h3 className="mb-4 font-serif text-3xl font-normal tracking-wide text-[#2C2C2C]">
        {room.title}
      </h3>

      <div className="mx-auto mb-1 h-1 w-16 bg-[#F3B53F]" />
      <div className="mx-auto mb-6 h-1 w-10 bg-[#F3B53F]" />

      <p className="mb-6 text-lg font-light tracking-wide text-[#2C2C2C]">
        {room.subtitle}
      </p>

      <p className="mb-6 text-sm font-light leading-relaxed text-[#2C2C2C]">
        {room.description}
      </p>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#8A3E36] transition-colors hover:text-[#8A3E36]/80"
        >
          РАЗГЛЕДАЙТЕ
          <span className="text-lg transition-transform group-hover:translate-x-1">
            &gt;
          </span>
        </Link>

        <button
          type="button"
          onClick={onBookingClick}
          className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#8A3E36] transition-colors hover:text-[#8A3E36]/80"
        >
          РЕЗЕРВИРАЙТЕ
          <span className="text-lg transition-transform group-hover:translate-x-1">
            &gt;
          </span>
        </button>
      </div>
    </article>
  )
}

function PriceCard({ item }: { item: PriceCard }) {
  const backgroundClass = item.featured
    ? "from-[#8A3E36] to-[#8A3E36]/80"
    : "from-[#2C2C2C] to-[#2C2C2C]/80"

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div
        className={`bg-gradient-to-br ${backgroundClass} p-8 text-center text-white`}
      >
        <h3 className="mb-2 font-serif text-2xl font-normal tracking-wide">
          {item.title}
        </h3>

        <div className="my-6">
          <span className="font-serif text-4xl font-normal">
            {item.priceBgn}
          </span>
          <span className="ml-2 text-xl font-normal tracking-wide">лв</span>

          <span className="mx-2 font-serif text-4xl font-normal">/</span>

          <br />

          <span className="font-serif text-4xl font-normal">
            {item.priceEur}
          </span>
          <span className="ml-2 text-xl font-normal tracking-wide">евро</span>
        </div>

        <p className="text-lg font-light tracking-wide text-white/80">
          {item.note}
        </p>
      </div>
    </article>
  )
}

export default function RoomsClientPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openBookingModal = () => {
    setIsBookingModalOpen(true)
  }

  const closeBookingModal = () => {
    setIsBookingModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />

      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/chaduri.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-8 font-serif text-5xl font-normal tracking-[0.2em] sm:text-6xl">
            Настаняване
          </h1>

          <p
            className="animate-fade-in-up mx-auto max-w-2xl text-xl font-light leading-9 tracking-wider opacity-90"
            style={{ animationDelay: "0.5s" }}
          >
            Стил и комфорт в оригинален интериор, допълващ природната тематика.
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-12 text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
              Стаите са стилно и комфортно обзаведени и декорирани. Всяка е с
              различен интериор, вдъхновен от сезоните, морето, реките,
              планините, цветята, слънцето, скалите, бреговете и природата.
              Атмосферата е създадена така, че да Ви потопи в свежа и спокойна
              обстановка.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,252,247,1)] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 font-serif text-4xl font-normal tracking-[0.2em] text-[#2C2C2C] sm:text-5xl">
            Апартаменти и стаи
          </h2>

          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
            {rooms.map((room) => (
              <RoomCard
                key={room.title}
                room={room}
                onBookingClick={openBookingModal}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-normal tracking-[0.2em] text-[#2C2C2C] sm:text-5xl">
              Наемане на цялата къща
            </h2>

            <p className="text-lg font-light tracking-wide text-[#2C2C2C]/70">
              Подходящо за групи, семейни събирания и специални събития.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {housePrices.map((item) => (
              <PriceCard key={item.title} item={item} />
            ))}
          </div>

          <p className="my-6 text-center text-lg font-light tracking-wide text-[#2C2C2C]/70">
            Ако Вашата компания е различна като брой гости, може да разгледате
            цените по-долу за отделно настаняване.
          </p>

          <div className="mb-16 mt-20 text-center">
            <h2 className="mb-4 font-serif text-4xl font-normal tracking-[0.2em] text-[#2C2C2C] sm:text-5xl">
              Цени при отделно настаняване
            </h2>

            <p className="text-lg font-light tracking-wide text-[#2C2C2C]/70">
              В цената са включени нощувка, туристически данък, ДДС, интернет и
              паркинг.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {singlePrices.map((item) => (
              <PriceCard key={item.title} item={item} />
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-4 text-center text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]/70">
            <p>
              Резервацията се потвърждава след изпратено капаро до пет дни от
              деня на резервацията по банковата сметка на фирмата. Възрастен,
              настанен в самостоятелна стая, заплаща 70% от стойността на цялата
              стая.
            </p>

            <p>
              Домашни любимци се допускат след запитване, срещу еднократна такса
              от 40.00 лв за малка порода и 50.00 лв за средна порода, независимо
              от периода на престой.
            </p>
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

      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />

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