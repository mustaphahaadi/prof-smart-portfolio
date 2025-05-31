import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Profile API
export const fetchProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

// Achievements API
export const fetchAchievements = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/achievements/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching achievements:', error);
    throw error;
  }
};

// Research Areas API
export const fetchResearchAreas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/research-areas/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching research areas:', error);
    throw error;
  }
};

// News API
export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Testimonials API
export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

// Career Events API
export const fetchCareerEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/career-events/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching career events:', error);
    throw error;
  }
};

// Blog Posts API
export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog-posts/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

// Research Projects API
export const fetchResearchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/research-projects/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching research projects:', error);
    throw error;
  }
};

// Publications API
export const fetchPublications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/publications/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching publications:', error);
    throw error;
  }
};

// Team Members API
export const fetchTeamMembers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/team-members/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

// Contact Form API
export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact/`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// Newsletter Subscription API
export const subscribeToNewsletter = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/newsletter-subscribe/`, { email });
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
