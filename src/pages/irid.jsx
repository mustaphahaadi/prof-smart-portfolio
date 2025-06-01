import { Helmet } from "react-helmet"
import SectionHeading from "../components/section-heading"
import { TeamStructure } from "../components/team-structure"
import { Award, Target, TrendingUp, Users } from "lucide-react"

export default function IridPage() {
  // Sample data
  const teamStructure = {
    leader: {
      name: "Prof. Smart Asomaning Sarpong",
      role: "IRID Director",
    },
    departments: [
      {
        name: "Research Innovation",
        description: "Developing new research methodologies",
        members: [
          { name: "Dr. Jane Smith", role: "Senior Researcher" },
          { name: "Dr. Michael Johnson", role: "Research Coordinator" },
          { name: "Sarah Williams", role: "Research Assistant" },
        ],
      },
      {
        name: "Interdisciplinary Studies",
        description: "Coordinating cross-disciplinary research",
        members: [
          { name: "Dr. Robert Chen", role: "Department Head" },
          { name: "Dr. Lisa Thompson", role: "Senior Researcher" },
          { name: "James Wilson", role: "Research Assistant" },
        ],
      },
      {
        name: "Development & Outreach",
        description: "Managing partnerships and funding",
        members: [
          { name: "Dr. Emily Davis", role: "Outreach Coordinator" },
          { name: "Thomas Brown", role: "Development Officer" },
          { name: "Maria Rodriguez", role: "Community Liaison" },
        ],
      },
    ],
  }

  const initiatives = [
    {
      title: "Research Methodology Innovation Hub",
      description: "A center dedicated to developing and testing new research methodologies across disciplines.",
      achievements: [
        "Developed 3 new mixed-methods research frameworks",
        "Trained over 200 researchers in innovative methodologies",
        "Published a comprehensive handbook on research innovation",
      ],
      icon: Award,
    },
    {
      title: "Cross-Disciplinary Collaboration Network",
      description:
        "A network connecting researchers from different disciplines to foster innovative collaborative projects.",
      achievements: [
        "Established partnerships with 15 academic departments",
        "Facilitated 12 cross-disciplinary research projects",
        "Organized 8 interdisciplinary research symposiums",
      ],
      icon: Users,
    },
    {
      title: "Research Capacity Building Program",
      description: "A program designed to enhance research capabilities in developing academic institutions.",
      achievements: [
        "Partnered with 10 developing institutions",
        "Provided mentorship to 45 early-career researchers",
        "Secured $2.5M in funding for capacity building initiatives",
      ],
      icon: TrendingUp,
    },
  ]

  const visionPoints = [
    {
      title: "Methodological Innovation",
      description: "Pioneering new approaches to research that transcend traditional methodological boundaries.",
    },
    {
      title: "Interdisciplinary Excellence",
      description:
        "Fostering a culture of collaboration across academic disciplines to address complex research questions.",
    },
    {
      title: "Global Research Impact",
      description:
        "Expanding the reach and influence of research through international partnerships and knowledge dissemination.",
    },
    {
      title: "Inclusive Research Practices",
      description: "Promoting diversity and inclusion in research methodologies, teams, and outcomes.",
    },
  ]

  return (
    <div className="page-transition">
      <Helmet>
        <title>IRID Leadership | Prof. Smart Asomaning Sarpong</title>
        <meta
          name="description"
          content="Learn about Prof. Smart Asomaning Sarpong's leadership role at the Institute for Research Innovation and Development (IRID)."
        />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-white to-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="IRID Leadership"
            subtitle="My role and vision as Director of the Institute for Research Innovation and Development"
          />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  Role & Responsibilities
                </h2>
                <p className="text-gray-700 mb-4">
                  As the Director of the Institute for Research Innovation and Development (IRID), I lead a dynamic team
                  dedicated to advancing research methodologies and fostering interdisciplinary collaboration in
                  academic settings.
                </p>
                <p className="text-gray-700 mb-4">
                  My responsibilities include strategic planning, overseeing research initiatives, securing funding,
                  building partnerships, and mentoring researchers at various career stages.
                </p>
                <p className="text-gray-700">
                  Under my leadership, IRID has become a hub for methodological innovation and cross-disciplinary
                  research, with a growing network of collaborators across institutions and countries.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Prof. Sarpong at IRID"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          <TeamStructure team={teamStructure} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Key Initiatives & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon

              return (
                <div key={index} className="bg-primary bg-opacity-5 rounded-lg p-6 hover-effect">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary p-3 rounded-full mr-3">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary">{initiative.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-4">{initiative.description}</p>

                  <h4 className="font-medium text-primary mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {initiative.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Strategic Vision
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex justify-center">
                <div className="bg-primary bg-opacity-10 p-4 rounded-full">
                  <Target size={80} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Vision Statement</h3>
                <p className="text-gray-700 italic border-l-4 border-secondary pl-4 py-2">
                  "To transform academic research through methodological innovation, interdisciplinary collaboration,
                  and inclusive practices, creating a global community of researchers equipped to address the complex
                  challenges of our time."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionPoints.map((point, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-heading font-bold text-primary mb-2">{point.title}</h4>
                  <p className="text-gray-700">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Join Our Research Community</h2>
            <p className="max-w-3xl mx-auto mb-6">
              IRID is always looking for passionate researchers, collaborators, and partners who share our vision for
              innovative and impactful research.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-primary rounded-md hover:bg-opacity-90 transition-colors"
              >
                Contact for Opportunities
              </a>
              <a
                href="/research"
                className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Explore Our Research
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
