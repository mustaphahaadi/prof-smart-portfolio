"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Timeline({ events }) {
  const [expandedEvent, setExpandedEvent] = useState(null)

  const toggleEvent = (index) => {
    if (expandedEvent === index) {
      setExpandedEvent(null)
    } else {
      setExpandedEvent(index)
    }
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <div className="flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-7 w-3 h-3 bg-secondary rounded-full transform -translate-x-1.5 mt-1.5 z-10"></div>

              {/* Year bubble */}
              <div className="min-w-[60px] text-center">
                <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full dark:bg-primary dark:bg-opacity-80">
                  {event.year}
                </span>
              </div>

              {/* Content */}
              <div className="ml-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow w-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-heading font-bold text-primary dark:text-white">{event.title}</h3>
                  <button
                    onClick={() => toggleEvent(index)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label={expandedEvent === index ? "Collapse details" : "Expand details"}
                  >
                    {expandedEvent === index ? (
                      <ChevronUp size={16} className="text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mt-1">{event.institution}</p>

                {expandedEvent === index && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 animate-fade-in">
                    <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                    {event.achievements && (
                      <div className="mt-2">
                        <h4 className="font-medium text-primary dark:text-gray-200">Key Achievements:</h4>
                        <ul className="mt-1 space-y-1">
                          {event.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 mr-2"></div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
