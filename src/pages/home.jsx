import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import Hero from "../components/hero"
import SectionHeading from "../components/section-heading"
import AchievementCard from "../components/achievement-card"
import ResearchCard from "../components/research-card"
import NewsCarousel from "../components/news-carousel"
import NewsletterForm from "../components/newsletter-form"
import TestimonialCarousel from "../components/testimonial-carousel"
import Timeline from "../components/timeline"
import BlogPreview from "../components/blog-preview"
import { ArrowRight, Calendar, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ApiService from '../services/api';

export default function HomePage() {
  const [profile, setProfile] = useState(null);
  const [researchAreas, setResearchAreas] = useState([]);
  const [featuredBlogPosts, setFeaturedBlogPosts] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileData, areasData, blogData, eventsData] = await Promise.all([
          ApiService.getProfile(),
          ApiService.getResearchAreas(),
          ApiService.getFeaturedBlogPosts(),
          ApiService.getUpcomingEvents()
        ]);
        
        setProfile(profileData.results?.[0] || null);
        setResearchAreas(areasData.results?.slice(0, 3) || []);
        setFeaturedBlogPosts(blogData.results?.slice(0, 3) || []);
        setUpcomingEvents(eventsData.results?.slice(0, 3) || []);
      } catch (error) {
        console.error('Error fetching home page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sample data for sections not yet connected to API
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <Helmet>
        <title>Prof. Smart Asomaning Sarpong | Academic Portfolio</title>
        <meta
          name="description"
          content="Academic portfolio of Prof. Smart Asomaning Sarpong, showcasing research, publications, and leadership."
        />
      </Helmet>

      <Hero
        image={profile?.profile_image || "/profile-photo.jpg"}
        name={profile?.name || "Prof. Smart Asomaning Sarpong"}
        title={profile?.title || "Senior Researcher Fellow & IRID Director"}
        description={profile?.bio || "Welcome to my academic portfolio. I am a professor specializing in innovative research methodologies and interdisciplinary studies, with a focus on developing new approaches to academic research."}
        ctaLink="/research"
        ctaText="Explore My Research"
      />

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Research" subtitle="Highlights from my current research focus areas" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((research, index) => (
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

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Academic Journey" subtitle="Key milestones in my career path" />

          <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <Timeline events={careerTimeline} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Testimonials" subtitle="What colleagues and students say about my work" />

          <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-xl">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest Insights" subtitle="Recent thoughts and articles from my academic blog" />

          <BlogPreview posts={featuredBlogPosts} />
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NewsCarousel news={news} />
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us at our upcoming events and stay connected with the latest
              developments in research and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id || event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Type:</span> {event.type_display || event.type}
                  </p>
                </div>

                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg hover:shadow-xl">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg hover:shadow-xl"
            >
              View All Events
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}