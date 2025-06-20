from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from .models import (
    Profile, ResearchArea, ResearchProject, Publication,
    BlogCategory, BlogPost, IRIDInfo
)

class APIEndpointTests(TestCase):
    """Test suite for API endpoints"""
    
    def setUp(self):
        """Set up test data"""
        self.client = APIClient()
        
        # Create test profile
        self.profile = Profile.objects.create(
            name="Test Professor",
            title="Test Title",
            bio="Test bio",
            email="test@example.com"
        )
        
        # Create test research area
        self.research_area = ResearchArea.objects.create(
            title="Test Research Area",
            description="Test description",
            icon="test-icon"
        )
        
        # Create test research project
        self.research_project = ResearchProject.objects.create(
            title="Test Research Project",
            description="Test description",
            research_area=self.research_area,
            status="ongoing",
            start_date="2023-01-01"
        )
        
        # Create test publication
        self.publication = Publication.objects.create(
            title="Test Publication",
            authors="Test Author",
            journal="Test Journal",
            year=2023,
            type="journal",
            citations=10
        )
        
        # Create test blog category
        self.blog_category = BlogCategory.objects.create(
            name="Test Category",
            slug="test-category"
        )
        
        # Create test blog post
        self.blog_post = BlogPost.objects.create(
            title="Test Blog Post",
            slug="test-blog-post",
            excerpt="Test excerpt",
            content="Test content",
            category=self.blog_category,
            date="2023-01-01",
            author="Test Author"
        )
        
        # Create test IRID info
        self.irid_info = IRIDInfo.objects.create(
            name="Test IRID",
            short_name="TIRID",
            description="Test description",
            mission="Test mission",
            vision="Test vision",
            established_year=2020,
            address="Test address",
            email="test@example.com",
            phone="1234567890"
        )
    
    def test_profile_endpoint(self):
        """Test profile endpoint"""
        url = reverse('profile-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['name'], "Test Professor")
    
    def test_research_area_endpoint(self):
        """Test research area endpoint"""
        url = reverse('researcharea-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['title'], "Test Research Area")
    
    def test_research_project_endpoint(self):
        """Test research project endpoint"""
        url = reverse('researchproject-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['title'], "Test Research Project")
    
    def test_publication_endpoint(self):
        """Test publication endpoint"""
        url = reverse('publication-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['title'], "Test Publication")
    
    def test_blog_category_endpoint(self):
        """Test blog category endpoint"""
        url = reverse('blogcategory-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['name'], "Test Category")
    
    def test_blog_post_endpoint(self):
        """Test blog post endpoint"""
        url = reverse('blogpost-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['title'], "Test Blog Post")
    
    def test_irid_info_endpoint(self):
        """Test IRID info endpoint"""
        url = reverse('iridinfo-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['name'], "Test IRID")
    
    def test_contact_endpoint(self):
        """Test contact form submission"""
        url = reverse('contact-message')
        data = {
            'name': 'Test User',
            'email': 'test@example.com',
            'subject': 'Test Subject',
            'message': 'Test message'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['message'], 'Your message has been sent successfully.')
    
    def test_newsletter_endpoint(self):
        """Test newsletter subscription"""
        url = reverse('newsletter-subscription')
        data = {
            'email': 'test@example.com'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['message'], 'Thank you for subscribing to our newsletter!')
        
        # Test duplicate subscription
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'You are already subscribed to our newsletter.')