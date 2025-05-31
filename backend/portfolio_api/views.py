from rest_framework import viewsets, filters, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from .models import (
    Profile, Achievement, ResearchArea, ResearchProject, Publication,
    News, Testimonial, CareerEvent, ResearchCollaboration, Resource,
    BlogCategory, BlogPost, Event, ContactMessage, NewsletterSubscription
)
from .serializers import (
    ProfileSerializer, AchievementSerializer, ResearchAreaSerializer,
    ResearchProjectSerializer, PublicationSerializer, NewsSerializer,
    TestimonialSerializer, CareerEventSerializer, ResearchCollaborationSerializer,
    ResourceSerializer, BlogCategorySerializer, BlogPostListSerializer,
    BlogPostDetailSerializer, EventSerializer, ContactMessageSerializer,
    NewsletterSubscriptionSerializer
)

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['date']
    ordering_fields = ['date']

class ResearchAreaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResearchArea.objects.all()
    serializer_class = ResearchAreaSerializer

class ResearchProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['research_area']
    ordering_fields = ['start_date']

class PublicationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['year', 'type']
    search_fields = ['title', 'authors', 'journal']
    ordering_fields = ['year', 'citations']

class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['date']

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class CareerEventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CareerEvent.objects.all()
    serializer_class = CareerEventSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['year']

class ResearchCollaborationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResearchCollaboration.objects.all()
    serializer_class = ResearchCollaborationSerializer

class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['type']
    search_fields = ['title', 'description']

class BlogCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['title', 'excerpt', 'content', 'tags']
    ordering_fields = ['date']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return BlogPostDetailSerializer
        return BlogPostListSerializer
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        
        # Get related posts (same category, excluding current post)
        related_posts = BlogPost.objects.filter(category=instance.category).exclude(id=instance.id)[:2]
        related_serializer = BlogPostListSerializer(related_posts, many=True)
        
        data = serializer.data
        data['related_posts'] = related_serializer.data
        
        return Response(data)

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['date']
    ordering_fields = ['date']

@api_view(['POST'])
@permission_classes([AllowAny])
def contact_message(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Your message has been sent successfully.'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def newsletter_subscription(request):
    serializer = NewsletterSubscriptionSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        # Check if already subscribed
        if NewsletterSubscription.objects.filter(email=email).exists():
            return Response({'message': 'You are already subscribed to our newsletter.'}, status=status.HTTP_200_OK)
        
        serializer.save()
        return Response({'message': 'Thank you for subscribing to our newsletter!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_stats(request):
    """API endpoint for admin dashboard statistics"""
    stats = {
        'total_publications': Publication.objects.count(),
        'total_citations': sum(pub.citations for pub in Publication.objects.all()),
        'total_research_projects': ResearchProject.objects.count(),
        'total_blog_posts': BlogPost.objects.count(),
        'unread_messages': ContactMessage.objects.filter(is_read=False).count(),
        'newsletter_subscribers': NewsletterSubscription.objects.filter(is_active=True).count(),
    }
    return Response(stats)
