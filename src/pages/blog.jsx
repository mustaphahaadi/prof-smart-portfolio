import { Helmet } from "react-helmet-async"

import { useState } from "react"
import SectionHeading from "../components/section-heading"
import { Search, Tag, Calendar } from "lucide-react"
import { Link } from "react-router-dom"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Sample data
  const categories = [
    "All",
    "Research Methodology",
    "Academic Leadership",
    "Interdisciplinary Studies",
    "Higher Education",
    "Research Innovation",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Mixed Methods Research in Academic Settings",
      excerpt:
        "Exploring how mixed methods research is evolving and what this means for academic researchers across disciplines.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "June 15, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=400&width=800",
      category: "Research Methodology",
      tags: ["Mixed Methods", "Research Trends", "Academic Research"],
      slug: "future-mixed-methods-research",
    },
    {
      id: 2,
      title: "Building Effective Interdisciplinary Research Teams",
      excerpt:
        "Key strategies for creating and managing successful research teams that span multiple academic disciplines.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "May 22, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=400&width=800",
      category: "Interdisciplinary Studies",
      tags: ["Team Building", "Collaboration", "Research Management"],
      slug: "building-interdisciplinary-teams",
    },
    {
      id: 3,
      title: "Academic Leadership in the Digital Age",
      excerpt:
        "How technology is transforming academic leadership and what skills are needed to thrive in this new environment.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "April 10, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=400&width=800",
      category: "Academic Leadership",
      tags: ["Digital Transformation", "Leadership Skills", "Higher Education"],
      slug: "academic-leadership-digital-age",
    },
    {
      id: 4,
      title: "The Impact of AI on Research Methodologies",
      excerpt:
        "Examining how artificial intelligence is changing the way we approach academic research across disciplines.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "March 5, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=400&width=800",
      category: "Research Innovation",
      tags: ["Artificial Intelligence", "Research Methods", "Technology"],
      slug: "ai-impact-research-methodologies",
    },
    {
      id: 5,
      title: "Fostering Inclusive Research Environments",
      excerpt: "Strategies for creating research spaces that embrace diversity and promote inclusive practices.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "February 18, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=400&width=800",
      category: "Higher Education",
      tags: ["Diversity", "Inclusion", "Research Culture"],
      slug: "inclusive-research-environments",
    },
    {
      id: 6,
      title: "Navigating Research Funding Challenges",
      excerpt: "Practical advice for academics seeking funding in an increasingly competitive landscape.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "January 30, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=400&width=800",
      category: "Research Methodology",
      tags: ["Research Funding", "Grant Writing", "Academic Resources"],
      slug: "navigating-research-funding",
    },
  ]

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="page-transition">
      <Helmet>
        <title>Blog & Insights | Prof. Smart Asomaning Sarpong</title>
        <meta
          name="description"
          content="Academic insights, thoughts and articles by Prof. Smart Asomaning Sarpong on research methodology, academic leadership, and interdisciplinary studies."
        />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-white to-background dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Blog & Insights"
            subtitle="Thoughts, articles, and reflections on academic research, methodology, and leadership"
          />
        </div>
      </section>

      <section className="py-8 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-700 dark:text-white"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-white dark:bg-blue-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover-effect border border-transparent hover:border-gray-200 dark:hover:border-gray-700 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>

                      <div className="flex items-center">
                        <Tag size={14} className="mr-1" />
                        <span>{post.category}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-3 line-clamp-2 group-hover:text-secondary dark:group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  No articles found matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="px-4 py-2 bg-primary text-white dark:bg-blue-600 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-primary bg-opacity-5 dark:bg-opacity-10 rounded-lg p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-4">
              Subscribe to My Newsletter
            </h3>
            <p className="max-w-3xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
              Stay updated with my latest research insights, publications, and academic thoughts. I send a monthly
              digest of new content and exclusive insights.
            </p>

            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-700 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white dark:bg-blue-600 rounded-md sm:rounded-l-none hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
