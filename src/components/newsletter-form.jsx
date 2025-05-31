"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { subscribeToNewsletter } from "../services/api"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [error, setError] = useState(null)

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate email
    if (!email.trim()) {
      setError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setError(null)
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await subscribeToNewsletter(email)
      setSubmitStatus(response.message || "Thank you for subscribing to the newsletter!")
      setEmail("")

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (err) {
      console.error("Newsletter subscription error:", err)
      setError(err.response?.data?.message || "Failed to subscribe. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-primary bg-opacity-5 dark:bg-opacity-10 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail size={24} className="text-primary dark:text-blue-400 mr-2" />
        <h3 className="text-xl font-heading font-bold text-primary dark:text-white">Subscribe to Newsletter</h3>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Stay updated with my latest research, publications, and academic events.
      </p>

      {submitStatus && (
        <div className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-100 p-3 rounded-md mb-4 animate-fade-in">
          {submitStatus}
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-100 p-3 rounded-md mb-4 animate-fade-in">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError(null)
          }}
          placeholder="Your email address"
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-opacity-90 transition-colors disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {isSubmitting ? <div className="loading-spinner"></div> : "Subscribe"}
        </button>
      </form>
    </div>
  )
}
