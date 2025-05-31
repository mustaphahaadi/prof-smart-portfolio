import { FileText, Download, ExternalLink } from "lucide-react"

export function PublicationCard({ title, authors, journal, year, type, citations, doi, pdf }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover-effect">
      <div className="flex items-start">
        <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4 mt-1">
          <FileText size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-heading font-bold text-primary mb-2">{title}</h3>
            <span className="bg-secondary bg-opacity-10 text-secondary text-xs px-2 py-1 rounded-full">{type}</span>
          </div>
          <p className="text-gray-700 mb-2">{authors}</p>
          <p className="text-gray-600 mb-4">
            <span className="font-medium">{journal}</span>, {year}
          </p>

          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              {doi && (
                <a
                  href={`https://doi.org/${doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-secondary transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  <span>DOI</span>
                </a>
              )}
              {pdf && (
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-secondary transition-colors"
                >
                  <Download size={16} className="mr-1" />
                  <span>PDF</span>
                </a>
              )}
            </div>

            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Citations:</span>
              <span className="font-medium text-primary">{citations}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
