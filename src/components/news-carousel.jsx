"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function NewsCarousel({ news }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <div className="absolute top-0 left-0 bg-secondary text-white px-4 py-2 z-10 rounded-br-lg">
        <span className="font-medium">Latest News</span>
      </div>

      <div className="overflow-hidden h-64">
        {news.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 p-6 pt-12 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="text-sm text-gray-500 block mb-2">{item.date}</span>
            <h3 className="text-xl font-heading font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-colors"
          aria-label="Previous news"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-colors"
          aria-label="Next news"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 flex space-x-1">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-secondary" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
