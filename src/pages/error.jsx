"use client"

import { useRouteError, Link } from "react-router-dom"
import { Home, ArrowLeft } from "lucide-react"

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold text-primary mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-8">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500 mb-8">{error?.statusText || error?.message || "Something went wrong"}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg hover:shadow-xl"
          >
            <Home size={16} className="mr-2" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
