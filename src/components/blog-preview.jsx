"use client"

import { Link } from "react-router-dom"

export default function BlogPreview() {
  const posts = [
    {
      title: "The Future of Quantum Computing",
      excerpt: "Exploring the latest developments in quantum computing and their implications for the future of technology.",
      date: "March 15, 2024",
      author: "Dr. Jane Smith",
      slug: "future-of-quantum-computing",
    },
    {
      title: "Understanding Quantum Algorithms",
      excerpt: "A deep dive into the fundamental principles of quantum algorithms and their applications.",
      date: "March 10, 2024",
      author: "Dr. Jane Smith",
      slug: "understanding-quantum-algorithms",
    },
    {
      title: "Quantum Error Correction",
      excerpt: "An overview of the latest techniques in quantum error correction and their importance in building reliable quantum computers.",
      date: "March 5, 2024",
      author: "Dr. Jane Smith",
      slug: "quantum-error-correction",
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Latest Articles</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
