"use client"

import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Hero } from "./hero"
import { SectionHeading } from "./section-heading"
import { AchievementCard } from "./achievement-card"
import { ResearchCard } from "./research-card"
import { NewsCarousel } from "./news-carousel"
import { NewsletterForm } from "./newsletter-form"
import { TestimonialCarousel } from "./testimonial-carousel"
import { Timeline } from "./timeline"
import { BlogPreview } from "./blog-preview"
import {
  fetchProfile,
  fetchAchievements,
  fetchResearchAreas,
  fetchNews,
  fetchTestimonials,
  fetchCareerEvents,
  fetchBlogPosts,
} from "@/services/api"

export default function HomePage() {
  const [profile, setProfile] = useState(null)
  const [achievements, setAchievements] = useState([])
  const [researchHighlights, setResearchHighlights] = useState([])
  const [news, setNews] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [careerTimeline, setCareerTimeline] = useState([])
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true)

        // Fetch all required data in parallel
        const [
          profileData,
          achievementsData,
          researchAreasData,
          newsData,
          testimonialsData,
          careerEventsData,
          blogPostsData,
        ] = await Promise.all([
          fetchProfile(),
          fetchAchievements(),
          fetchResearchAreas(),
          fetchNews(),
          fetchTestimonials(),
          fetchCareerEvents(),
          fetchBlogPosts({ ordering: "-date", page_size: 3 }),
        ])

        setProfile(profileData)
        setAchievements(achievementsData)
        setResearchHighlights(researchAreasData.slice(0, 3))
        setNews(newsData)
        setTestimonials(testimonialsData)
        setCareerTimeline(careerEventsData)
        setBlogPosts(blogPostsData.results)

        setLoading(false)
      } catch (err) {
        console.error("Error fetching home page data:", err)
        setError("Failed to load content. Please try again later.")
        setLoading(false)
      }
    }

    fetchHomeData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading-spinner"></div>
        <span className="ml-2">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-transition">
      <Helmet>
        <title>{profile?.name || "Academic Portfolio"}</title>
        <meta
          name="description"
          content={`Academic portfolio of ${profile?.name}, showcasing research, publications, and leadership.`}
        />
      </Helmet>

      <Hero
        image={profile?.profile_image || "/placeholder.svg?height=400&width=400"}
        name={profile?.name || "Prof. Smart Asomaning Sarpong"}
        title={profile?.title || "Academic Researcher & IRID Leader"}
        description={
          profile?.bio ||
          "Welcome to my academic portfolio. I am a professor specializing in innovative research methodologies and interdisciplinary studies."
        }
        ctaLink="/research"
        ctaText="Explore My Research"
      />

      <section className="py-16 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Latest Achievements"
            subtitle="Recent recognition and milestones in my academic journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.slice(0, 3).map((achievement) => (
              <AchievementCard
                key={achievement.id}
                date={new Date(achievement.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Research" subtitle="Highlights from my current research focus areas" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchHighlights.map((research) => (
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
                image={research.image || "/placeholder.svg?height=300&width=500"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Academic Journey" subtitle="Key milestones in my career path" />

          <div className="max-w-4xl mx-auto">
            <Timeline events={careerTimeline} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeading title="Testimonials" subtitle="What colleagues and students say about my work" />

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Latest Insights" subtitle="Recent thoughts and articles from my academic blog" />

          <BlogPreview posts={blogPosts} />
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NewsCarousel news={news} />
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}
