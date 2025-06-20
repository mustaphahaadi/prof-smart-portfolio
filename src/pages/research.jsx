import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Users, Calendar, MapPin } from 'lucide-react';

export default function Research() {
  const [activeTab, setActiveTab] = useState('current');
  
  const researchProjects = {
    current: [
      {
        title: "Sustainable Energy Solutions for Rural Ghana",
        description: "Investigating cost-effective renewable energy implementations for rural communities in Ghana, focusing on solar and biomass technologies.",
        image: "/projects/sustainable-energy.jpg",
        funding: "Ghana Education Trust Fund (GETFund)",
        collaborators: ["University of Ghana", "MIT Energy Initiative"],
        period: "2022-2025",
        location: "Northern Ghana"
      },
      {
        title: "Technology Integration in Technical Education",
        description: "Developing frameworks for effective integration of modern technologies in technical education curricula across Ghanaian universities.",
        image: "/projects/tech-education.jpg",
        funding: "African Development Bank",
        collaborators: ["Kwame Nkrumah University", "Technical University of Kenya"],
        period: "2021-2024",
        location: "Kumasi, Ghana"
      },
      {
        title: "Innovation Ecosystems in West African Universities",
        description: "Mapping and analyzing innovation ecosystems in West African universities to identify best practices and opportunities for improvement.",
        image: "/projects/innovation-ecosystem.jpg",
        funding: "World Bank Africa Centers of Excellence",
        collaborators: ["University of Lagos", "Ashesi University"],
        period: "2023-2026",
        location: "Multiple West African Countries"
      }
    ],
    completed: [
      {
        title: "Entrepreneurship Development in Technical Universities",
        description: "Assessed the impact of entrepreneurship education on graduate outcomes in Ghanaian technical universities.",
        image: "/projects/entrepreneurship.jpg",
        funding: "Ghana Council for Technical Education",
        collaborators: ["Cape Coast Technical University", "Ho Technical University"],
        period: "2018-2021",
        location: "Ghana"
      },
      {
        title: "Sustainable Manufacturing Practices in Ghana",
        description: "Investigated the adoption of sustainable manufacturing practices in Ghana's industrial sector and developed implementation frameworks.",
        image: "/projects/manufacturing.jpg",
        funding: "United Nations Industrial Development Organization",
        collaborators: ["Association of Ghana Industries", "University of Sheffield"],
        period: "2017-2020",
        location: "Accra and Kumasi, Ghana"
      },
      {
        title: "Knowledge Transfer Partnerships in Higher Education",
        description: "Evaluated the effectiveness of knowledge transfer partnerships between universities and industry in Ghana.",
        image: "/projects/knowledge-transfer.jpg",
        funding: "British Council",
        collaborators: ["University of Manchester", "Ghana Chamber of Commerce"],
        period: "2019-2022",
        location: "Ghana"
      }
    ]
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">Research</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Exploring innovative solutions to global challenges through interdisciplinary research
              focused on sustainable development, technology integration, and innovation ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-background" id="areas">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Research Areas</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My research spans several interconnected domains focused on sustainable development and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Development",
                description: "Research on sustainable practices, renewable energy, and environmental conservation strategies for developing regions, with a focus on rural communities in Ghana.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Technology Integration",
                description: "Investigating effective methods for integrating modern technology into educational systems and industrial processes in Ghana and other developing economies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Innovation & Entrepreneurship",
                description: "Developing frameworks for fostering innovation and entrepreneurship in academic and industrial settings in West Africa, with emphasis on technical education.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Higher Education Policy",
                description: "Analyzing and developing policy frameworks for higher education institutions in Ghana, with a focus on technical universities and their role in national development.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                )
              },
              {
                title: "Knowledge Transfer",
                description: "Studying effective knowledge transfer mechanisms between academia, industry, and communities in developing economies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              },
              {
                title: "Sustainable Manufacturing",
                description: "Researching sustainable manufacturing practices and their implementation in the Ghanaian industrial sector, with focus on resource efficiency and waste reduction.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary">{area.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 bg-accent/5" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Research Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exploring innovative solutions through collaborative research initiatives
            </p>
          </motion.div>

          {/* Project Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-accent/30 p-1">
              <button
                onClick={() => setActiveTab('current')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'current' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Current Projects
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'completed' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                Completed Projects
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchProjects[activeTab].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20 flex flex-col"
              >
                <div className="aspect-video relative">
                  <img
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Collaborators:</span> {project.collaborators.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Period:</span> {project.period}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Location:</span> {project.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <Link 
                    to={`/research/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 bg-background" id="methodology">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Research Methodology</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
              <p className="text-muted-foreground mb-6">
                My research approach combines rigorous academic methods with practical applications, 
                ensuring that findings contribute both to the academic body of knowledge and to 
                real-world solutions for communities and industries in Ghana and beyond.
              </p>
              
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 shadow-sm ring-1 ring-border/10">
                  <h3 className="font-semibold text-foreground mb-2">Mixed Methods Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    Combining qualitative and quantitative research methods to gain comprehensive insights 
                    into complex socio-technical systems.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-4 shadow-sm ring-1 ring-border/10">
                  <h3 className="font-semibold text-foreground mb-2">Participatory Action Research</h3>
                  <p className="text-muted-foreground text-sm">
                    Engaging communities and stakeholders as active participants in the research process, 
                    ensuring relevance and applicability of findings.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-4 shadow-sm ring-1 ring-border/10">
                  <h3 className="font-semibold text-foreground mb-2">Case Study Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    In-depth examination of specific cases to extract valuable insights and best practices 
                    that can be adapted to similar contexts.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/research-methodology.pdf" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Methodology Paper</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-border/20">
                <img 
                  src="/research-methodology.jpg" 
                  alt="Research Methodology" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary/10 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Map */}
      <section className="py-20 bg-accent/5" id="map">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Research Map</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Geographical distribution of research projects and collaborations
            </p>
          </motion.div>

          <div className="bg-card rounded-xl p-6 shadow-card ring-1 ring-border/20">
            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-accent/20">
              {/* This would be replaced with an actual interactive map component */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Research Map</p>
              </div>
            </div>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">West Africa</h3>
                <p className="text-muted-foreground text-sm">
                  12 research projects across Ghana, Nigeria, and Senegal focusing on sustainable development and education.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">East Africa</h3>
                <p className="text-muted-foreground text-sm">
                  5 collaborative initiatives with universities in Kenya and Tanzania on technology integration.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">International</h3>
                <p className="text-muted-foreground text-sm">
                  8 global partnerships with institutions in Europe, North America, and Asia on knowledge transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}