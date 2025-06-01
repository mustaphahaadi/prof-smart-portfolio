import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero({ image, name, title, description, ctaLink, ctaText }) {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
            <Link
              to={ctaLink}
              className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              {ctaText} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-50 transform translate-x-4 translate-y-4"></div>
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
