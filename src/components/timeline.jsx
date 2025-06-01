"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Calendar } from "lucide-react"

export default function Timeline({ events }) {
  const [expandedEvent, setExpandedEvent] = useState(null)

  const toggleEvent = (index) => {
    if (expandedEvent === index) {
      setExpandedEvent(null)
    } else {
      setExpandedEvent(index)
    }
  }

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

        {/* Events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="relative pl-12">
              {/* Circle with calendar icon */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {event.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {event.institution}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {event.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
