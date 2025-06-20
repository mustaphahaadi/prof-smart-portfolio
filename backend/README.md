# Professor Portfolio Backend API

This is the backend API for Professor S. A. Sarpong's portfolio website. It provides endpoints for managing research projects, publications, IRID information, blog posts, and more.

## Features

- RESTful API built with Django REST Framework
- Comprehensive models for academic portfolio
- Special endpoints for IRID (Institute of Research, Innovation and Development)
- Blog system with categories and tags
- Publication management with citation metrics
- Research project tracking
- Event management
- Contact form and newsletter subscription

## Tech Stack

- Django 4.2.7
- Django REST Framework 3.14.0
- SQLite (development) / PostgreSQL (production)
- Python 3.8+

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- virtualenv (recommended)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd prof-smart-portfolio/backend
   ```

2. Create and activate a virtual environment:
   ```
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file with your specific settings.

5. Run migrations:
   ```
   python manage.py migrate
   ```

6. Create a superuser:
   ```
   python manage.py createsuperuser
   ```

7. Run the development server:
   ```
   python manage.py runserver
   ```

8. Access the API at http://localhost:8000/api/ and the admin interface at http://localhost:8000/admin/

## API Endpoints

### Main Endpoints

- `/api/profile/` - Professor's profile information
- `/api/research-areas/` - Research areas
- `/api/research-projects/` - Research projects
- `/api/publications/` - Academic publications
- `/api/blog-categories/` - Blog categories
- `/api/blog-posts/` - Blog posts
- `/api/events/` - Events and speaking engagements
- `/api/resources/` - Downloadable resources
- `/api/contact/` - Contact form submission
- `/api/subscribe/` - Newsletter subscription

### IRID Specific Endpoints

- `/api/irid/info/` - IRID institute information
- `/api/irid/team/` - IRID team members
- `/api/irid/projects/` - IRID specific projects
- `/api/irid/achievements/` - IRID achievements
- `/api/irid/partners/` - IRID partner organizations
- `/api/irid/publications/` - IRID attributed publications
- `/api/irid/citation-metrics/` - Citation metrics over time

### Statistics Endpoints

- `/api/research-summary/` - Research statistics summary
- `/api/irid-summary/` - IRID statistics summary
- `/api/dashboard-stats/` - Admin dashboard statistics (requires authentication)

## Special Features

### Research Projects

- Filter by status (ongoing, completed, planned)
- Filter by research area
- Get projects for a specific research area

### Publications

- Filter by year, type, research area
- Search by title, authors, keywords
- Get most cited publications
- View publications by year or type

### Blog Posts

- Filter by category or tag
- Get featured or popular posts
- View count tracking

### Resources

- Download tracking
- Categorization by type

## Deployment

For production deployment:

1. Update the `.env` file with production settings
2. Set `DEBUG=False`
3. Configure a production database (PostgreSQL recommended)
4. Set up static and media file serving
5. Use a WSGI server like Gunicorn
6. Set up Nginx or Apache as a reverse proxy

Example production command:
```
gunicorn portfolio_project.wsgi:application --bind 0.0.0.0:8000
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.