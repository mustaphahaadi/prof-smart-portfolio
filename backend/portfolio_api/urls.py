from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProfileViewSet, AchievementViewSet, ResearchAreaViewSet, ResearchProjectViewSet,
    PublicationViewSet, NewsViewSet, TestimonialViewSet, CareerEventViewSet,
    ResearchCollaborationViewSet, ResourceViewSet, BlogCategoryViewSet,
    BlogPostViewSet, EventViewSet, contact_message, newsletter_subscription,
    dashboard_stats, IRIDInfoViewSet, IRIDTeamMemberViewSet, IRIDProjectViewSet,
    IRIDAchievementViewSet, IRIDPartnerViewSet, IRIDPublicationViewSet,
    CitationMetricsViewSet, research_summary, irid_summary
)

# Main router for general API endpoints
router = DefaultRouter()
router.register(r'profile', ProfileViewSet)
router.register(r'achievements', AchievementViewSet)
router.register(r'research-areas', ResearchAreaViewSet)
router.register(r'research-projects', ResearchProjectViewSet)
router.register(r'publications', PublicationViewSet)
router.register(r'news', NewsViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'career-events', CareerEventViewSet)
router.register(r'research-collaborations', ResearchCollaborationViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'blog-categories', BlogCategoryViewSet)
router.register(r'blog-posts', BlogPostViewSet)
router.register(r'events', EventViewSet)

# IRID specific router
irid_router = DefaultRouter()
irid_router.register(r'info', IRIDInfoViewSet)
irid_router.register(r'team', IRIDTeamMemberViewSet)
irid_router.register(r'projects', IRIDProjectViewSet)
irid_router.register(r'achievements', IRIDAchievementViewSet)
irid_router.register(r'partners', IRIDPartnerViewSet)
irid_router.register(r'publications', IRIDPublicationViewSet)
irid_router.register(r'citation-metrics', CitationMetricsViewSet)

urlpatterns = [
    # Main API endpoints
    path('', include(router.urls)),
    
    # IRID specific endpoints
    path('irid/', include(irid_router.urls)),
    
    # Form submission endpoints
    path('contact/', contact_message, name='contact-message'),
    path('subscribe/', newsletter_subscription, name='newsletter-subscription'),
    
    # Statistics endpoints
    path('dashboard-stats/', dashboard_stats, name='dashboard-stats'),
    path('research-summary/', research_summary, name='research-summary'),
    path('irid-summary/', irid_summary, name='irid-summary'),
]
