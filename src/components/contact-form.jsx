"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { submitContactForm } from "../services/api"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await submitContactForm(formData)
      setSubmitStatus({
        type: "success",
        message: response.message || "Thank you for your message! I'll get back to you as soon as possible.",
      })

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: error.response?.data?.message || "There was an error sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-6">Get in Touch</h3>

      {submitStatus && (
        <div
          className={`${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-100"
              : "bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-100"
          } p-4 rounded-md mb-6 animate-fade-in`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.subject ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
          />
          {errors.subject && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.subject}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 border ${
              errors.message ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg hover:shadow-xl disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <div className="loading-spinner mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message <Send size={16} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
