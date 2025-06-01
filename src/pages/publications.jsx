"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import SectionHeading from "../components/section-heading"
import { PublicationFilter } from "../components/publication-filter"
import { PublicationCard } from "../components/publication-card"
import { CitationMetrics } from "../components/citation-metrics"
import { Download } from "lucide-react"

export default function PublicationsPage() {
  // Sample data
  const allPublications = [
    {
      id: 1,
      title: "Innovative Approaches to Mixed Methods Research in Academic Settings",
      authors: "Sarpong, S. A., Johnson, M., & Williams, K.",
      journal: "Journal of Research Methodology",
      year: "2023",
      type: "Journal Article",
      citations: 12,
      doi: "10.1234/jrm.2023.001",
      pdf: "#",
    },
    {
      id: 2,
      title: "Cross-Disciplinary Collaboration: A Framework for Academic Research",
      authors: "Sarpong, S. A., & Thompson, R.",
      journal: "International Journal of Interdisciplinary Studies",
      year: "2022",
      type: "Journal Article",
      citations: 24,
      doi: "10.1234/ijis.2022.005",
      pdf: "#",
    },
    {
      id: 3,
      title: "Leadership Development in Higher Education: Challenges and Opportunities",
      authors: "Sarpong, S. A.",
      journal: "Academic Leadership Quarterly",
      year: "2022",
      type: "Journal Article",
      citations: 18,
      doi: "10.1234/alq.2022.003",
      pdf: "#",
    },
    {
      id: 4,
      title: "Integrating Technology in Research Methodology: A Case Study",
      authors: "Sarpong, S. A., Davis, J., & Miller, P.",
      journal: "Proceedings of the International Conference on Research Innovation",
      year: "2021",
      type: "Conference Paper",
      citations: 9,
      doi: "10.1234/icri.2021.045",
      pdf: "#",
    },
    {
      id: 5,
      title: "The Future of Academic Research: Trends and Directions",
      authors: "Sarpong, S. A., & Anderson, L.",
      journal: "Research Horizons",
      year: "2021",
      type: "Journal Article",
      citations: 31,
      doi: "10.1234/rh.2021.012",
      pdf: "#",
    },
    {
      id: 6,
      title: "Handbook of Innovative Research Methodologies",
      authors: "Sarpong, S. A. (Ed.)",
      journal: "Academic Press",
      year: "2020",
      type: "Book",
      citations: 45,
      doi: null,
      pdf: "#",
    },
    {
      id: 7,
      title: "Qualitative Research in the Digital Age: New Tools and Techniques",
      authors: "Sarpong, S. A., & Roberts, T.",
      journal: "Digital Research Methods",
      year: "2020",
      type: "Journal Article",
      citations: 27,
      doi: "10.1234/drm.2020.008",
      pdf: "#",
    },
    {
      id: 8,
      title: "Building Research Capacity in Developing Institutions",
      authors: "Sarpong, S. A., Wilson, M., & Brown, J.",
      journal: "Journal of Research Development",
      year: "2019",
      type: "Journal Article",
      citations: 22,
      doi: "10.1234/jrd.2019.015",
      pdf: "#",
    },
    {
      id: 9,
      title: "Ethical Considerations in Cross-Cultural Research",
      authors: "Sarpong, S. A.",
      journal: "Research Ethics Review",
      year: "2019",
      type: "Journal Article",
      citations: 19,
      doi: "10.1234/rer.2019.007",
      pdf: "#",
    },
    {
      id: 10,
      title: "Collaborative Research Networks: Structure and Impact",
      authors: "Sarpong, S. A., & Martinez, C.",
      journal: "Proceedings of the Academic Collaboration Symposium",
      year: "2018",
      type: "Conference Paper",
      citations: 14,
      doi: "10.1234/acs.2018.023",
      pdf: "#",
    },
  ]

  const citationMetrics = {
    totalCitations: 221,
    hIndex: 8,
    i10Index: 6,
    totalPublications: 10,
    citationsByYear: [
      { year: "2018", citations: 14 },
      { year: "2019", citations: 41 },
      { year: "2020", citations: 72 },
      { year: "2021", citations: 40 },
      { year: "2022", citations: 42 },
      { year: "2023", citations: 12 },
    ],
  }

  const [publications, setPublications] = useState(allPublications)
  const [isLoading, setIsLoading] = useState(false)

  const handleFilterChange = ({ searchTerm, type, year }) => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      let filtered = [...allPublications]

      // Filter by search term
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        filtered = filtered.filter(
          (pub) =>
            pub.title.toLowerCase().includes(term) ||
            pub.authors.toLowerCase().includes(term) ||
            pub.journal.toLowerCase().includes(term),
        )
      }

      // Filter by type
      if (type && type !== "All") {
        filtered = filtered.filter((pub) => pub.type === type)
      }

      // Filter by year
      if (year && year !== "All") {
        if (year === "Older") {
          filtered = filtered.filter((pub) => Number.parseInt(pub.year) < 2019)
        } else {
          filtered = filtered.filter((pub) => pub.year === year)
        }
      }

      setPublications(filtered)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="page-transition">
      <Helmet>
        <title>Publications | Prof. Smart Asomaning Sarpong</title>
        <meta
          name="description"
          content="Browse the academic publications of Prof. Smart Asomaning Sarpong, including journal articles, conference papers, and books."
        />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-white to-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Publications"
            subtitle="A comprehensive collection of my academic publications, including journal articles, conference papers, and books"
          />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <CitationMetrics metrics={citationMetrics} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Export Publications
            </a>
          </div>

          <PublicationFilter onFilterChange={handleFilterChange} />

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="loading-spinner"></div>
              <span className="ml-2 text-gray-600">Loading publications...</span>
            </div>
          ) : (
            <div className="space-y-6">
              {publications.length > 0 ? (
                publications.map((publication) => (
                  <PublicationCard
                    key={publication.id}
                    title={publication.title}
                    authors={publication.authors}
                    journal={publication.journal}
                    year={publication.year}
                    type={publication.type}
                    citations={publication.citations}
                    doi={publication.doi}
                    pdf={publication.pdf}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No publications found matching your criteria.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Google Scholar Integration</h3>
              <p className="text-gray-700 mb-6">
                For the most up-to-date list of my publications and citation metrics, please visit my Google Scholar
                profile.
              </p>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                View Google Scholar Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
