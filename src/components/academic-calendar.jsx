"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function AcademicCalendar({ events }) {
  const currentDate = new Date()
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [selectedEvent, setSelectedEvent] = useState(null)

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  // Filter events for the current month and year
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
  })

  // Group events by date
  const eventsByDate = {}
  filteredEvents.forEach((event) => {
    const date = new Date(event.date).getDate()
    if (!eventsByDate[date]) {
      eventsByDate[date] = []
    }
    eventsByDate[date].push(event)
  })

  // Generate calendar days
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-bold text-primary dark:text-white">Academic Calendar</h3>

          <div className="flex items-center space-x-4">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft size={16} className="text-gray-600 dark:text-gray-300" />
            </button>

            <span className="text-primary dark:text-white font-medium">
              {MONTHS[currentMonth]} {currentYear}
            </span>

            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next month"
            >
              <ChevronRight size={16} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Day headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
            <div key={index} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`
                relative h-24 p-1 border border-gray-100 dark:border-gray-700 rounded-md
                ${day === null ? "bg-gray-50 dark:bg-gray-700 opacity-50" : ""}
                ${
                  day === new Date().getDate() &&
                  currentMonth === new Date().getMonth() &&
                  currentYear === new Date().getFullYear()
                    ? "bg-primary bg-opacity-5 dark:bg-opacity-20 border-primary dark:border-blue-500"
                    : ""
                }
              `}
            >
              {day !== null && (
                <>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 p-1">{day}</div>

                  {/* Events for this day */}
                  {eventsByDate[day] && (
                    <div className="mt-1 space-y-1 overflow-y-auto max-h-[70px]">
                      {eventsByDate[day].map((event, eventIndex) => (
                        <button
                          key={eventIndex}
                          onClick={() => setSelectedEvent(event)}
                          className="w-full text-left px-1 py-0.5 text-xs rounded bg-secondary bg-opacity-10 dark:bg-opacity-20 text-secondary dark:text-blue-300 hover:bg-opacity-20 dark:hover:bg-opacity-30 transition-colors truncate"
                        >
                          {event.title}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Event details */}
      {selectedEvent && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-heading font-bold text-primary dark:text-white">{selectedEvent.title}</h4>
            <button
              onClick={() => setSelectedEvent(null)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              &times;
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar size={16} className="mr-2" />
              <span>
                {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock size={16} className="mr-2" />
              <span>{selectedEvent.time}</span>
            </div>

            {selectedEvent.location && (
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span>{selectedEvent.location}</span>
              </div>
            )}

            <p className="text-gray-700 dark:text-gray-300 mt-2">{selectedEvent.description}</p>

            {selectedEvent.url && (
              <div className="mt-4">
                <a
                  href={selectedEvent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm rounded-md hover:bg-opacity-90 transition-colors"
                >
                  More Details
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
