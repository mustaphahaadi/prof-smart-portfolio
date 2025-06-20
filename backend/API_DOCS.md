# API Documentation

## Base URL
`/api/`

## Authentication
- Most endpoints are read-only and don't require authentication
- Admin dashboard statistics require authentication
- Use Token Authentication for protected endpoints

## General Endpoints

### Profile
- `GET /api/profile/` - Get professor's profile information

### Research Areas
- `GET /api/research-areas/` - List all research areas
- `GET /api/research-areas/{id}/` - Get specific research area
- `GET /api/research-areas/{id}/projects/` - Get projects for a research area
- `GET /api/research-areas/{id}/publications/` - Get publications for a research area

### Research Projects
- `GET /api/research-projects/` - List all research projects
- `GET /api/research-projects/{id}/` - Get specific research project
- `GET /api/research-projects/ongoing/` - Get ongoing projects
- `GET /api/research-projects/completed/` - Get completed projects

### Publications
- `GET /api/publications/` - List all publications
- `GET /api/publications/{id}/` - Get specific publication
- `GET /api/publications/by-year/` - Get publications grouped by year
- `GET /api/publications/by-type/` - Get publications grouped by type
- `GET /api/publications/most-cited/` - Get most cited publications

### Blog
- `GET /api/blog-categories/` - List all blog categories
- `GET /api/blog-categories/{slug}/` - Get specific blog category
- `GET /api/blog-categories/{slug}/posts/` - Get posts for a category
- `GET /api/blog-posts/` - List all blog posts
- `GET /api/blog-posts/{slug}/` - Get specific blog post
- `GET /api/blog-posts/featured/` - Get featured blog posts
- `GET /api/blog-posts/popular/` - Get popular blog posts
- `GET /api/blog-posts/by-tag/?tag=example` - Get posts by tag

### Events
- `GET /api/events/` - List all events
- `GET /api/events/{id}/` - Get specific event
- `GET /api/events/upcoming/` - Get upcoming events
- `GET /api/events/past/` - Get past events

### Resources
- `GET /api/resources/` - List all resources
- `GET /api/resources/{id}/` - Get specific resource
- `GET /api/resources/{id}/download/` - Track download and get download URL

### Other
- `GET /api/achievements/` - List all achievements
- `GET /api/testimonials/` - List all testimonials
- `GET /api/career-events/` - List all career events
- `GET /api/research-collaborations/` - List all research collaborations
- `GET /api/news/` - List all news items

## IRID Specific Endpoints

### IRID Info
- `GET /api/irid/info/` - Get IRID institute information

### IRID Team
- `GET /api/irid/team/` - List all IRID team members
- `GET /api/irid/team/{id}/` - Get specific team member

### IRID Projects
- `GET /api/irid/projects/` - List all IRID projects
- `GET /api/irid/projects/{slug}/` - Get specific IRID project
- `GET /api/irid/projects/ongoing/` - Get ongoing IRID projects
- `GET /api/irid/projects/completed/` - Get completed IRID projects

### IRID Other
- `GET /api/irid/achievements/` - List all IRID achievements
- `GET /api/irid/partners/` - List all IRID partners
- `GET /api/irid/publications/` - List all IRID publications
- `GET /api/irid/publications/featured/` - Get featured IRID publications
- `GET /api/irid/citation-metrics/` - Get citation metrics over time

## Form Submission Endpoints

### Contact Form
- `POST /api/contact/` - Submit contact form
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Research Inquiry",
      "message": "I would like to discuss your research on..."
    }
    ```

### Newsletter Subscription
- `POST /api/subscribe/` - Subscribe to newsletter
  - Request body:
    ```json
    {
      "email": "john@example.com"
    }
    ```

## Statistics Endpoints

### Research Summary
- `GET /api/research-summary/` - Get research statistics summary

### IRID Summary
- `GET /api/irid-summary/` - Get IRID statistics summary

### Dashboard Stats (Authenticated)
- `GET /api/dashboard-stats/` - Get admin dashboard statistics

## Query Parameters

Most list endpoints support the following query parameters:

- `page`: Page number for pagination
- `page_size`: Number of items per page
- `search`: Search term for text search
- `ordering`: Field to order by (prefix with `-` for descending)

Example: `/api/publications/?ordering=-year&page=2&page_size=10`

## Filtering

Many endpoints support filtering:

- Publications: `?year=2023&type=journal`
- Research Projects: `?research_area=1&status=ongoing`
- Blog Posts: `?category=1&featured=true`
- Events: `?type=conference&is_virtual=true`

## Response Format

Successful responses follow this format:
```json
{
  "count": 100,
  "next": "http://example.com/api/resource/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "field1": "value1",
      "field2": "value2"
    },
    ...
  ]
}
```

## Error Handling

Errors follow standard HTTP status codes:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

Error response format:
```json
{
  "detail": "Error message"
}
```

or field-specific errors:
```json
{
  "field_name": [
    "Error message"
  ]
}
```