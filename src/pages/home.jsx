import { Helmet } from "react-helmet"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { AchievementCard } from "@/components/achievement-card"
import { ResearchCard } from "@/components/research-card"
import { NewsCarousel } from "@/components/news-carousel"
import { NewsletterForm } from "@/components/newsletter-form"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Timeline } from "@/components/timeline"
import { BlogPreview } from "@/components/blog-preview"

export default function HomePage() {
  // Sample data
  const achievements = [
    {
      date: "June 2023",
      title: "Research Excellence Award",
      description: "Recognized for outstanding contributions to the field of academic research methodology.",
      icon: "award",
    },
    {
      date: "March 2023",
      title: "International Conference Keynote",
      description: "Delivered the keynote address at the International Conference on Research Innovation.",
      icon: "calendar",
    },
    {
      date: "January 2023",
      title: "Research Grant Approval",
      description: "Secured a $1.2M research grant for the study of innovative research methodologies.",
      icon: "award",
    },
  ]

  const researchHighlights = [
    {
      title: "Innovative Research Methodologies",
      description: "Developing new approaches to academic research that combine quantitative and qualitative methods.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Interdisciplinary Studies",
      description: "Exploring the intersection of multiple academic disciplines to solve complex research problems.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Academic Leadership Development",
      description: "Researching effective strategies for developing leadership skills in academic environments.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const news = [
    {
      date: "May 15, 2023",
      title: "New Research Paper Published",
      content:
        "My latest research paper on innovative methodologies has been published in the Journal of Academic Research.",
    },
    {
      date: "April 3, 2023",
      title: "Upcoming Conference Presentation",
      content:
        "I will be presenting my research findings at the International Conference on Research Innovation next month.",
    },
    {
      date: "March 20, 2023",
      title: "Research Team Expansion",
      content:
        "Our research team has expanded with the addition of three new doctoral students focusing on interdisciplinary studies.",
    },
    {
      date: "February 8, 2023",
      title: "New Collaboration Announced",
      content: "Excited to announce a new collaboration with the University of Innovation on a joint research project.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Prof. Sarpong's innovative research methodologies have transformed how we approach interdisciplinary studies at our institution. His guidance has been invaluable to our research team.",
      name: "Dr. Emily Johnson",
      title: "Research Director",
      institution: "University of Innovation",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Working with Prof. Sarpong on the Cross-Disciplinary Collaboration Model was a career-defining experience. His insights and leadership have significantly advanced our field.",
      name: "Prof. Michael Chen",
      title: "Department Chair",
      institution: "Global Research Institute",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Prof. Sarpong's mentorship has been transformative for my academic career. His approach to research methodology is both innovative and practical, setting a new standard in our field.",
      name: "Dr. Sarah Williams",
      title: "Associate Professor",
      institution: "Academic Leadership Council",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const careerTimeline = [
    {
      year: "2020",
      title: "Director of IRID",
      institution: "Institute for Research Innovation and Development",
      description:
        "Leading a team of researchers focused on developing innovative research methodologies and fostering interdisciplinary collaboration.",
      achievements: [
        "Established the Research Methodology Innovation Hub",
        "Secured $3.5M in research funding",
        "Published 12 high-impact research papers",
      ],
    },
    {
      year: "2015",
      title: "Professor of Research Methodology",
      institution: "University of Academic Excellence",
      description: "Teaching advanced research methods and leading the department's research initiatives.",
      achievements: [
        "Developed new curriculum for graduate research methods",
        "Mentored 15 doctoral students to successful completion",
        "Received the Distinguished Teaching Award",
      ],
    },
    {
      year: "2010",
      title: "Associate Professor",
      institution: "Global Research University",
      description: "Focused on interdisciplinary research approaches and collaborative research projects.",
      achievements: [
        "Led 3 major interdisciplinary research projects",
        "Published groundbreaking paper on mixed methods research",
        "Established international research partnership with 5 universities",
      ],
    },
    {
      year: "2005",
      title: "Assistant Professor",
      institution: "Academic Innovation College",
      description: "Began academic career focusing on research methodology innovation.",
      achievements: [
        "Received Early Career Researcher Award",
        "Published first book on research methodologies",
        "Developed innovative approach to qualitative data analysis",
      ],
    },
  ]

  const blogPosts = [
    {
      title: "The Future of Mixed Methods Research in Academic Settings",
      excerpt:
        "Exploring how mixed methods research is evolving and what this means for academic researchers across disciplines.",
      date: "June 15, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=300&width=500",
      slug: "future-mixed-methods-research",
    },
    {
      title: "Building Effective Interdisciplinary Research Teams",
      excerpt:
        "Key strategies for creating and managing successful research teams that span multiple academic disciplines.",
      date: "May 22, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=300&width=500",
      slug: "building-interdisciplinary-teams",
    },
    {
      title: "Academic Leadership in the Digital Age",
      excerpt:
        "How technology is transforming academic leadership and what skills are needed to thrive in this new environment.",
      date: "April 10, 2023",
      author: "Prof. S. A. Sarpong",
      image: "/placeholder.svg?height=300&width=500",
      slug: "academic-leadership-digital-age",
    },
  ]

  return (
    <div className="page-transition">
      <Helmet>
        <title>Prof. Smart Asomaning Sarpong | Academic Portfolio</title>
        <meta
          name="description"
          content="Academic portfolio of Prof. Smart Asomaning Sarpong, showcasing research, publications, and leadership."
        />
      </Helmet>

      <Hero
        image="/placeholder.svg?height=400&width=400"
        name="Prof. Smart Asomaning Sarpong"
        title="Academic Researcher & IRID Leader"
        description="Welcome to my academic portfolio. I am a professor specializing in innovative research methodologies and interdisciplinary studies, with a focus on developing new approaches to academic research."
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
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                date={achievement.date}
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
            {researchHighlights.map((research, index) => (
              <ResearchCard
                key={index}
                title={research.title}
                description={research.description}
                image={research.image}
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
