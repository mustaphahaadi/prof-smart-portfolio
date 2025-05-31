export function ResearchCard({ title, description, image, progress }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover-effect">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-primary">Progress</span>
              <span className="text-sm font-medium text-primary">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
