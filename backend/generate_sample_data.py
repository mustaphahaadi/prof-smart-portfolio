#!/usr/bin/env python
"""
Script to generate sample data for the portfolio API.
Run this after migrations to populate the database with test data.
"""

import os
import django
import random
from datetime import date, timedelta
from django.utils.text import slugify

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_project.settings')
django.setup()

# Import models after Django setup
from portfolio_api.models import (
    Profile, ResearchArea, ResearchProject, Publication, BlogCategory, 
    BlogPost, Event, IRIDInfo, IRIDTeamMember, IRIDProject, IRIDPartner,
    CitationMetrics
)

def create_profile():
    """Create professor profile"""
    Profile.objects.get_or_create(
        name="Prof. S. A. Sarpong",
        defaults={
            'title': "Senior Research Fellow & Director of IRID",
            'bio': "Professor S. A. Sarpong is a Senior Research Fellow and Director of the Institute of Research, Innovation and Development (IRID) at Kumasi Technical University. With over 20 years of experience in research and academia, he specializes in sustainable development, technology integration, and innovation ecosystems in West Africa.",
            'email': "prof.sarpong@kstu.edu.gh",
            'phone': "+233 12 345 6789",
            'office_location': "IRID Building, Kumasi Technical University, Kumasi, Ghana"
        }
    )
    print("✓ Profile created")

def create_research_areas():
    """Create research areas"""
    areas = [
        {
            'title': "Sustainable Development",
            'description': "Research on sustainable practices, renewable energy, and environmental conservation strategies for developing regions.",
            'icon': "leaf"
        },
        {
            'title': "Technology Integration",
            'description': "Investigating effective methods for integrating modern technology into educational systems and industrial processes in Ghana.",
            'icon': "cpu"
        },
        {
            'title': "Innovation & Entrepreneurship",
            'description': "Developing frameworks for fostering innovation and entrepreneurship in academic and industrial settings in West Africa.",
            'icon': "lightbulb"
        },
        {
            'title': "Higher Education Policy",
            'description': "Analyzing and developing policy frameworks for higher education institutions in Ghana, with a focus on technical universities.",
            'icon': "book"
        }
    ]
    
    created_areas = []
    for area in areas:
        obj, created = ResearchArea.objects.get_or_create(
            title=area['title'],
            defaults={
                'description': area['description'],
                'icon': area['icon']
            }
        )
        created_areas.append(obj)
    
    print(f"✓ {len(created_areas)} Research areas created")
    return created_areas

def create_research_projects(areas):
    """Create research projects"""
    projects = [
        {
            'title': "Sustainable Energy Solutions for Rural Ghana",
            'description': "Investigating cost-effective renewable energy implementations for rural communities in Ghana, focusing on solar and biomass technologies.",
            'research_area': areas[0],  # Sustainable Development
            'status': 'ongoing',
            'progress': 65,
            'start_date': date.today() - timedelta(days=365),
            'funding_source': "Ghana Education Trust Fund (GETFund)",
            'location': "Northern Ghana"
        },
        {
            'title': "Technology Integration in Technical Education",
            'description': "Developing frameworks for effective integration of modern technologies in technical education curricula across Ghanaian universities.",
            'research_area': areas[1],  # Technology Integration
            'status': 'ongoing',
            'progress': 80,
            'start_date': date.today() - timedelta(days=547),
            'funding_source': "African Development Bank",
            'location': "Kumasi, Ghana"
        },
        {
            'title': "Innovation Ecosystems in West African Universities",
            'description': "Mapping and analyzing innovation ecosystems in West African universities to identify best practices and opportunities for improvement.",
            'research_area': areas[2],  # Innovation & Entrepreneurship
            'status': 'ongoing',
            'progress': 40,
            'start_date': date.today() - timedelta(days=182),
            'funding_source': "World Bank Africa Centers of Excellence",
            'location': "Multiple West African Countries"
        },
        {
            'title': "Entrepreneurship Development in Technical Universities",
            'description': "Assessed the impact of entrepreneurship education on graduate outcomes in Ghanaian technical universities.",
            'research_area': areas[2],  # Innovation & Entrepreneurship
            'status': 'completed',
            'progress': 100,
            'start_date': date.today() - timedelta(days=1095),
            'end_date': date.today() - timedelta(days=365),
            'funding_source': "Ghana Council for Technical Education",
            'location': "Ghana"
        },
        {
            'title': "Higher Education Policy Framework for Ghana",
            'description': "Developing comprehensive policy recommendations for technical universities in Ghana to enhance their contribution to national development.",
            'research_area': areas[3],  # Higher Education Policy
            'status': 'planned',
            'progress': 0,
            'start_date': date.today() + timedelta(days=60),
            'funding_source': "Ministry of Education, Ghana",
            'location': "Ghana"
        }
    ]
    
    created_projects = []
    for project in projects:
        obj, created = ResearchProject.objects.get_or_create(
            title=project['title'],
            defaults={
                'description': project['description'],
                'research_area': project['research_area'],
                'status': project['status'],
                'progress': project['progress'],
                'start_date': project['start_date'],
                'end_date': project.get('end_date'),
                'funding_source': project['funding_source'],
                'location': project['location'],
                'collaborators': ["University of Ghana", "MIT Energy Initiative"] if 'Energy' in project['title'] else ["Kwame Nkrumah University", "Technical University of Kenya"]
            }
        )
        created_projects.append(obj)
    
    print(f"✓ {len(created_projects)} Research projects created")
    return created_projects

def create_publications(areas):
    """Create publications"""
    publications = [
        {
            'title': "Sustainable Energy Solutions for Rural Communities in Ghana: A Comprehensive Review",
            'authors': "Sarpong, S. A., Mensah, K., & Johnson, R.",
            'journal': "Renewable and Sustainable Energy Reviews",
            'year': 2023,
            'type': "journal",
            'citations': 12,
            'doi': "10.1016/j.rser.2023.12345",
            'research_area': areas[0],  # Sustainable Development
            'abstract': "This paper reviews sustainable energy solutions for rural communities in Ghana, focusing on solar, biomass, and micro-hydro technologies. The study evaluates implementation challenges and success factors across multiple case studies."
        },
        {
            'title': "Technology Integration in Technical Universities: A Framework for Curriculum Development",
            'authors': "Sarpong, S. A., & Osei-Tutu, E.",
            'journal': "International Journal of Educational Technology in Higher Education",
            'year': 2022,
            'type': "journal",
            'citations': 8,
            'doi': "10.1186/s41239-022-00123-x",
            'research_area': areas[1],  # Technology Integration
            'abstract': "This study proposes a framework for integrating modern technologies into technical university curricula in developing countries, with specific focus on Ghana's technical universities."
        },
        {
            'title': "Innovation Ecosystems in West African Universities: Challenges and Opportunities",
            'authors': "Sarpong, S. A., Addo, P. K., & Williams, M.",
            'conference': "International Conference on Innovation and Entrepreneurship",
            'year': 2023,
            'type': "conference",
            'citations': 5,
            'research_area': areas[2],  # Innovation & Entrepreneurship
            'abstract': "This paper examines the current state of innovation ecosystems in West African universities, identifying key challenges and opportunities for development."
        },
        {
            'title': "Entrepreneurship Education in Technical Universities: Impact on Graduate Outcomes",
            'authors': "Sarpong, S. A., Boateng, R., & Smith, J.",
            'journal': "Journal of Education and Work",
            'year': 2021,
            'type': "journal",
            'citations': 15,
            'doi': "10.1080/13639080.2021.123456",
            'research_area': areas[2],  # Innovation & Entrepreneurship
            'abstract': "This longitudinal study assesses the impact of entrepreneurship education on graduate outcomes in Ghanaian technical universities, tracking employment, venture creation, and innovation metrics."
        },
        {
            'title': "Higher Education Policy and National Development: The Case of Technical Universities in Ghana",
            'authors': "Sarpong, S. A.",
            'book': "Higher Education in Africa: Challenges and Solutions",
            'publisher': "Routledge",
            'year': 2022,
            'type': "chapter",
            'citations': 7,
            'research_area': areas[3],  # Higher Education Policy
            'abstract': "This book chapter examines the role of technical universities in Ghana's national development agenda, analyzing policy frameworks and implementation challenges."
        }
    ]
    
    created_publications = []
    for pub in publications:
        obj, created = Publication.objects.get_or_create(
            title=pub['title'],
            defaults={
                'authors': pub['authors'],
                'journal': pub.get('journal', ''),
                'conference': pub.get('conference', ''),
                'book': pub.get('book', ''),
                'publisher': pub.get('publisher', ''),
                'year': pub['year'],
                'type': pub['type'],
                'citations': pub['citations'],
                'doi': pub.get('doi', ''),
                'research_area': pub['research_area'],
                'abstract': pub['abstract'],
                'keywords': ["sustainable development", "Ghana"] if 'Sustainable' in pub['title'] else ["education", "technology", "innovation"]
            }
        )
        created_publications.append(obj)
    
    print(f"✓ {len(created_publications)} Publications created")
    return created_publications

def create_blog_content():
    """Create blog categories and posts"""
    # Create categories
    categories = [
        {"name": "Research", "slug": "research"},
        {"name": "Education", "slug": "education"},
        {"name": "Innovation", "slug": "innovation"},
        {"name": "Sustainability", "slug": "sustainability"}
    ]
    
    created_categories = []
    for cat in categories:
        obj, created = BlogCategory.objects.get_or_create(
            name=cat['name'],
            defaults={'slug': cat['slug']}
        )
        created_categories.append(obj)
    
    # Create blog posts
    posts = [
        {
            'title': "Sustainable Energy Solutions for Rural Communities in Ghana",
            'excerpt': "Exploring practical renewable energy implementations that can transform rural communities in Ghana and address energy poverty challenges.",
            'category': created_categories[3],  # Sustainability
            'date': date.today() - timedelta(days=15),
            'author': "Prof. S. A. Sarpong",
            'tags': ["Renewable Energy", "Rural Development", "Sustainability"],
            'featured': True
        },
        {
            'title': "Transforming Technical Education in West Africa",
            'excerpt': "Discussing the challenges and opportunities in modernizing technical education curricula to meet industry demands and global standards.",
            'category': created_categories[1],  # Education
            'date': date.today() - timedelta(days=45),
            'author': "Prof. S. A. Sarpong",
            'tags': ["Education", "Curriculum Development", "Technical Skills"]
        },
        {
            'title': "Building Innovation Ecosystems in Ghanaian Universities",
            'excerpt': "Analyzing the key components needed to foster innovation and entrepreneurship in Ghanaian higher education institutions.",
            'category': created_categories[2],  # Innovation
            'date': date.today() - timedelta(days=75),
            'author': "Prof. S. A. Sarpong",
            'tags': ["Innovation", "Entrepreneurship", "Higher Education"],
            'featured': True
        }
    ]
    
    created_posts = []
    for post in posts:
        slug = slugify(post['title'])
        obj, created = BlogPost.objects.get_or_create(
            title=post['title'],
            defaults={
                'slug': slug,
                'excerpt': post['excerpt'],
                'content': f"<p>{post['excerpt']}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                'category': post['category'],
                'date': post['date'],
                'author': post['author'],
                'tags': post['tags'],
                'featured': post.get('featured', False),
                'view_count': random.randint(10, 100)
            }
        )
        created_posts.append(obj)
    
    print(f"✓ {len(created_categories)} Blog categories created")
    print(f"✓ {len(created_posts)} Blog posts created")

def create_events():
    """Create events"""
    events = [
        {
            'title': "International Conference on Sustainable Development",
            'type': "conference",
            'date': date.today() + timedelta(days=45),
            'time': "09:00 - 17:00",
            'location': "Accra International Conference Center, Ghana",
            'description': "Professor Sarpong will be presenting his research on sustainable energy solutions for rural communities in Ghana.",
            'organizer': "United Nations Development Programme"
        },
        {
            'title': "Workshop on Technology Integration in Education",
            'type': "workshop",
            'date': date.today() + timedelta(days=15),
            'time': "10:00 - 15:00",
            'location': "Kumasi Technical University, Ghana",
            'description': "A hands-on workshop for educators on integrating technology into technical education curricula.",
            'organizer': "Kumasi Technical University"
        },
        {
            'title': "Guest Lecture: Innovation Ecosystems",
            'type': "lecture",
            'date': date.today() - timedelta(days=10),
            'time': "14:00 - 16:00",
            'location': "University of Ghana, Legon",
            'description': "Professor Sarpong delivered a guest lecture on building effective innovation ecosystems in West African universities.",
            'organizer': "University of Ghana"
        }
    ]
    
    created_events = []
    for event in events:
        obj, created = Event.objects.get_or_create(
            title=event['title'],
            date=event['date'],
            defaults={
                'type': event['type'],
                'time': event['time'],
                'location': event['location'],
                'description': event['description'],
                'organizer': event['organizer'],
                'is_virtual': False
            }
        )
        created_events.append(obj)
    
    print(f"✓ {len(created_events)} Events created")

def create_irid_data():
    """Create IRID specific data"""
    # Create IRID Info
    IRIDInfo.objects.get_or_create(
        name="Institute of Research, Innovation and Development",
        defaults={
            'short_name': "IRID",
            'description': "The Institute of Research, Innovation and Development (IRID) at Kumasi Technical University is a center of excellence dedicated to fostering research, innovation, and development initiatives that address local and global challenges.",
            'mission': "To advance knowledge through innovative research, foster technological development, and provide solutions to societal challenges through collaborative partnerships and interdisciplinary approaches.",
            'vision': "To be a leading research and innovation institute in Africa, recognized globally for excellence in applied research, technological innovation, and sustainable development solutions.",
            'established_year': 2015,
            'address': "Kumasi Technical University, P.O. Box 854, Kumasi, Ghana",
            'email': "irid@kstu.edu.gh",
            'phone': "+233 32 209 1100"
        }
    )
    
    # Create IRID Team Members
    team_members = [
        {
            'name': "Prof. S. A. Sarpong",
            'title': "Director",
            'role': "director",
            'bio': "Professor Sarpong is the founding Director of IRID with over 20 years of experience in research and academia.",
            'email': "prof.sarpong@kstu.edu.gh",
            'order': 1
        },
        {
            'name': "Dr. Kwame Mensah",
            'title': "Deputy Director",
            'role': "deputy_director",
            'bio': "Dr. Mensah oversees research operations and strategic partnerships at IRID.",
            'email': "k.mensah@kstu.edu.gh",
            'order': 2
        },
        {
            'name': "Dr. Abena Osei",
            'title': "Senior Researcher",
            'role': "researcher",
            'bio': "Dr. Osei leads the sustainable development research cluster at IRID.",
            'email': "a.osei@kstu.edu.gh",
            'order': 3
        }
    ]
    
    created_team_members = []
    for member in team_members:
        obj, created = IRIDTeamMember.objects.get_or_create(
            name=member['name'],
            defaults={
                'title': member['title'],
                'role': member['role'],
                'bio': member['bio'],
                'email': member['email'],
                'order': member['order']
            }
        )
        created_team_members.append(obj)
    
    # Create IRID Projects
    projects = [
        {
            'title': "Renewable Energy Hub for West Africa",
            'description': "Establishing a regional hub for renewable energy research, training, and technology transfer in West Africa.",
            'status': "ongoing",
            'start_date': date.today() - timedelta(days=365),
            'funding_source': "African Development Bank",
            'funding_amount': 250000.00
        },
        {
            'title': "Innovation Capacity Building Program",
            'description': "Developing innovation capacity in Ghanaian technical universities through training, infrastructure, and policy development.",
            'status': "ongoing",
            'start_date': date.today() - timedelta(days=547),
            'funding_source': "World Bank",
            'funding_amount': 175000.00
        }
    ]
    
    created_projects = []
    for project in projects:
        slug = slugify(project['title'])
        obj, created = IRIDProject.objects.get_or_create(
            title=project['title'],
            defaults={
                'slug': slug,
                'description': project['description'],
                'status': project['status'],
                'start_date': project['start_date'],
                'funding_source': project['funding_source'],
                'funding_amount': project['funding_amount'],
                'external_collaborators': ["University of Ghana", "MIT Energy Initiative"]
            }
        )
        # Add team members to project
        if created:
            for member in created_team_members:
                obj.team_members.add(member)
        
        created_projects.append(obj)
    
    # Create IRID Partners
    partners = [
        {
            'name': "University of Ghana",
            'type': "academic",
            'description': "Collaborative research on sustainable development and innovation ecosystems.",
            'partnership_start': date.today() - timedelta(days=730)
        },
        {
            'name': "Ghana Renewable Energy Association",
            'type': "industry",
            'description': "Industry partnership for renewable energy projects and technology transfer.",
            'partnership_start': date.today() - timedelta(days=365)
        },
        {
            'name': "Ministry of Education, Ghana",
            'type': "government",
            'description': "Policy development and implementation for technical education.",
            'partnership_start': date.today() - timedelta(days=547)
        }
    ]
    
    created_partners = []
    for partner in partners:
        obj, created = IRIDPartner.objects.get_or_create(
            name=partner['name'],
            defaults={
                'type': partner['type'],
                'description': partner['description'],
                'partnership_start': partner['partnership_start']
            }
        )
        created_partners.append(obj)
    
    # Create Citation Metrics
    metrics = [
        {'year': 2020, 'total_citations': 120, 'h_index': 8, 'i10_index': 5},
        {'year': 2021, 'total_citations': 180, 'h_index': 10, 'i10_index': 7},
        {'year': 2022, 'total_citations': 250, 'h_index': 12, 'i10_index': 9},
        {'year': 2023, 'total_citations': 320, 'h_index': 15, 'i10_index': 12}
    ]
    
    for metric in metrics:
        CitationMetrics.objects.get_or_create(
            year=metric['year'],
            defaults={
                'total_citations': metric['total_citations'],
                'h_index': metric['h_index'],
                'i10_index': metric['i10_index']
            }
        )
    
    print("✓ IRID Info created")
    print(f"✓ {len(created_team_members)} IRID team members created")
    print(f"✓ {len(created_projects)} IRID projects created")
    print(f"✓ {len(created_partners)} IRID partners created")
    print(f"✓ {len(metrics)} Citation metrics records created")

def main():
    """Main function to generate all sample data"""
    print("Generating sample data...")
    create_profile()
    areas = create_research_areas()
    create_research_projects(areas)
    create_publications(areas)
    create_blog_content()
    create_events()
    create_irid_data()
    print("\nSample data generation complete!")

if __name__ == "__main__":
    main()