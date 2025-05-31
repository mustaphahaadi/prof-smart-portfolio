import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function CitationMetrics({ metrics }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-heading font-bold text-primary mb-6">Citation Metrics</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Citations", value: metrics.totalCitations },
          { label: "h-index", value: metrics.hIndex },
          { label: "i10-index", value: metrics.i10Index },
          { label: "Publications", value: metrics.totalPublications },
        ].map((item, index) => (
          <div key={index} className="bg-primary bg-opacity-5 rounded-lg p-4 text-center">
            <span className="block text-3xl font-bold text-primary">{item.value}</span>
            <span className="text-sm text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={metrics.citationsByYear} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="citations" fill="#2C3E50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
