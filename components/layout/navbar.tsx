"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { PlacesEventsDropdown } from "./places-events-dropdown"

const navLinks = [
  { label: "Home", href: "/#home", isHash: true },
  { label: "Attractions", href: "/#attractions", isHash: true },
  { label: "News", href: "/news", isHash: false },
  { label: "Inquire", href: "/inquire", isHash: false },
  { label: "Contact", href: "/contact", isHash: false },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [placesDropdownOpen, setPlacesDropdownOpen] = useState(false)
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
      if (link.isHash && isHomePage) {
        if (typeof window !== "undefined") {
          const currentHash = window.location.hash;
          // Highlight Home if no hash or hash is "#home"
          if (link.href === "/#home" && (!currentHash || currentHash === "#home")) return true;
          // Highlight Attractions if hash is "#attractions"
          if (link.href === "/#attractions" && currentHash === "#attractions") return true;
          return false;
        }
        // fallback: highlight Home if no hash
        return link.href === "/#home";
      }
      // Match exact path or child paths (e.g. /places matches /places/[id])
      return pathname === link.href || pathname.startsWith(link.href + "/");
    },
    [pathname, isHomePage]
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
      // Navigate to the homepage with the hash so the browser scrolls to the section
      router.push(`/#${hash}`)
    },
    [isHomePage, router],
  )

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
        {/* Left – MHACTO logo */}
        <Link href="/#home" className="flex shrink-0 items-center">
          <Image
            src={asset("/images/logos/MHACTO_LOGO.png")}
            alt="MHACTO Bocaue Logo"
            width={180}
            height={48}
            className="h-9 sm:h-11 w-auto object-contain"
            style={{ imageRendering: 'crisp-edges' }}
            priority
          />
        </Link>

        {/* Center – Desktop nav links */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={getHref(link)}
              onClick={(e) => handleHashClick(e, link)}
              className={`text-sm lg:text-base font-medium transition-colors hover:text-primary ${
                isActive(link)
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Places & Events Dropdown */}
          <PlacesEventsDropdown isActive={pathname === "/places" || pathname.startsWith("/places/")} />
        </div>

        {/* Right – Municipality of Bocaue logo + mobile menu */}
        <div className="flex items-center gap-3">
          <Link href="/#home" className="hidden md:flex shrink-0 items-center gap-2">
            <Image
              src={asset("/images/logos/Municipality_of_bocaue.png")}
              alt="Municipality of Bocaue Logo"
              width={64}
              height={64}
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
              priority
            />
            <span className="hidden lg:block text-sm font-semibold leading-tight text-foreground">
              Municipality<br />of Bocaue
            </span>
          </Link>

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
              {/* MHACTO logo in mobile menu */}
              <div className="mt-4 mb-6 flex justify-center">
                <Image
                  src={asset("/images/logos/MHACTO_LOGO.png")}
                  alt="MHACTO Bocaue Logo"
                  width={140}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col gap-6">
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
              
              {/* Mobile Places & Events Dropdown */}
              <button
                onClick={() => setPlacesDropdownOpen(!placesDropdownOpen)}
                className={`text-lg font-medium transition-colors flex items-center justify-between hover:text-primary ${
                  pathname === "/places" || pathname.startsWith("/places/")
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                Places & Events
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    placesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {placesDropdownOpen && (
                <div className="pl-4 space-y-3 border-l-2 border-primary/20">
                  <Link
                    href="/places/category/history"
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      setOpen(false)
                      setPlacesDropdownOpen(false)
                    }}
                  >
                    History Wonders
                  </Link>
                  <Link
                    href="/places/category/arts-business"
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      setOpen(false)
                      setPlacesDropdownOpen(false)
                    }}
                  >
                    Arts and Business Wonders
                  </Link>
                  <Link
                    href="/places/category/tourism"
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      setOpen(false)
                      setPlacesDropdownOpen(false)
                    }}
                  >
                    Tourism Wonders
                  </Link>
                  <Link
                    href="/places/category/culinary"
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      setOpen(false)
                      setPlacesDropdownOpen(false)
                    }}
                  >
                    Culinary Wonders
                  </Link>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
  )
}
