from rest_framework import viewsets, filters, status
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Count, Sum
from django.shortcuts import get_object_or_404
from .models import (
    Profile, Achievement, ResearchArea, ResearchProject, Publication,
    News, Testimonial, CareerEvent, ResearchCollaboration, Resource,
    BlogCategory, BlogPost, Event, ContactMessage, NewsletterSubscription,
    IRIDInfo, IRIDTeamMember, IRIDProject, IRIDAchievement, IRIDPartner,
    IRIDPublication, CitationMetrics
)
from .serializers import (
    ProfileSerializer, AchievementSerializer, ResearchAreaSerializer,
    ResearchProjectListSerializer, ResearchProjectDetailSerializer,
    PublicationListSerializer, PublicationDetailSerializer, NewsSerializer,
    TestimonialSerializer, CareerEventSerializer, ResearchCollaborationSerializer,
    ResourceSerializer, BlogCategorySerializer, BlogPostListSerializer,
    BlogPostDetailSerializer, EventListSerializer, EventDetailSerializer,
    ContactMessageSerializer, NewsletterSubscriptionSerializer,
    IRIDInfoSerializer, IRIDTeamMemberSerializer, IRIDProjectListSerializer,
    IRIDProjectDetailSerializer, IRIDAchievementSerializer, IRIDPartnerSerializer,
    IRIDPublicationSerializer, CitationMetricsSerializer
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
    
    @action(detail=True, methods=['get'])
    def projects(self, request, pk=None):
        """Get projects for a specific research area"""
        research_area = self.get_object()
        projects = research_area.projects.all()
        serializer = ResearchProjectListSerializer(projects, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def publications(self, request, pk=None):
        """Get publications for a specific research area"""
        research_area = self.get_object()
        publications = Publication.objects.filter(research_area=research_area)
        serializer = PublicationListSerializer(publications, many=True)
        return Response(serializer.data)

class ResearchProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResearchProject.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['research_area', 'status']
    search_fields = ['title', 'description', 'funding_source', 'location']
    ordering_fields = ['start_date', 'end_date', 'progress']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ResearchProjectDetailSerializer
        return ResearchProjectListSerializer
    
    @action(detail=False, methods=['get'])
    def ongoing(self, request):
        """Get ongoing research projects"""
        projects = ResearchProject.objects.filter(status='ongoing')
        serializer = ResearchProjectListSerializer(projects, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def completed(self, request):
        """Get completed research projects"""
        projects = ResearchProject.objects.filter(status='completed')
        serializer = ResearchProjectListSerializer(projects, many=True)
        return Response(serializer.data)

class PublicationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Publication.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['year', 'type', 'research_area']
    search_fields = ['title', 'authors', 'journal', 'abstract', 'keywords']
    ordering_fields = ['year', 'citations']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PublicationDetailSerializer
        return PublicationListSerializer
    
    @action(detail=False, methods=['get'])
    def by_year(self, request):
        """Get publications grouped by year"""
        years = Publication.objects.values('year').annotate(count=Count('id')).order_by('-year')
        return Response(years)
    
    @action(detail=False, methods=['get'])
    def by_type(self, request):
        """Get publications grouped by type"""
        types = Publication.objects.values('type').annotate(count=Count('id')).order_by('type')
        return Response(types)
    
    @action(detail=False, methods=['get'])
    def most_cited(self, request):
        """Get most cited publications"""
        publications = Publication.objects.order_by('-citations')[:10]
        serializer = PublicationListSerializer(publications, many=True)
        return Response(serializer.data)

class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content']
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
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['country']
    search_fields = ['institution', 'country', 'project', 'description']

class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['type']
    search_fields = ['title', 'description']
    
    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        """Track resource downloads"""
        resource = self.get_object()
        resource.download_count += 1
        resource.save()
        return Response({'url': request.build_absolute_uri(resource.file.url)})

class BlogCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    lookup_field = 'slug'
    
    @action(detail=True, methods=['get'])
    def posts(self, request, slug=None):
        """Get posts for a specific category"""
        category = self.get_object()
        posts = category.posts.all()
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'featured']
    search_fields = ['title', 'excerpt', 'content', 'tags']
    ordering_fields = ['date', 'view_count']
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return BlogPostDetailSerializer
        return BlogPostListSerializer
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        # Increment view count
        instance.view_count += 1
        instance.save()
        
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured blog posts"""
        posts = BlogPost.objects.filter(featured=True)
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def popular(self, request):
        """Get popular blog posts based on view count"""
        posts = BlogPost.objects.order_by('-view_count')[:5]
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_tag(self, request):
        """Get posts filtered by tag"""
        tag = request.query_params.get('tag', None)
        if tag:
            # Filter posts that have the tag in their tags array
            posts = BlogPost.objects.filter(tags__contains=[tag])
            serializer = BlogPostListSerializer(posts, many=True)
            return Response(serializer.data)
        return Response({"error": "Tag parameter is required"}, status=status.HTTP_400_BAD_REQUEST)

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['date', 'type', 'is_virtual']
    search_fields = ['title', 'description', 'location', 'organizer']
    ordering_fields = ['date', 'time']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return EventDetailSerializer
        return EventListSerializer
    
    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming events"""
        from django.utils import timezone
        today = timezone.now().date()
        events = Event.objects.filter(date__gte=today).order_by('date', 'time')
        serializer = EventListSerializer(events, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def past(self, request):
        """Get past events"""
        from django.utils import timezone
        today = timezone.now().date()
        events = Event.objects.filter(date__lt=today).order_by('-date', 'time')
        serializer = EventListSerializer(events, many=True)
        return Response(serializer.data)

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
        'total_events': Event.objects.count(),
        'total_resources': Resource.objects.count(),
        'resource_downloads': Resource.objects.aggregate(total=Sum('download_count'))['total'] or 0,
        'blog_views': BlogPost.objects.aggregate(total=Sum('view_count'))['total'] or 0,
    }
    return Response(stats)

# IRID ViewSets

class IRIDInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IRIDInfo.objects.all()
    serializer_class = IRIDInfoSerializer

class IRIDTeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IRIDTeamMember.objects.all()
    serializer_class = IRIDTeamMemberSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['role']
    ordering_fields = ['order', 'name']

class IRIDProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IRIDProject.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['status']
    search_fields = ['title', 'description', 'funding_source']
    ordering_fields = ['start_date', 'end_date']
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return IRIDProjectDetailSerializer
        return IRIDProjectListSerializer
    
    @action(detail=False, methods=['get'])
    def ongoing(self, request):
        """Get ongoing IRID projects"""
        projects = IRIDProject.objects.filter(status='ongoing')
        serializer = IRIDProjectListSerializer(projects, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def completed(self, request):
        """Get completed IRID projects"""
        projects = IRIDProject.objects.filter(status='completed')
        serializer = IRIDProjectListSerializer(projects, many=True)
        return Response(serializer.data)

class IRIDAchievementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IRIDAchievement.objects.all()
    serializer_class = IRIDAchievementSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['date']

class IRIDPartnerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IRIDPartner.objects.all()
    serializer_class = IRIDPartnerSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['type']
    search_fields = ['name', 'description']

class IRIDPublicationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IRIDPublication.objects.all()
    serializer_class = IRIDPublicationSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['is_featured', 'project']
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured IRID publications"""
        publications = IRIDPublication.objects.filter(is_featured=True)
        serializer = IRIDPublicationSerializer(publications, many=True)
        return Response(serializer.data)

class CitationMetricsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CitationMetrics.objects.all()
    serializer_class = CitationMetricsSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['year']

@api_view(['GET'])
def research_summary(request):
    """API endpoint for research summary statistics"""
    summary = {
        'total_publications': Publication.objects.count(),
        'total_citations': sum(pub.citations for pub in Publication.objects.all()),
        'h_index': CitationMetrics.objects.order_by('-year').first().h_index if CitationMetrics.objects.exists() else 0,
        'research_areas': ResearchArea.objects.count(),
        'ongoing_projects': ResearchProject.objects.filter(status='ongoing').count(),
        'completed_projects': ResearchProject.objects.filter(status='completed').count(),
        'collaborations': ResearchCollaboration.objects.count(),
        'publications_by_type': Publication.objects.values('type').annotate(count=Count('id')),
        'publications_by_year': Publication.objects.values('year').annotate(count=Count('id')).order_by('-year')[:10],
    }
    return Response(summary)

@api_view(['GET'])
def irid_summary(request):
    """API endpoint for IRID summary statistics"""
    summary = {
        'team_members': IRIDTeamMember.objects.count(),
        'ongoing_projects': IRIDProject.objects.filter(status='ongoing').count(),
        'completed_projects': IRIDProject.objects.filter(status='completed').count(),
        'achievements': IRIDAchievement.objects.count(),
        'partners': IRIDPartner.objects.count(),
        'publications': IRIDPublication.objects.count(),
        'partners_by_type': IRIDPartner.objects.values('type').annotate(count=Count('id')),
    }
    
    # Get IRID info if available
    if IRIDInfo.objects.exists():
        info = IRIDInfo.objects.first()
        summary['info'] = {
            'name': info.name,
            'short_name': info.short_name,
            'established_year': info.established_year,
            'email': info.email,
            'phone': info.phone,
        }
    
    return Response(summary)
