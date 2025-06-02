"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"
    }
    return "light"
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-background hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-5 w-5 transition-transform duration-200 ${
          theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-transform duration-200 ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
      />
    </button>
  )
}
