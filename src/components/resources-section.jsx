import { FileText, Download, Book, Video, FileCode, File } from "lucide-react"

export function ResourcesSection({ resources }) {
  // Function to determine icon based on resource type
  const getIcon = (type) => {
    switch (type) {
      case "paper":
        return FileText
      case "book":
        return Book
      case "presentation":
        return FileCode
      case "video":
        return Video
      default:
        return File
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-6">Downloadable Resources</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => {
          const IconComponent = getIcon(resource.type)

          return (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover-effect border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-start">
                <div className="p-2 bg-primary bg-opacity-10 dark:bg-opacity-20 rounded-md mr-3">
                  <IconComponent size={20} className="text-primary dark:text-blue-300" />
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-primary dark:text-white text-sm line-clamp-2">{resource.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{resource.description}</p>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {resource.size} • {resource.type}
                    </span>

                    <a
                      href={resource.url}
                      download
                      className="flex items-center text-xs font-medium text-primary dark:text-blue-300 hover:text-secondary dark:hover:text-blue-200 transition-colors"
                    >
                      <Download size={14} className="mr-1" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
