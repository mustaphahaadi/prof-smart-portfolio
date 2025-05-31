import { Helmet } from "react-helmet"
import { SectionHeading } from "../components/section-heading"
import { ResearchCard } from "../components/research-card"
import { Lightbulb, Users, BookOpen, Globe } from "lucide-react"

export default function ResearchPage() {
  // Sample data
  const researchAreas = [
    {
      title: "Innovative Research Methodologies",
      description:
        "Developing new approaches to academic research that combine quantitative and qualitative methods for more comprehensive insights.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Interdisciplinary Studies",
      description:
        "Exploring the intersection of multiple academic disciplines to solve complex research problems and create new knowledge frameworks.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Academic Leadership Development",
      description:
        "Researching effective strategies for developing leadership skills in academic environments and institutional settings.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Educational Technology Integration",
      description:
        "Investigating the impact of emerging technologies on research practices and educational outcomes in higher education.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const activeProjects = [
    {
      title: "Mixed Methods Research Framework",
      description:
        "Developing a comprehensive framework for integrating qualitative and quantitative research methodologies in academic studies.",
      image: "/placeholder.svg?height=300&width=500",
      progress: 75,
    },
    {
      title: "Cross-Disciplinary Collaboration Model",
      description:
        "Creating a model for effective collaboration across academic disciplines to address complex research questions.",
      image: "/placeholder.svg?height=300&width=500",
      progress: 60,
    },
    {
      title: "Academic Leadership Competency Study",
      description:
        "Identifying key competencies for effective leadership in academic institutions and research organizations.",
      image: "/placeholder.svg?height=300&width=500",
      progress: 40,
    },
  ]

  const researchInterests = [
    {
      category: "Methodology",
      icon: Lightbulb,
      interests: [
        "Mixed Methods Research",
        "Qualitative Analysis Techniques",
        "Research Design Innovation",
        "Methodological Triangulation",
      ],
    },
    {
      category: "Collaboration",
      icon: Users,
      interests: [
        "Interdisciplinary Research Teams",
        "Cross-Institutional Partnerships",
        "Global Research Networks",
        "Collaborative Knowledge Creation",
      ],
    },
    {
      category: "Education",
      icon: BookOpen,
      interests: [
        "Higher Education Leadership",
        "Research Capacity Building",
        "Educational Technology",
        "Curriculum Development",
      ],
    },
    {
      category: "Impact",
      icon: Globe,
      interests: [
        "Research Dissemination Strategies",
        "Knowledge Translation",
        "Policy Influence",
        "Community-Engaged Scholarship",
      ],
    },
  ]

  return (
    <div className="page-transition">
      <Helmet>
        <title>Research | Prof. Smart Asomaning Sarpong</title>
        <meta
          name="description"
          content="Explore the research areas, active projects, and research interests of Prof. Smart Asomaning Sarpong."
        />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-white to-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Research"
            subtitle="Exploring innovative methodologies and interdisciplinary approaches to academic research"
          />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">Research Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <ResearchCard key={index} title={area.title} description={area.description} image={area.image} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">Active Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeProjects.map((project, index) => (
              <ResearchCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                progress={project.progress}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">Research Interests</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchInterests.map((category, index) => {
              const IconComponent = category.icon

              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover-effect">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-3">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary">{category.category}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.interests.map((interest, interestIndex) => (
                      <li key={interestIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                        <span className="text-gray-700">{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">Collaboration Opportunities</h2>

          <div className="bg-primary bg-opacity-5 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Interested in Collaborating?</h3>
              <p className="text-gray-700 mb-6">
                I am always open to new research collaborations and partnerships. If you are interested in working
                together on a research project, please get in touch to discuss potential opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Contact for Collaboration
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
