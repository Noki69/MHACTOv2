"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Attractions", href: "#attractions" },
  { label: "Places & Events", href: "/places" },
  { label: "Inquire", href: "/inquire" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isPlacesPage = pathname === "/places" || pathname?.startsWith("/places/")
  const isInquirePage = pathname === "/inquire"
  const isContactPage = pathname === "/contact"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Adjust links based on current page
  const getHref = (link: typeof navLinks[0]) => {
    if ((isPlacesPage || isInquirePage || isContactPage) && link.href.startsWith("#")) {
      return "/" + link.href
    }
    return link.href
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-card/65 backdrop-blur-md shadow-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
        <a href={isPlacesPage || isInquirePage || isContactPage ? "/#home" : "#home"} className="flex shrink-0 items-center">
          <div className="relative h-8 sm:h-10 w-auto">
            <Image
              src="/images/logos/MHACTO_LOGO.png"
              alt="MHACTO Bocaue Logo"
              width={500}
              height={200}
              className="h-full w-auto object-contain"
              style={{ imageRendering: 'crisp-edges' }}
              priority
              unoptimized
            />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getHref(link)}
              className="text-base font-medium transition-colors hover:text-primary text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card">
            <SheetTitle className="text-foreground">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getHref(link)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
