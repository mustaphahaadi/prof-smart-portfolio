const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Profile
  async getProfile() {
    return this.request('/profile/');
  }

  // Research Areas
  async getResearchAreas() {
    return this.request('/research-areas/');
  }

  async getResearchArea(id) {
    return this.request(`/research-areas/${id}/`);
  }

  // Research Projects
  async getResearchProjects(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/research-projects/${query ? `?${query}` : ''}`);
  }

  async getOngoingProjects() {
    return this.request('/research-projects/ongoing/');
  }

  async getCompletedProjects() {
    return this.request('/research-projects/completed/');
  }

  // Publications
  async getPublications(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/publications/${query ? `?${query}` : ''}`);
  }

  async getMostCitedPublications() {
    return this.request('/publications/most-cited/');
  }

  async getPublicationsByYear() {
    return this.request('/publications/by-year/');
  }

  // Blog
  async getBlogCategories() {
    return this.request('/blog-categories/');
  }

  async getBlogPosts(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/blog-posts/${query ? `?${query}` : ''}`);
  }

  async getBlogPost(slug) {
    return this.request(`/blog-posts/${slug}/`);
  }

  async getFeaturedBlogPosts() {
    return this.request('/blog-posts/featured/');
  }

  // Events
  async getEvents(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/events/${query ? `?${query}` : ''}`);
  }

  async getUpcomingEvents() {
    return this.request('/events/upcoming/');
  }

  // IRID
  async getIRIDInfo() {
    return this.request('/irid/info/');
  }

  async getIRIDTeam() {
    return this.request('/irid/team/');
  }

  async getIRIDProjects() {
    return this.request('/irid/projects/');
  }

  async getIRIDPartners() {
    return this.request('/irid/partners/');
  }

  // Statistics
  async getResearchSummary() {
    return this.request('/research-summary/');
  }

  async getIRIDSummary() {
    return this.request('/irid-summary/');
  }

  // Form submissions
  async submitContact(data) {
    return this.request('/contact/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async subscribeNewsletter(email) {
    return this.request('/subscribe/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }
}

export default new ApiService();