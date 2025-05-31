"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, User, Tag, Share2, Bookmark, MessageSquare } from "lucide-react"
import { fetchBlogPost } from "../services/api"

export function BlogPostDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setLoading(true)
        const data = await fetchBlogPost(slug)
        setPost(data)
      } catch (err) {
        console.error(`Error loading blog post with slug ${slug}:`, err)
        setError("Failed to load the blog post. It may not exist or there was a server error.")
      } finally {
        setLoading(false)
      }
    }

    loadBlogPost()
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="loading-spinner"></div>
        <span className="ml-2 text-gray-600 dark:text-gray-300">Loading blog post...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  if (!post) return null

  return (
    <article className="bg-white dark:bg-gray-800">
      {/* Hero image */}
      <div className="w-full h-[400px] relative">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              to="/blog"
              className="inline-flex items-center text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-md mb-4 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center text-white/90 gap-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>

              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <span>{post.category_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex space-x-4">
              {post.tags &&
                post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <div className="flex space-x-2">
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Share"
              >
                <Share2 size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Bookmark"
              >
                <Bookmark size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-primary dark:prose-headings:text-white prose-a:text-secondary dark:prose-a:text-blue-300 prose-blockquote:border-secondary dark:prose-blockquote:border-blue-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-700/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-primary dark:text-white">{post.author}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Director, Institute for Research Innovation and Development
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="flex items-center px-4 py-2 bg-primary text-white dark:bg-blue-600 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <MessageSquare size={16} className="mr-2" />
                Contact Author
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {post.related_posts && post.related_posts.length > 0 && (
        <section className="py-12 bg-background dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {post.related_posts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover-effect group"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="md:w-2/3 p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-heading font-bold text-primary dark:text-white mb-2 group-hover:text-secondary dark:group-hover:text-blue-300 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Read article</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
