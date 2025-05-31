import { Calendar, User, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function BlogPreview({ posts }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover-effect border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          >
            {post.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4 mb-3">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-secondary dark:text-blue-300 hover:text-primary dark:hover:text-blue-200 transition-colors"
              >
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/blog"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          View All Posts <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  )
}
