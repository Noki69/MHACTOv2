import type { Metadata } from "next"
import { AdminProvider } from "@/components/admin/admin-provider"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "MHACTO Admin",
  description: "MHACTO Administration Panel — Bocaue, Bulacan",
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <AdminProvider>
        {children}
      </AdminProvider>
    </ThemeProvider>
  )
}
