"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      quote: "An exceptional researcher whose work has significantly contributed to our understanding of quantum computing.",
      author: "Dr. Sarah Johnson",
      role: "Professor of Computer Science, MIT",
    },
    {
      quote: "A brilliant mind that consistently pushes the boundaries of what's possible in quantum algorithms.",
      author: "Prof. Michael Chen",
      role: "Department Head, Stanford University",
    },
    {
      quote: "Their research has been instrumental in advancing the field of quantum computing.",
      author: "Dr. Emily Rodriguez",
      role: "Research Director, IBM Quantum",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-gray-900 dark:text-white font-semibold">
                {testimonial.author}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {testimonial.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )
}
