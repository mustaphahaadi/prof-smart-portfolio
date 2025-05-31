"use client"

import { useState, useEffect } from "react"
import { PublicationCard } from "./publication-card"
import { PublicationFilter } from "./publication-filter"
import { fetchPublications } from "../services/api"

export function PublicationsList() {
  const [publications, setPublications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    search: "",
    type: "All",
    year: "All",
    ordering: "-year",
    page: 1,
  })
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
  })

  useEffect(() => {
    const loadPublications = async () => {
      try {
        setIsLoading(true)

        // Prepare API filters
        const apiFilters = {}
        if (filters.search) apiFilters.search = filters.search
        if (filters.type !== "All") apiFilters.type = filters.type.toLowerCase()
        if (filters.year !== "All" && filters.year !== "Older") {
          apiFilters.year = filters.year
        } else if (filters.year === "Older") {
          // Logic for "Older" filter would depend on your API implementation
          // This is a simplified example
          apiFilters.year__lt = new Date().getFullYear() - 5
        }

        apiFilters.ordering = filters.ordering
        apiFilters.page = filters.page

        const data = await fetchPublications(apiFilters)
        setPublications(data.results)
        setPagination({
          count: data.count,
          next: data.next,
          previous: data.previous,
        })
      } catch (err) {
        console.error("Error loading publications:", err)
        setError("Failed to load publications. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    loadPublications()
  }, [filters])

  const handleFilterChange = (newFilters) => {
    // Reset to page 1 when filters change
    setFilters({ ...newFilters, page: 1 })
  }

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage })
    // Scroll to top of publications section
    document.getElementById("publications-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div id="publications-section">
      <PublicationFilter onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="loading-spinner"></div>
          <span className="ml-2 text-gray-600 dark:text-gray-300">Loading publications...</span>
        </div>
      ) : error ? (
        <div className="text-center py-12 bg-red-50 dark:bg-red-900 rounded-lg">
          <p className="text-red-600 dark:text-red-300">{error}</p>
          <button
            onClick={() => setFilters({ ...filters })}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {publications.length > 0 ? (
              publications.map((publication) => (
                <PublicationCard
                  key={publication.id}
                  title={publication.title}
                  authors={publication.authors}
                  journal={publication.journal}
                  year={publication.year}
                  type={publication.type}
                  citations={publication.citations}
                  doi={publication.doi}
                  pdf={publication.pdf_file}
                />
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">No publications found matching your criteria.</p>
                <button
                  onClick={() =>
                    setFilters({
                      search: "",
                      type: "All",
                      year: "All",
                      ordering: "-year",
                      page: 1,
                    })
                  }
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors dark:bg-blue-600"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {pagination.count > 0 && (
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(filters.page - 1)}
                  disabled={!pagination.previous}
                  className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <span className="text-gray-700 dark:text-gray-300">
                  Page {filters.page} of {Math.ceil(pagination.count / 10)}
                </span>

                <button
                  onClick={() => handlePageChange(filters.page + 1)}
                  disabled={!pagination.next}
                  className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  )
}
