"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "/#home", isHash: true },
  { label: "Attractions", href: "/#attractions", isHash: true },
  { label: "Places & Events", href: "/places", isHash: false },
  { label: "News", href: "/news", isHash: false },
  { label: "Inquire", href: "/inquire", isHash: false },
  { label: "Contact", href: "/contact", isHash: false },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine if a link is active
  const isActive = useCallback(
    (link: (typeof navLinks)[0]) => {
      if (link.isHash) return isHomePage
      // Match exact path or child paths (e.g. /places matches /places/[id])
      return pathname === link.href || pathname.startsWith(link.href + "/")
    },
    [pathname, isHomePage],
  )

  // For hash links on the home page, use simple anchors
  const getHref = (link: (typeof navLinks)[0]) => {
    if (link.isHash && isHomePage) {
      return link.href.replace("/", "") // just "#home" or "#attractions"
    }
    return link.href
  }

  // Handle hash navigation from non-home pages:
  // Navigate to "/" first, then scroll to the target element after the page renders.
  const handleHashClick = useCallback(
    (e: React.MouseEvent, link: (typeof navLinks)[0]) => {
      if (!link.isHash) return // normal navigation
      if (isHomePage) return // on home page, default anchor behaviour is fine

      e.preventDefault()
      const hash = link.href.split("#")[1]
      router.push("/")

      // Wait for the home page to render, then scroll to the target
      const scrollToHash = () => {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        } else {
          // Home page may not have rendered yet — retry once
          requestAnimationFrame(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
          })
        }
      }
      // Small delay to let the route change + render complete
      setTimeout(scrollToHash, 150)
    },
    [isHomePage, router],
  )

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-card/65 backdrop-blur-md shadow-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
        <Link href="/#home" className="flex shrink-0 items-center">
          <div className="relative h-8 sm:h-10 w-auto">
            <Image
              src={asset("/images/logos/MHACTO_LOGO.png")}
              alt="MHACTO Bocaue Logo"
              width={160}
              height={40}
              className="h-full w-auto object-contain"
              style={{ imageRendering: 'crisp-edges' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={getHref(link)}
              onClick={(e) => handleHashClick(e, link)}
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive(link)
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
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
                <Link
                  key={link.label}
                  href={getHref(link)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive(link)
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  onClick={(e) => {
                    handleHashClick(e, link)
                    setOpen(false)
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
