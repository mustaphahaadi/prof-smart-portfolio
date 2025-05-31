import { Calendar, Award } from "lucide-react"

export function AchievementCard({ date, title, description, icon }) {
  const IconComponent = icon === "award" ? Award : Calendar

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover-effect">
      <div className="flex items-center mb-4">
        <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
          <IconComponent size={24} className="text-primary" />
        </div>
        <div>
          <span className="text-sm text-gray-500">{date}</span>
          <h3 className="text-xl font-heading font-bold text-primary">{title}</h3>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
