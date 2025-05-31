from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProfileViewSet, AchievementViewSet, ResearchAreaViewSet, ResearchProjectViewSet,
    PublicationViewSet, NewsViewSet, TestimonialViewSet, CareerEventViewSet,
    ResearchCollaborationViewSet, ResourceViewSet, BlogCategoryViewSet,
    BlogPostViewSet, EventViewSet, contact_message, newsletter_subscription,
    dashboard_stats
)

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

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', contact_message, name='contact-message'),
    path('subscribe/', newsletter_subscription, name='newsletter-subscription'),
    path('dashboard-stats/', dashboard_stats, name='dashboard-stats'),
]
