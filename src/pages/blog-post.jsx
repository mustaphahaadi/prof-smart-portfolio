import { Helmet } from "react-helmet-async"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, User, Tag, Share2, Bookmark, MessageSquare } from "lucide-react"
import ResearchCard from "../components/research-card"

export default function BlogPostPage() {
  const { slug } = useParams()

  // In a real app, you would fetch the post data based on the slug
  // This is sample data for demonstration
  const post = {
    title: "The Future of Mixed Methods Research in Academic Settings",
    date: "June 15, 2023",
    author: "Prof. Smart Asomaning Sarpong",
    category: "Research Methodology",
    tags: ["Mixed Methods", "Research Trends", "Academic Research"],
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>The Evolution of Mixed Methods</h2>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <blockquote>
        The integration of qualitative and quantitative approaches provides a more comprehensive understanding of research problems than either approach alone.
      </blockquote>
      
      <h2>Current Challenges and Opportunities</h2>
      
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      
      <ul>
        <li>Integration of diverse data types</li>
        <li>Methodological rigor across approaches</li>
        <li>Training researchers in multiple methodologies</li>
        <li>Publishing challenges in traditional journals</li>
      </ul>
      
      <h2>Future Directions</h2>
      
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
      
      <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
    `,
    relatedPosts: [
      {
        title: "Building Effective Interdisciplinary Research Teams",
        slug: "building-interdisciplinary-teams",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Academic Leadership in the Digital Age",
        slug: "academic-leadership-digital-age",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <div className="page-transition">
      <Helmet>
        <title>{post.title} | Prof. Smart Asomaning Sarpong</title>
        <meta name="description" content={post.content.substring(0, 160).replace(/<[^>]*>/g, "")} />
      </Helmet>

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
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>

                <div className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  <span>{post.category}</span>
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
                {post.tags.map((tag, index) => (
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

                <button className="flex items-center px-4 py-2 bg-primary text-white dark:bg-blue-600 rounded-md hover:bg-opacity-90 transition-colors">
                  <MessageSquare size={16} className="mr-2" />
                  Contact Author
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-12 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
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
    </div>
  )
}
