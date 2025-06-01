import { Helmet } from "react-helmet"
import SectionHeading from "../components/section-heading"
import { ContactForm } from "../components/contact-form"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Book } from "lucide-react"

export default function ContactPage() {
  // Sample data
  const contactInfo = {
    email: "professor@university.edu",
    phone: "+1 (234) 567-890",
    office: "Department of Research, University Campus, Academic Building, Room 123",
    officeHours: [
      { day: "Monday", hours: "10:00 AM - 12:00 PM" },
      { day: "Wednesday", hours: "2:00 PM - 4:00 PM" },
      { day: "Friday", hours: "By appointment" },
    ],
  }

  const affiliations = [
    "American Association for Research Innovation",
    "International Society for Interdisciplinary Studies",
    "Academic Leadership Council",
    "Higher Education Research Consortium",
    "Global Research Methodology Network",
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Google Scholar", url: "https://scholar.google.com", icon: Book },
    { name: "ResearchGate", url: "https://researchgate.net", icon: Book },
  ]

  return (
    <div className="page-transition">
      <Helmet>
        <title>Contact | Prof. Smart Asomaning Sarpong</title>
        <meta
          name="description"
          content="Get in touch with Prof. Smart Asomaning Sarpong. Contact information, office hours, and inquiry form."
        />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-white to-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact"
            subtitle="Get in touch for research collaborations, speaking engagements, or general inquiries"
          />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-primary">Email</h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-700 hover:text-secondary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-primary">Phone</h4>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-700 hover:text-secondary transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-primary">Office Location</h4>
                      <p className="text-gray-700">{contactInfo.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock size={20} className="text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-primary">Office Hours</h4>
                      <ul className="text-gray-700">
                        {contactInfo.officeHours.map((schedule, index) => (
                          <li key={index} className="flex justify-between">
                            <span className="font-medium">{schedule.day}:</span>
                            <span>{schedule.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Professional Affiliations</h3>
                <ul className="space-y-2">
                  {affiliations.map((affiliation, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      <span className="text-gray-700">{affiliation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Connect Online</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon

                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-primary bg-opacity-5 rounded-md hover:bg-primary hover:text-white transition-colors"
                      >
                        <IconComponent size={16} className="mr-2" />
                        <span>{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Research Collaboration Inquiry</h3>
            <p className="max-w-3xl mx-auto mb-6 text-gray-700">
              Interested in collaborating on a research project? Please use the contact form above and mention "Research
              Collaboration" in the subject line. I'm always open to discussing new research opportunities and
              partnerships.
            </p>
            <a
              href="/research"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              View My Research Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
