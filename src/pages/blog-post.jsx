import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Share2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  
  // This would typically come from an API or CMS
  const post = {
    id: parseInt(id),
    title: "Sustainable Energy Solutions for Rural Communities in Ghana",
    content: `
      <p>Energy access remains a significant challenge for many rural communities in Ghana. Despite the country's progress in electrification, many remote areas still lack reliable and affordable energy sources. This blog post explores practical renewable energy solutions that can transform these communities and address energy poverty challenges.</p>
      
      <h2>The Current Energy Landscape</h2>
      <p>Ghana has made significant strides in expanding electricity access, with the national electrification rate reaching approximately 85%. However, this statistic masks substantial disparities between urban and rural areas. While urban electrification rates exceed 90%, rural areas lag behind at around 65%, with some remote communities having no access to the national grid.</p>
      
      <p>The challenges facing rural energy access include:</p>
      <ul>
        <li>Geographical isolation making grid extension prohibitively expensive</li>
        <li>Low population density and limited ability to pay for energy services</li>
        <li>Lack of technical expertise for maintaining energy systems</li>
        <li>Inadequate policy frameworks to support decentralized energy solutions</li>
      </ul>
      
      <h2>Promising Renewable Energy Solutions</h2>
      
      <h3>1. Solar Home Systems</h3>
      <p>Solar home systems (SHS) represent one of the most viable solutions for off-grid rural communities. These systems typically consist of a solar panel, battery storage, charge controller, and basic appliances like LED lights and mobile phone chargers. Our research at Kumasi Technical University has demonstrated that even small 50-100W systems can significantly improve quality of life by:</p>
      <ul>
        <li>Extending productive hours beyond sunset</li>
        <li>Enabling children to study in the evenings</li>
        <li>Facilitating mobile phone charging (essential for mobile banking and communication)</li>
        <li>Powering small appliances like radios and fans</li>
      </ul>
      
      <p>Pay-as-you-go (PAYG) financing models have made these systems more accessible to low-income households by eliminating the high upfront costs that previously limited adoption.</p>
      
      <h3>2. Mini-grids and Micro-grids</h3>
      <p>For larger rural communities, mini-grid systems offer a middle ground between individual solar home systems and national grid extension. These systems typically combine solar PV with battery storage and sometimes diesel backup generators to provide reliable electricity to a community of households and businesses.</p>
      
      <p>Our pilot projects in the Northern Region of Ghana have shown that solar mini-grids can:</p>
      <ul>
        <li>Power productive uses of energy (grain milling, irrigation pumping, cold storage)</li>
        <li>Support community services like health centers and schools</li>
        <li>Create local employment opportunities in system maintenance and fee collection</li>
        <li>Stimulate local economic development</li>
      </ul>
      
      <h3>3. Improved Biomass Technologies</h3>
      <p>While electrification is important, cooking energy remains predominantly biomass-based in rural Ghana. Improved cookstoves and sustainable biomass management are critical components of a comprehensive rural energy strategy. Our research has focused on:</p>
      <ul>
        <li>Developing and testing culturally appropriate improved cookstove designs</li>
        <li>Establishing sustainable woodlot management practices</li>
        <li>Exploring biogas potential from agricultural waste</li>
        <li>Promoting efficient charcoal production techniques</li>
      </ul>
      
      <h2>Implementation Challenges and Solutions</h2>
      
      <p>Successfully implementing these technologies requires addressing several challenges:</p>
      
      <h3>Financing</h3>
      <p>Renewable energy systems have high upfront costs but low operating costs. Innovative financing mechanisms are essential, including:</p>
      <ul>
        <li>Results-based financing to incentivize private sector participation</li>
        <li>Community-based financing models that pool resources</li>
        <li>Targeted subsidies for the poorest households</li>
        <li>Integration with existing microfinance institutions</li>
      </ul>
      
      <h3>Technical Capacity</h3>
      <p>Building local technical capacity is crucial for sustainability. Our approach includes:</p>
      <ul>
        <li>Training local technicians in system installation and maintenance</li>
        <li>Establishing spare parts supply chains</li>
        <li>Developing simple user manuals in local languages</li>
        <li>Creating regional technical support hubs</li>
      </ul>
      
      <h3>Policy Environment</h3>
      <p>Supportive policies are needed to scale up renewable energy adoption in rural areas:</p>
      <ul>
        <li>Simplified licensing procedures for mini-grid developers</li>
        <li>Clear interconnection rules when the national grid reaches mini-grid areas</li>
        <li>Quality standards for solar products to prevent market spoilage</li>
        <li>Targeted incentives for renewable energy in underserved areas</li>
      </ul>
      
      <h2>The Way Forward</h2>
      
      <p>Our research at Kumasi Technical University suggests a multi-tiered approach to rural energy access:</p>
      
      <ol>
        <li>Conduct detailed energy needs assessments at the community level</li>
        <li>Match appropriate technologies to specific community contexts</li>
        <li>Engage communities in planning and implementation from the outset</li>
        <li>Build local capacity for operation and maintenance</li>
        <li>Establish monitoring systems to track impacts and address issues</li>
      </ol>
      
      <p>By taking this approach, we can develop sustainable energy solutions that truly meet the needs of rural communities in Ghana and contribute to broader development goals.</p>
      
      <h2>Conclusion</h2>
      
      <p>Renewable energy technologies offer promising solutions for addressing energy poverty in rural Ghana. By combining appropriate technologies, innovative financing mechanisms, local capacity building, and supportive policies, we can create sustainable energy systems that improve lives and livelihoods in rural communities.</p>
      
      <p>Our ongoing research at the Institute of Research, Innovation and Development (IRID) at Kumasi Technical University continues to explore these solutions and their implementation in various contexts across Ghana.</p>
    `,
    date: "October 15, 2023",
    author: "Prof. S. A. Sarpong",
    category: "sustainability",
    image: "/blog/sustainable-energy.jpg",
    tags: ["Renewable Energy", "Rural Development", "Sustainability"],
    relatedPosts: [
      {
        id: 5,
        title: "Sustainable Manufacturing Practices for Ghanaian Industries",
        excerpt: "Examining how Ghanaian manufacturing companies can adopt sustainable practices to reduce environmental impact while remaining competitive.",
        image: "/blog/sustainable-manufacturing.jpg"
      },
      {
        id: 3,
        title: "Building Innovation Ecosystems in Ghanaian Universities",
        excerpt: "Analyzing the key components needed to foster innovation and entrepreneurship in Ghanaian higher education institutions.",
        image: "/blog/innovation-ecosystem.jpg"
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
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="mb-10 rounded-xl overflow-hidden shadow-card">
                <img 
                  src={post.image || "/placeholder.jpg"} 
                  alt={post.title} 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <div 
                    key={tag} 
                    className="flex items-center gap-1 px-3 py-1 bg-accent/30 text-foreground rounded-full text-xs"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
              
              {/* Content */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none mb-10"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share */}
              <div className="border-t border-border/20 pt-6 mt-10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Share this article:
                  </div>
                  <div className="flex gap-2">
                    {['twitter', 'facebook', 'linkedin', 'email'].map(platform => (
                      <button
                        key={platform}
                        className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`Share on ${platform}`}
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Related Posts</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {post.relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
              >
                <Link to={`/blog/${relatedPost.id}`}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.jpg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Link>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
                    <Link 
                      to={`/blog/${relatedPost.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {relatedPost.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${relatedPost.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}