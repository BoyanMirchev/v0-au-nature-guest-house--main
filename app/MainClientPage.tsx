"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, Facebook, X, MessageCircle } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { BookingModal } from "@/components/booking-modal"
import { SplashScreen } from "@/components/splash-screen"

export default function MainClientPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // Trigger when 80% of hero is scrolled
      setIsScrolled(scrollPosition > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true)
      setTimeout(() => {
        setIsMenuOpen(false)
        setIsMenuClosing(false)
      }, 600) // Increased animation duration for gentler transition
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 lg:px-8 xl:px-12 py-8 lg:py-10 xl:py-12 flex items-center justify-between">
          {/* Left Corner - Menu Button with animated hamburger */}
          <button onClick={toggleMenu} className={`flex items-center space-x-4 hover:opacity-80 transition-opacity z-[70] ${isMenuOpen ? 'hamburger-open' : ''}`}>
            <div className="flex flex-col justify-center h-8 w-10 lg:w-12 relative">
              <div className={`hamburger-line hamburger-line-1 absolute top-0 w-10 lg:w-12 h-0.5 ${isScrolled && !isMenuOpen ? "bg-[#2C2C2C]" : "bg-white"}`}></div>
              <div className={`hamburger-line hamburger-line-2 absolute top-1/2 -translate-y-1/2 w-10 lg:w-12 h-0.5 ${isScrolled && !isMenuOpen ? "bg-[#2C2C2C]" : "bg-white"}`}></div>
              <div className={`hamburger-line hamburger-line-3 absolute bottom-0 w-10 lg:w-12 h-0.5 ${isScrolled && !isMenuOpen ? "bg-[#2C2C2C]" : "bg-white"}`}></div>
            </div>
            <span
              className={`text-lg font-light tracking-[0.25em] transition-all duration-300 hidden lg:block ${
                isScrolled && !isMenuOpen ? "text-[#2C2C2C]" : "text-white"
              }`}
            >
              {isMenuOpen ? "ЗАТВОРИ" : "МЕНЮ"}
            </span>
          </button>

          {/* Center - Logo with decorative lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row items-center">
            {/* Left decorative line */}
            <div className={`hidden lg:block h-px w-32 xl:w-48 2xl:w-64 transition-colors duration-300 ${isScrolled ? "bg-[#2C2C2C]/40" : "bg-white/40"}`}></div>
            
            {/* Logo Section - Logo on left of text */}
            <div className="flex flex-row items-center mx-6 lg:mx-10 gap-4">
              {/* Logo Image */}
              <Image
                src="/logokushta.jpg"
                alt="Au Nature Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              
              {/* Text */}
              <span
                className={`text-xl lg:text-2xl font-light tracking-[0.35em] whitespace-nowrap transition-colors duration-300 ${
                  isScrolled ? "text-[#2C2C2C]" : "text-white"
                }`}
              >
                AU NATURE
              </span>
            </div>
            
            {/* Right decorative line */}
            <div className={`hidden lg:block h-px w-32 xl:w-48 2xl:w-64 transition-colors duration-300 ${isScrolled ? "bg-[#2C2C2C]/40" : "bg-white/40"}`}></div>
          </div>

          {/* Right Corner - Language Selector */}
          <div
            className={`text-lg font-light tracking-[0.25em] transition-colors duration-300 cursor-pointer hover:opacity-80 ${
              isScrolled ? "text-[#2C2C2C]" : "text-white"
            }`}
          >
            EN
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="relative h-full flex">
            {/* Left section - Photo area */}
            <div
              className={`w-1/2 h-full bg-cover bg-center ${
                isMenuClosing ? "menu-slide-out-left" : "menu-slide-in-left"
              }`}
              style={{
                backgroundImage: `url('chillarka2.jpg')`,
              }}
            ></div>

            {/* Right section - Menu content */}
            <div
              className={`w-1/2 h-full bg-black/95 backdrop-blur-sm ${
                isMenuClosing ? "menu-slide-out-right" : "menu-slide-in-right"
              }`}
            >
              <div className="relative z-10 h-full flex flex-col">
                {/* Header with logo */}
                <div className="flex items-center justify-center p-8 bg-background">
                  <div className="flex items-center">
                    <div className="h-px mr-4 w-3 bg-[rgba(194,194,194,1)]"></div>
                    <span className="text-sm font-light tracking-[0.3em] whitespace-nowrap text-foreground">
                      AU NATURE
                    </span>
                    <div className="h-px ml-4 w-3 bg-[rgba(194,194,194,1)]"></div>
                  </div>
                </div>

                {/* Menu items - centered */}
                <div className="flex-1 flex items-center justify-center px-7 bg-background">
                  <div className="text-left w-full">
                    <nav className="space-y-6">
                      <Link
                        href="/"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl text-foreground border-[rgba(194,194,194,1)]"
                        onClick={toggleMenu}
                      >
                        Начало
                      </Link>
                      <Link
                        href="/hotel"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        Условия
                      </Link>
                      <Link
                        href="/rooms"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl text-foreground border-[rgba(194,194,194,1)]"
                        onClick={toggleMenu}
                      >
                        Настаняване
                      </Link>
                      <Link
                        href="/events"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        Събития
                      </Link>
                      <Link
                        href="/gallery"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        Галерия
                      </Link>
                      <Link
                        href="/freetime"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        Свободно време
                      </Link>
                      <Link
                        href="/contacts"
                        className="menu-item-animate block font-light tracking-[0.2em] hover:text-[#F3B53F] transition-colors duration-300 font-serif border-b pb-2 text-2xl border-[rgba(194,194,194,1)] text-foreground"
                        onClick={toggleMenu}
                      >
                        Контакти
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="p-8 flex justify-between items-end py-2.5 px-7 bg-background">
                  <div className="text-right">
                    <div className="font-light tracking-wide text-left my-0 py-0 text-lg text-[rgba(194,194,194,1)] bg-background">
                      Политика за поверителност
                    </div>
                  </div>
                </div>
                <div className="p-8 flex justify-between items-end py-2.5 px-7 bg-background">
                  <div className="text-left">
                    <div className="flex flex-col items-left justify-left gap-6 cursor-pointer group">
                      {/* Facebook Row */}
                      <Link
                        href="https://www.facebook.com/troyanhotel.aunature"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <Facebook className="w-6 h-6 text-[rgba(243,181,63,1)] hover:text-[#F3B53F] cursor-pointer transition-all duration-300 hover:scale-125" />
                        <span className="text-[rgba(243,181,63,1)] tracking-wider hover:text-[#F3B53F] transition-colors font-light text-sm">
                          Къща за гости Au Nature
                        </span>
                      </Link>

                      {/* Viber Row */}
                      <a
                        href="viber://chat?number=%2B359877133188"
                        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                        title="Chat on Viber"
                      >
                        <MessageCircle className="w-6 h-6 text-[rgba(243,181,63,1)] hover:text-[#F3B53F] transition-all duration-300 hover:scale-125" />
                        <span className="text-[rgba(243,181,63,1)] tracking-wider hover:text-[#F3B53F] transition-colors font-light text-sm">
                          +359 877 133 188
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Video-like Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('troyanhotel2.jpg')`,
          }}
        ></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 font-sans font-thin text-lg">
          <div className="mb-8"></div>

          <p className="text-balance leading-relaxed animate-fade-in-up font-serif mb-5 tracking-wider md:text-6xl font-normal text-6xl">
            Къща за гости Au Nature
          </p>

          <p
            className="text-balance leading-relaxed max-w-2xl mx-auto opacity-90 animate-fade-in-up text-center leading-9 mb-0 font-light tracking-wider font-serif ml-20 mr-20 text-xl"
            style={{ animationDelay: "0.5s" }}
          >
            Къща за гости в Троянския Балкан.
          </p>
        </div>

        <div className="absolute bottom-8 left-8 flex space-x-4 z-10 animate-fade-in" style={{ animationDelay: "1s" }}>
          <Link href="https://www.facebook.com/troyanhotel.aunature" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-8 h-8 text-white hover:text-[#F3B53F] cursor-pointer transition-all duration-300 hover:scale-125" />
          </Link>
          <a href="viber://chat?number=%2B359877133188" className="cursor-pointer" title="Chat on Viber">
            <MessageCircle className="w-8 h-8 text-white hover:text-[#F3B53F] cursor-pointer transition-all duration-300 hover:scale-125" />
          </a>
        </div>
      </section>

      {/* Booking Modal Component */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* About Section */}
      <section id="hotel" className="py-20 bg-[#F5F5F5] relative">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20 bg-background"
          style={{
            backgroundImage: `url('background.png')`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] tracking-[0.2em] mb-4 font-serif font-normal text-5xl mt-5">
              Дом на природа и хармония{" "}
            </h2>
            {/* Golden underline */}
            <div className="w-16 h-1 bg-[#F3B53F] mx-auto mb-1"></div>
            <div className="w-10 h-1 bg-[#F3B53F] mx-auto mb-12"></div>

            <p className="text-[#2C2C2C] leading-relaxed text-lg max-w-5xl mx-auto tracking-wide font-light">
              {
                "Сгушена в планината, обгърната от гора и зеленина, сред красотата на Стара планина, подходяща за почивка и релакс или среща с приятели."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Extraordinary Section */}
      <section className="py-2.5 bg-[rgba(255,252,247,1)]">
        <div className="container mx-auto px-4 bg-[rgba(255,252,247,1)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in-left">
              <Image
                src="/troyanhotel1.jpeg"
                alt="Къщата"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 text-left"
              />
            </div>
            <div className="animate-fade-in-right">
              <h3 className="font-serif text-[#2C2C2C] font-normal text-4xl mb-4 tracking-[0.125em] mt-5">
                Тематична къща за гости в Троянския Балкан
              </h3>
              {/* Golden underline */}
              <div className="w-16 h-1 bg-[#F3B53F] mx-auto mb-1"></div>
              <div className="w-10 h-1 bg-[#F3B53F] mx-auto mb-12"></div>

              <p className="text-[#2C2C2C] leading-relaxed mb-8 text-lg tracking-wide font-light">
                Елегантната новопостроена къща за гости Au Nature в сърцето на Троянския Балкан съчетава уют,
                спокойствие и стил. Само на 1500 метра от язовир Сопот, идеален за водни спортове и риболов, и близо до
                град Троян с неговото богато културно наследство, тя предлага пълноценна планинска почивка сред свеж
                въздух, мек климат, красиви гледки, възможности за спорт, отдих и забавления.
              </p>

              <div className="center space-x-2 cursor-pointer group">
                <Link href="/hotel" className="items-center space-x-2 cursor-pointer group text-center">
                  <span className="text-[#8A3E36] tracking-wider text-sm hover:text-[#8A3E36]/80 transition-colors text-center my-0 px-0 py-0 font-bold">
                    УСЛОВИЯ
                  </span>
                  <span className="text-[#8A3E36] text-lg group-hover:translate-x-1 transition-transform font-extrabold mx-0">
                    &gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-[rgba(255,252,247,1)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="center mb-6">
                <h3 className="font-serif text-[#2C2C2C] font-normal text-4xl mb-4 tracking-[0.125em] mt-5">
                  Настаняване
                </h3>
              </div>
              {/* Golden underline */}
              <div className="w-16 h-1 bg-[#F3B53F] mx-auto mb-1"></div>
              <div className="w-10 h-1 bg-[#F3B53F] mx-auto mb-12"></div>
              <p className="text-[#2C2C2C] leading-relaxed mb-6 font-light text-lg tracking-wide">
                {
                  "Стаите са стилно и комфортно обзаведени и декорирани. Всяка е с различен интериор, вдъхновен от сезоните, морето, реките, планините, цветята, слънцето, скалите, бреговете и всичко свързано с природата, карайки Ви да се потопите напълно в свежата обстановка."
                }
              </p>
              <div className="center space-x-2 cursor-pointer group">
                <Link href="/rooms" className="items-center space-x-2 cursor-pointer group text-center">
                  <span className="text-[#8A3E36] tracking-wider text-sm hover:text-[#8A3E36]/80 transition-colors text-center my-0 px-0 py-0 font-bold">
                    НАСТАНЯВАНЕ
                  </span>
                  <span className="text-[#8A3E36] text-lg group-hover:translate-x-1 transition-transform font-extrabold mx-0">
                    &gt;
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in-right">
              <Image
                src="/aromatnaesen_1.jpg"
                alt="Стая Ароматна есен"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="py-20 bg-[#F5F1E8] bg-[rgba(255,252,247,1)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in-left">
              <Image
                src="/salon.jpg"
                alt="Салон за хранене"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="animate-fade-in-right">
              <h3 className="font-serif text-[#2C2C2C] font-normal text-4xl mb-4 tracking-[0.125em] mt-5">
                Салон за хранене
              </h3>
              {/* Golden underline */}
              <div className="w-16 h-1 bg-[#F3B53F] mx-auto mb-1"></div>
              <div className="w-10 h-1 bg-[#F3B53F] mx-auto mb-12"></div>

              <p className="text-[#2C2C2C] leading-relaxed text-lg font-light mb-16 tracking-wide px-0 ml-5 mr-5 text-center">
                Къщата за гости разполага със стилен, уютен салон за хранене, в който ще се почувствате като у дома.
                Можете да се насладите на всички удобства, които предлага: камина, локално парно, бар, музикална
                система, билярдна маса, 42-инчов плазмен телевизор, отделен санитарен възел, ъглови сепарета, трапезни
                маси и столове. Просторен е и е подходящ за големи компании от 30 човека.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARDEN Section */}
      <section className="py-20 bg-[rgba(255,252,247,1)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h3 className="font-serif text-[#2C2C2C] font-normal text-4xl mb-4 tracking-[0.125em] mt-5">
                Нашата градина
              </h3>
              {/* Golden underline */}
              <div className="w-16 h-1 bg-[#F3B53F] mx-auto mb-1"></div>
              <div className="w-10 h-1 bg-[#F3B53F] mx-auto mb-12"></div>

              <p className="text-[#2C2C2C] leading-relaxed text-lg font-light tracking-wide">
                В просторен двор с покрито барбекю и градинска мебел, а също и с детска площадка - катерушка и батут за
                най-малките ни гости, ще се насладите на пролетните и летни дни и нощи. Общата площ на градината е декар
                и половина, през пролетта може да се възползвате от хамаците под дърветата.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden animate-fade-in-right">
              <Image
                src="/dvor.jpg"
                alt="Градина"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-center mb-12 text-[#2C2C2C] font-normal tracking-[0.125em] mt-5 text-5xl">
            {"Специално преживяване"}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Паркинг"}
                </h4>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Неповторима атмосфера"}
                </h4>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Неограничен интернет"}
                </h4>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Кабелна телевизия"}
                </h4>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Отопление - локално парно"}
                </h4>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Тераса, откриваща невероятна гледка"}
                </h4>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Санитарен възел във всяка стая"}
                </h4>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-[#F5F5F5] border-border bg-background">
              <CardContent className="pt-6">
                <span className="font-serif text-center text-[rgba(243,181,63,1)] font-medium amenities__icon text-6xl">
                  ☆
                </span>
                <h4 className="font-serif mb-2 text-[#2C2C2C] text-3xl tracking-wide text-center font-normal">
                  {"Отношение към всеки детайл"}
                </h4>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-[#F5F1E8] bg-[rgba(255,242,227,1)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif mb-12 text-[#2C2C2C] text-left font-normal tracking-[0.125em] mt-5 ml-5 text-5xl">
              Събития
            </h3>

            <p className="text-[#2C2C2C] leading-relaxed text-lg font-light mb-16 text-left tracking-wide px-0 ml-5 mr-5">
              {
                "За да остане Вашият празник незабравим, ние сме готови да Ви предложим алтернативни възможности и съдействие в организирането на прекрасно парти и незабравима церемония."
              }
            </p>

            <div className="flex items-center space-x-8 flex-row mx-5">
              <Link href="/events" className="flex items-center space-x-2 cursor-pointer group">
                <span className="text-[#8A3E36] tracking-wider text-sm hover:text-[#8A3E36]/80 transition-colors font-bold">
                  СЪБИТИЯ
                </span>
                <span className="text-[#8A3E36] text-lg group-hover:translate-x-1 transition-transform font-extrabold">
                  &gt;
                </span>
              </Link>

              <Link href="/hotel" className="flex items-center space-x-2 cursor-pointer group text-center">
                <span className="text-[#8A3E36] tracking-wider text-sm hover:text-[#8A3E36]/80 transition-colors font-bold">
                  УСЛОВИЯ
                </span>
                <span className="text-[#8A3E36] text-lg group-hover:translate-x-1 transition-transform font-extrabold">
                  &gt;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Feature Cards Section */}
      <section className="py-0 bg-[#F5F5F5] bg-[rgba(255,242,227,1)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Culture Card */}
            <div className="relative h-80 overflow-hidden group cursor-pointer">
              <Image
                src="/troyanhoteldvor.jpeg"
                alt="Природа"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl font-light font-serif text-center tracking-widest mx-10 md:text-3xl">
                  {"ПРИРОДА"}
                </h3>
              </div>
            </div>

            {/* Exclusivity Card */}
            <div className="relative h-80 overflow-hidden group cursor-pointer">
              <Image
                src="/troyanhotelmasa.jpg"
                alt="Отдих"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-xl font-light leading-tight font-serif tracking-widest mx-0 md:text-3xl">
                  {"ОТДИХ"}
                </h3>
              </div>
            </div>

            {/* Romance Card */}
            <div className="relative h-80 overflow-hidden group cursor-pointer">
              <Image
                src="/troyanhotelchillarka.jpeg"
                alt="Свежест"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl font-light mx-2.5 tracking-widest font-serif text-center md:text-3xl">
                  {"СВЕЖЕСТ"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8A3E36] text-white bg-primary">
        <div className="container mx-auto px-4 py-20">
          {/* Visit Us Section - Centered */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Title  */}
            <h2 className="text-white mb-7 tracking-[0.125em] mr-0 text-left font-serif font-normal mt-5 text-6xl">
              Посетете ни!
            </h2>

            {/* Description Text */}
            <p className="text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto tracking-wide text-left font-light font-serif text-lg">
              Намираме се в село Голяма Желязна, в сърцето на Троянския Балкан. Селото е разположено на 30 км западно от
              град Троян и на 110 км от град София. Локацията е леснодостъпна, тъй като се намира на 10 км от
              магистралата София - Варна.
            </p>

            {/* Contact Information */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-white/90">
              <p className="text-left tracking-wide text-[rgba(243,181,63,1)] px-2.5 py-2.5 text-xl font-serif font-bold">
                +359 877 133 188
                <span className="text-left font-serif text-[rgba(243,181,63,1)] text-xl mx-2.5 py-3 font-bold">
                  &gt;
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Add structured data (JSON-LD) for better search engine understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Au Nature Guest House Troyan",
            url: "https://www.aunatureguesthoue.com",
            image: "https://www.aunatureguesthoue.com/troyanhotel1.jpeg",
            description: "Premium guest house in Troyan Balkan, Bulgaria",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Golya Zelyzna",
              addressLocality: "Troyan",
              addressRegion: "Bulgaria",
              postalCode: "",
              addressCountry: "BG",
            },
            telephone: "+359877133188",
            sameAs: ["https://www.facebook.com/troyanhotel.aunature"],
            amenityFeature: [
              { name: "Free WiFi" },
              { name: "Parking" },
              { name: "Restaurant" },
              { name: "Garden" },
            ],
          }),
        }}
      />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.6); }
          50% { text-shadow: 0 0 40px rgba(212, 175, 55, 1), 0 0 80px rgba(212, 175, 55, 0.8); }
        }
        
        @keyframes slide-in-left-gentle {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes slide-in-right-gentle {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slide-in-left-gentle { animation: slide-in-left-gentle 0.6s ease-out forwards; }
        .animate-slide-in-right-gentle { animation: slide-in-right-gentle 0.6s ease-out forwards; }
      `}</style>
    </div>
  )
}
