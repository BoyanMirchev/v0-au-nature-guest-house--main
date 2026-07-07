"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Navigation } from "@/components/site-navigation"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
  website: string
}

export default function ContactsClientPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  )

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit contact form")
      }

      setSubmitStatus("success")

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />

      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/chillarka2.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="animate-fade-in-up mb-8 font-serif text-5xl font-normal tracking-[0.2em] sm:text-6xl">
            Контакти
          </h1>

          <p
            className="animate-fade-in-up mx-auto max-w-2xl text-xl font-light leading-9 tracking-wider opacity-90"
            style={{ animationDelay: "0.3s" }}
          >
            Посетете ни или се свържете с нас!
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

      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-[rgba(255,252,247,0.85)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-serif text-4xl font-normal tracking-[0.2em] text-[#2C2C2C] sm:text-5xl">
              Посетете ни!
            </h2>

            <div className="mx-auto mb-1 h-1 w-16 bg-[#F3B53F]" />
            <div className="mx-auto mb-12 h-1 w-10 bg-[#F3B53F]" />

            <p className="mb-12 font-serif text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
              Елате при нас и създайте история, която ще остане завинаги!
              Усетете спокойствието на природата и изживейте всичко, което Ви
              предлага!
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                ["гр. Троян", "30 км, по-малко от 40 минути с кола"],
                ["яз. Сопот", "3-9 км, между 5 и 15 минути с кола"],
                ["Пещера Съева дупка", "30 км, около 40 минути с кола"],
                ["Пещера Топля", "6 км, около 15 минути с кола"],
              ].map(([title, text]) => (
                <div key={title} className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-[#F3B53F]" />

                  <div className="text-left">
                    <h4 className="font-serif text-lg font-light tracking-wide text-[#2C2C2C]">
                      {title}
                    </h4>

                    <p className="font-light tracking-wide text-[#2C2C2C]/70">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,252,247,1)] py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
                Къде да ни намерите?
              </h3>

              <div className="mb-1 h-1 w-16 bg-[#F3B53F]" />
              <div className="mb-12 h-1 w-10 bg-[#F3B53F]" />

              <p className="mb-8 text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Къща за гости Au Nature се намира в село Голяма Желязна, в
                сърцето на Троянския Балкан. Селото се намира на 25 км западно
                от град Троян, на 110 км от град София. Локацията е
                леснодостъпна, тъй като се намира на 10 км от магистрала София –
                Варна.
              </p>

              <p className="mb-8 text-lg font-light leading-relaxed tracking-wide text-[#2C2C2C]">
                Стъпвайки на второстепенния път, Вие вече се намирате в свят,
                обгърнат от спокойствие и красива природа. По пътя към селото
                се открива гледка към язовир Сопот, разположен в полите на
                Стара планина. Селото се намира на 500 метра надморска височина,
                а климатът е умерен.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+359877133188"
                  className="flex items-center space-x-4"
                >
                  <Phone className="h-6 w-6 text-[#F3B53F]" />
                  <span className="text-lg font-semibold text-[#F3B53F]">
                    +359 877 133 188
                  </span>
                </a>

                <a
                  href="mailto:szp@abv.bg"
                  className="flex items-center space-x-4"
                >
                  <Mail className="h-6 w-6 text-[#F3B53F]" />
                  <span className="text-lg font-semibold text-[#F3B53F]">
                    szp@abv.bg
                  </span>
                </a>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#F3B53F]" />
                  <span className="text-lg font-medium text-[#2C2C2C]">
                    с. Голяма Желязна, ул. „11-ти август“ 23
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/troyanhotelparzalka.jpg"
                alt="Дворът на къща за гости Au Nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,252,247,1)] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-4 text-center font-serif text-4xl font-normal tracking-[0.125em] text-[#2C2C2C]">
              Нашето местоположение
            </h3>

            <div className="mx-auto mb-1 h-1 w-16 bg-[#F3B53F]" />
            <div className="mx-auto mb-12 h-1 w-10 bg-[#F3B53F]" />

            <div className="h-[600px] w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=с.%20Голяма%20Желязна,%20ул.%2011-ти%20август%2023,%20Au%20Nature%20Guest%20House&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Местоположение на къща за гости Au Nature"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8A3E36] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-7 mt-5 text-center font-serif text-4xl font-normal tracking-[0.125em] text-white sm:text-6xl">
              Свържете се с нас!
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-center font-serif text-xl font-light leading-relaxed tracking-wide text-white/90">
              Посетете ни и усетете хармонията на природата! Очакваме Ви!
            </p>

            <div className="mx-auto mt-16 max-w-2xl">
              <div className="rounded-lg bg-white p-6 sm:p-12">
                <h3 className="mb-8 text-center font-serif text-3xl font-normal tracking-[0.15em] text-[#2C2C2C] sm:text-4xl">
                  Пишете ни!
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Име..."
                    required
                    maxLength={100}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Имейл..."
                    required
                    maxLength={254}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Телефон..."
                    required
                    maxLength={30}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Съобщение..."
                    required
                    rows={6}
                    maxLength={2000}
                    className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8A3E36]"
                  />

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-md bg-[#8A3E36] px-12 py-3 font-normal tracking-wider text-white transition-colors hover:bg-[#8A3E36]/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "ИЗПРАЩА СЕ..." : "ИЗПРАТЕТЕ"}
                    </button>
                  </div>

                  {submitStatus === "success" && (
                    <p className="text-center font-medium text-green-600">
                      Съобщението е изпратено успешно!
                    </p>
                  )}

                  {submitStatus === "error" && (
                    <p className="text-center font-medium text-red-600">
                      Възникна грешка. Моля, опитайте отново.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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