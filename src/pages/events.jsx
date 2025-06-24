import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import ApiService from '../services/api';

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [upcomingData, pastData] = await Promise.all([
          ApiService.getUpcomingEvents(),
          ApiService.getEvents({ past: true })
        ]);
        
        setUpcomingEvents(upcomingData.results || []);
        setPastEvents(pastData.results || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">Events</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Join me at conferences, workshops, and speaking engagements around the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-accent/20 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'upcoming'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-accent/30'
                }`}
              >
                Upcoming Events ({upcomingEvents.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'past'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-accent/30'
                }`}
              >
                Past Events ({pastEvents.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {currentEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {currentEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
                >
                  {event.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.type === 'conference' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                        event.type === 'workshop' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                        event.type === 'lecture' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                        'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300'
                      }`}>
                        {event.type_display || event.type}
                      </span>
                      {event.is_virtual && (
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full">
                          Virtual
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      
                      {event.time && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      
                      {event.location && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      
                      {event.organizer && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Organized by {event.organizer}</span>
                        </div>
                      )}
                    </div>
                    
                    {event.url && (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <span>{activeTab === 'upcoming' ? 'Register' : 'View Details'}</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No {activeTab} events
              </h3>
              <p className="text-muted-foreground">
                {activeTab === 'upcoming' 
                  ? 'Check back soon for upcoming events and speaking engagements.'
                  : 'Past events will be displayed here once they are completed.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
              Interested in Collaboration?
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to speaking at conferences, workshops, and academic events. 
              If you'd like to invite me to speak at your event, please get in touch.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}