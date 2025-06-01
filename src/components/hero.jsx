import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero({ image, name, title, description, ctaLink, ctaText }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">{name}</h1>
            <h2 className="text-xl md:text-2xl font-heading text-secondary mb-6">{title}</h2>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">{description}</p>
            <Link
              to={ctaLink}
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              {ctaText} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-full opacity-10 transform translate-x-4 translate-y-4"></div>
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
