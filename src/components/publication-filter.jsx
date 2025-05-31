"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"

export function PublicationFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")

  const publicationTypes = ["All", "Journal Article", "Conference Paper", "Book", "Book Chapter"]
  const years = ["All", "2023", "2022", "2021", "2020", "2019", "Older"]

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onFilterChange({ searchTerm: value, type: selectedType, year: selectedYear })
  }

  const handleTypeChange = (type) => {
    setSelectedType(type)
    onFilterChange({ searchTerm, type, year: selectedYear })
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
    onFilterChange({ searchTerm, type: selectedType, year })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={18} className="text-primary" />
          <span className="text-sm font-medium">Filters:</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Publication Type</label>
          <div className="flex flex-wrap gap-2">
            {publicationTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedType === type ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedYear === year ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
