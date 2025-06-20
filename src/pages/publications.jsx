import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Download, ExternalLink, BookOpen, FileText, Users } from 'lucide-react';

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const publicationTypes = [
    { id: 'all', label: 'All Publications' },
    { id: 'journal', label: 'Journal Articles' },
    { id: 'conference', label: 'Conference Papers' },
    { id: 'book', label: 'Books & Chapters' },
    { id: 'report', label: 'Technical Reports' }
  ];
  
  const publications = [
    {
      id: 1,
      title: "Sustainable Energy Solutions for Rural Communities in Ghana: A Comprehensive Review",
      authors: "Sarpong, S. A., Mensah, K., & Johnson, R.",
      journal: "Renewable and Sustainable Energy Reviews",
      year: 2023,
      volume: 45,
      pages: "234-248",
      doi: "10.1016/j.rser.2023.12345",
      abstract: "This paper reviews sustainable energy solutions for rural communities in Ghana, focusing on solar, biomass, and micro-hydro technologies. The study evaluates implementation challenges and success factors across multiple case studies.",
      type: "journal",
      citations: 12,
      link: "#",
      pdf: "/publications/sarpong_sustainable_energy_2023.pdf"
    },
    {
      id: 2,
      title: "Technology Integration in Technical Universities: A Framework for Curriculum Development",
      authors: "Sarpong, S. A., & Osei-Tutu, E.",
      journal: "International Journal of Educational Technology in Higher Education",
      year: 2022,
      volume: 19,
      pages: "45-62",
      doi: "10.1186/s41239-022-00123-x",
      abstract: "This study proposes a framework for integrating modern technologies into technical university curricula in developing countries, with specific focus on Ghana's technical universities.",
      type: "journal",
      citations: 8,
      link: "#",
      pdf: "/publications/sarpong_technology_integration_2022.pdf"
    },
    {
      id: 3,
      title: "Innovation Ecosystems in West African Universities: Challenges and Opportunities",
      authors: "Sarpong, S. A., Addo, P. K., & Williams, M.",
      conference: "International Conference on Innovation and Entrepreneurship",
      location: "Accra, Ghana",
      year: 2023,
      pages: "123-135",
      doi: "10.5281/zenodo.7654321",
      abstract: "This paper examines the current state of innovation ecosystems in West African universities, identifying key challenges and opportunities for development.",
      type: "conference",
      citations: 5,
      link: "#",
      pdf: "/publications/sarpong_innovation_ecosystems_2023.pdf"
    },
    {
      id: 4,
      title: "Entrepreneurship Education in Technical Universities: Impact on Graduate Outcomes",
      authors: "Sarpong, S. A., Boateng, R., & Smith, J.",
      journal: "Journal of Education and Work",
      year: 2021,
      volume: 34,
      issue: 3,
      pages: "278-295",
      doi: "10.1080/13639080.2021.123456",
      abstract: "This longitudinal study assesses the impact of entrepreneurship education on graduate outcomes in Ghanaian technical universities, tracking employment, venture creation, and innovation metrics.",
      type: "journal",
      citations: 15,
      link: "#",
      pdf: "/publications/sarpong_entrepreneurship_education_2021.pdf"
    },
    {
      id: 5,
      title: "Sustainable Manufacturing Practices in Ghana: A Case Study of the Textile Industry",
      authors: "Sarpong, S. A., & Amoako, G. K.",
      journal: "Journal of Cleaner Production",
      year: 2020,
      volume: 258,
      pages: "120718",
      doi: "10.1016/j.jclepro.2020.120718",
      abstract: "This case study investigates sustainable manufacturing practices in Ghana's textile industry, identifying barriers to adoption and proposing implementation strategies.",
      type: "journal",
      citations: 23,
      link: "#",
      pdf: "/publications/sarpong_sustainable_manufacturing_2020.pdf"
    },
    {
      id: 6,
      title: "Knowledge Transfer Partnerships: Bridging Academia and Industry in Ghana",
      authors: "Sarpong, S. A., Owusu-Manu, D., & Edwards, D.",
      book: "Higher Education and Economic Development in Africa",
      publisher: "Routledge",
      year: 2022,
      pages: "187-205",
      isbn: "978-0-367-12345-6",
      abstract: "This book chapter examines knowledge transfer partnerships between universities and industry in Ghana, presenting case studies and best practices for effective collaboration.",
      type: "book",
      citations: 7,
      link: "#",
      pdf: "/publications/sarpong_knowledge_transfer_2022.pdf"
    },
    {
      id: 7,
      title: "Renewable Energy Policy Framework for Ghana: Recommendations for Implementation",
      authors: "Sarpong, S. A., Agyeman, F. O., & Taylor, E.",
      publisher: "Ghana Energy Commission",
      year: 2021,
      pages: "1-45",
      abstract: "This technical report provides policy recommendations for implementing renewable energy solutions in Ghana, with focus on regulatory frameworks, incentives, and implementation strategies.",
      type: "report",
      citations: 11,
      link: "#",
      pdf: "/publications/sarpong_renewable_energy_policy_2021.pdf"
    },
    {
      id: 8,
      title: "Digital Transformation in Technical Education: Challenges and Strategies",
      authors: "Sarpong, S. A., & Kumi, E.",
      conference: "International Conference on Education Technology",
      location: "Cape Town, South Africa",
      year: 2022,
      pages: "78-89",
      doi: "10.1109/ICET.2022.987654",
      abstract: "This paper addresses the challenges of digital transformation in technical education institutions in sub-Saharan Africa and proposes strategic approaches for successful implementation.",
      type: "conference",
      citations: 6,
      link: "#",
      pdf: "/publications/sarpong_digital_transformation_2022.pdf"
    },
    {
      id: 9,
      title: "Innovation Management in Technical Universities: A Comparative Study",
      authors: "Sarpong, S. A., Asante, K. B., & Johnson, M.",
      journal: "International Journal of Innovation Management",
      year: 2023,
      volume: 27,
      issue: 2,
      pages: "2350007",
      doi: "10.1142/S1363919623500079",
      abstract: "This comparative study examines innovation management practices across technical universities in Ghana, Kenya, and South Africa, identifying key success factors and barriers.",
      type: "journal",
      citations: 4,
      link: "#",
      pdf: "/publications/sarpong_innovation_management_2023.pdf"
    },
    {
      id: 10,
      title: "Sustainable Development in Higher Education: The Role of Technical Universities",
      authors: "Sarpong, S. A., & Opoku, A.",
      book: "Sustainability in African Higher Education",
      publisher: "Springer",
      year: 2021,
      pages: "145-163",
      isbn: "978-3-030-12345-6",
      abstract: "This book chapter explores the role of technical universities in promoting sustainable development through education, research, and community engagement in the African context.",
      type: "book",
      citations: 9,
      link: "#",
      pdf: "/publications/sarpong_sustainable_development_2021.pdf"
    }
  ];
  
  // Filter publications based on type and search query
  const filteredPublications = publications.filter(pub => {
    const matchesType = activeFilter === 'all' || pub.type === activeFilter;
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.abstract && pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesSearch;
  });
  
  // Group publications by year
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});
  
  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">Publications</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              A collection of peer-reviewed journal articles, conference papers, books, and technical reports
              contributing to the fields of sustainable development, technology integration, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Stats */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="h-6 w-6" />, value: "50+", label: "Total Publications" },
              { icon: <FileText className="h-6 w-6" />, value: "30+", label: "Journal Articles" },
              { icon: <Users className="h-6 w-6" />, value: "500+", label: "Citations" },
              { icon: <ExternalLink className="h-6 w-6" />, value: "20+", label: "International Collaborations" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search publications by title, author, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {publicationTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setActiveFilter(type.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeFilter === type.id 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'bg-accent/30 text-foreground hover:bg-accent/50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Publications by Year */}
            {filteredPublications.length > 0 ? (
              <div className="space-y-12">
                {sortedYears.map(year => (
                  <div key={year}>
                    <h2 className="text-2xl font-bold text-foreground mb-6 font-heading flex items-center">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-md mr-3">{year}</span>
                      <span>Publications</span>
                    </h2>
                    
                    <div className="space-y-6">
                      {publicationsByYear[year].map(publication => (
                        <motion.div
                          key={publication.id}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
                        >
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {publication.title}
                          </h3>
                          
                          <p className="text-primary font-medium mb-2">
                            {publication.authors}
                          </p>
                          
                          <p className="text-muted-foreground mb-4">
                            {publication.journal || publication.conference || publication.book || "Technical Report"}{publication.journal && publication.volume ? `, ${publication.volume}` : ""}
                            {publication.issue ? `(${publication.issue})` : ""}{publication.pages ? `, pp. ${publication.pages}` : ""}
                            {publication.publisher ? `, ${publication.publisher}` : ""}
                            {publication.location ? `, ${publication.location}` : ""}
                          </p>
                          
                          {publication.abstract && (
                            <div className="mb-4">
                              <h4 className="font-medium text-foreground mb-1">Abstract</h4>
                              <p className="text-muted-foreground text-sm">{publication.abstract}</p>
                            </div>
                          )}
                          
                          <div className="flex flex-wrap items-center gap-4 mt-4">
                            {publication.doi && (
                              <a 
                                href={`https://doi.org/${publication.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span>DOI: {publication.doi}</span>
                              </a>
                            )}
                            
                            {publication.citations > 0 && (
                              <span className="text-sm text-muted-foreground">
                                Citations: {publication.citations}
                              </span>
                            )}
                            
                            {publication.pdf && (
                              <a 
                                href={publication.pdf}
                                className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                              >
                                <Download className="h-4 w-4" />
                                <span>Download PDF</span>
                              </a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No publications found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Citation Metrics */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Citation Metrics</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic impact and research influence metrics
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-card ring-1 ring-border/20 text-center">
                <h3 className="text-4xl font-bold text-foreground mb-2">520+</h3>
                <p className="text-muted-foreground">Total Citations</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-card ring-1 ring-border/20 text-center">
                <h3 className="text-4xl font-bold text-foreground mb-2">15</h3>
                <p className="text-muted-foreground">h-index</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-card ring-1 ring-border/20 text-center">
                <h3 className="text-4xl font-bold text-foreground mb-2">22</h3>
                <p className="text-muted-foreground">i10-index</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-card ring-1 ring-border/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">Citation Growth</h3>
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-accent/20">
                {/* This would be replaced with an actual chart component */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground">Citation Growth Chart</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[2019, 2020, 2021, 2022].map(year => (
                  <div key={year} className="bg-background rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-1">{year}</p>
                    <p className="text-lg font-semibold text-foreground">{45 + (year - 2019) * 25}+ citations</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}