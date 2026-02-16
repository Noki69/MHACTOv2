"use client"

import { useEffect } from "react"

/**
 * Global IntersectionObserver that automatically reveals ALL elements
 * with the `.reveal-on-scroll` CSS class when they enter the viewport.
 * Works for both server and client components — no per-element ref needed.
 *
 * Mount this once in the root layout.
 */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "-40px", threshold: 0.1 }
    )

    // Observe all current elements
    function observeAll() {
      document.querySelectorAll(".reveal-on-scroll:not(.revealed)").forEach((el) => {
        observer.observe(el)
      })
    }

    observeAll()

    // Also catch elements added later (e.g. from client-side navigation)
    const mutation = new MutationObserver(() => observeAll())
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])

  return null
}
