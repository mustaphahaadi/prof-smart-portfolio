"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef(null)

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    autoplayRef.current = setTimeout(() => {
      nextSlide()
    }, 8000)

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current)
      }
    }
  }, [currentIndex])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-secondary text-white p-2 rounded-full">
            <Quote size={24} />
          </div>
        </div>

        <div className="pt-16 pb-12 px-6 md:px-12">
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 transition-all duration-500 ease-in-out
                  ${index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
                `}
              >
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=60&width=60"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
                    />
                  </div>

                  <div>
                    <div className="font-medium text-primary dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.title}, {testimonial.institution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-center">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-secondary" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
