import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, Filter, ExternalLink, Download, Quote } from 'lucide-react';
import ApiService from '../services/api';

export default function Publications() {
  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [loading, setLoading] = useState(true);
  const [publicationStats, setPublicationStats] = useState({});

  const publicationTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'journal', label: 'Journal Articles' },
    { value: 'conference', label: 'Conference Papers' },
    { value: 'book', label: 'Books' },
    { value: 'chapter', label: 'Book Chapters' },
    { value: 'report', label: 'Technical Reports' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [publicationsData, summaryData] = await Promise.all([
          ApiService.getPublications(),
          ApiService.getResearchSummary()
        ]);
        
        setPublications(publicationsData.results || []);
        setFilteredPublications(publicationsData.results || []);
        setPublicationStats(summaryData);
      } catch (error) {
        console.error('Error fetching publications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = publications;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(pub =>
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.abstract?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(pub => pub.type === selectedType);
    }

    // Filter by year
    if (selectedYear !== 'all') {
      filtered = filtered.filter(pub => pub.year.toString() === selectedYear);
    }

    setFilteredPublications(filtered);
  }, [publications, searchQuery, selectedType, selectedYear]);

  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

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
              Academic publications contributing to knowledge in sustainable development, innovation, and education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{publicationStats.total_publications || 0}</div>
              <div className="text-sm text-muted-foreground">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{publicationStats.total_citations || 0}</div>
              <div className="text-sm text-muted-foreground">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{publicationStats.h_index || 0}</div>
              <div className="text-sm text-muted-foreground">H-Index</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{years.length}</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            >
              {publicationTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredPublications.length} of {publications.length} publications
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {publication.type_display || publication.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{publication.year}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
                      {publication.title}
                    </h3>

                    <p className="text-muted-foreground mb-3">
                      <strong>Authors:</strong> {publication.authors}
                    </p>

                    {publication.journal && (
                      <p className="text-muted-foreground mb-3">
                        <strong>Journal:</strong> {publication.journal}
                        {publication.volume && `, Vol. ${publication.volume}`}
                        {publication.issue && `, Issue ${publication.issue}`}
                        {publication.pages && `, pp. ${publication.pages}`}
                      </p>
                    )}

                    {publication.conference && (
                      <p className="text-muted-foreground mb-3">
                        <strong>Conference:</strong> {publication.conference}
                      </p>
                    )}

                    {publication.book && (
                      <p className="text-muted-foreground mb-3">
                        <strong>Book:</strong> {publication.book}
                        {publication.publisher && ` (${publication.publisher})`}
                      </p>
                    )}

                    {publication.abstract && (
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">
                          <strong>Abstract:</strong> {publication.abstract.substring(0, 200)}
                          {publication.abstract.length > 200 && '...'}
                        </p>
                      </div>
                    )}

                    {publication.keywords && publication.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {publication.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-accent/30 text-foreground text-xs rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Quote className="h-4 w-4" />
                      <span>{publication.citations} citations</span>
                    </div>

                    <div className="flex gap-2">
                      {publication.doi && (
                        <a
                          href={`https://doi.org/${publication.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                          title="View DOI"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}

                      {publication.url && (
                        <a
                          href={publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                          title="View Publication"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}

                      {publication.pdf_file && (
                        <a
                          href={publication.pdf_file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                          title="Download PDF"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}