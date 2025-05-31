"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export function ResearchMap({ collaborations }) {
  const [activeCollaboration, setActiveCollaboration] = useState(null)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-6">
        Global Research Collaborations
      </h3>

      <div className="relative">
        {/* World map background - in a real app, you might use a proper map library */}
        <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="World Map"
            className="w-full h-full object-cover opacity-50 dark:opacity-30"
          />

          {/* Collaboration pins */}
          {collaborations.map((collab, index) => (
            <button
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group`}
              style={{ left: `${collab.position.x}%`, top: `${collab.position.y}%` }}
              onClick={() => setActiveCollaboration(activeCollaboration === index ? null : index)}
              aria-label={`View collaboration with ${collab.institution}`}
            >
              <div
                className={`
                p-1 rounded-full 
                ${
                  activeCollaboration === index
                    ? "bg-secondary text-white scale-125"
                    : "bg-primary text-white hover:scale-110"
                } 
                transition-all duration-200
              `}
              >
                <MapPin size={activeCollaboration === index ? 20 : 16} />
              </div>

              {/* Tooltip */}
              <div
                className={`
                absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48
                bg-white dark:bg-gray-800 rounded-md shadow-lg p-3 z-10
                transition-opacity duration-200
                ${activeCollaboration === index ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
              >
                <h4 className="font-medium text-primary dark:text-white text-sm">{collab.institution}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">{collab.country}</p>
                <p className="text-gray-700 dark:text-gray-300 text-xs mt-1">{collab.project}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collaborations.map((collab, index) => (
          <div
            key={index}
            className={`
              p-3 rounded-md border transition-colors cursor-pointer
              ${
                activeCollaboration === index
                  ? "border-secondary bg-secondary bg-opacity-5 dark:bg-opacity-10"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }
            `}
            onClick={() => setActiveCollaboration(activeCollaboration === index ? null : index)}
          >
            <h4 className="font-medium text-primary dark:text-white">{collab.institution}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{collab.country}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{collab.project}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
