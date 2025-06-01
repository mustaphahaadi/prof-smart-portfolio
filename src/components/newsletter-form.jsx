"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setEmail("")
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex items-center space-x-3 mb-4">
        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to my newsletter for the latest updates on research, publications, and academic insights.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>

        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 text-sm">Thank you for subscribing!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-sm">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}
