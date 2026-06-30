"use client"

import Image from "next/image"
import Link from "next/link"

import { AdminContactsPanel } from "@/components/admin-contacts-panel"
import { LanguageProvider } from "@/contexts/LanguageContext"

export default function AdminPage() {
  const currentYear = new Date().getFullYear()

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-stone-100">
        <header className="bg-stone-800 py-4 text-white shadow-md">
          <div className="container mx-auto flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logokushta.jpg"
                alt="Au Nature Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
                priority
              />

              <div>
                <h1 className="text-lg font-semibold sm:text-xl">
                  Au Nature Guest House
                </h1>
                <p className="text-sm text-stone-300">
                  Административен панел
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex w-fit items-center rounded-full border border-stone-500 px-4 py-2 text-sm text-stone-200 transition-colors hover:border-white hover:bg-stone-700 hover:text-white"
            >
              ← Към сайта
            </Link>
          </div>
        </header>

        <main className="container mx-auto flex-1 px-4 py-8">
          <AdminContactsPanel />
        </main>

        <footer className="bg-stone-800 py-4 text-stone-400">
          <div className="container mx-auto px-4 text-center text-sm">
            © {currentYear} Au Nature Guest House. Административен панел.
          </div>
        </footer>
      </div>
    </LanguageProvider>
  )
}