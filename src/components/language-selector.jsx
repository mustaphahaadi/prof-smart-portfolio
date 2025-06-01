"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "zh", name: "中文" },
  ]

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (language) => {
    setSelectedLanguage(language.name)
    setIsOpen(false)
    // In a real app, you would implement language switching logic here
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 p-2 rounded-md hover:bg-primary hover:bg-opacity-10 transition-colors dark:hover:bg-white dark:hover:bg-opacity-10"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={18} className="text-primary dark:text-white" />
        <span className="text-sm text-primary dark:text-white">{selectedLanguage}</span>
        <ChevronDown
          size={14}
          className={`text-primary dark:text-white transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 py-1 border border-gray-200 dark:border-gray-700">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => selectLanguage(language)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedLanguage === language.name
                  ? "bg-primary bg-opacity-10 text-primary dark:bg-primary dark:bg-opacity-20 dark:text-white"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
