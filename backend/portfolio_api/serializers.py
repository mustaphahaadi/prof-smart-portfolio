from rest_framework import serializers
from .models import (
    Profile, Achievement, ResearchArea, ResearchProject, Publication,
    News, Testimonial, CareerEvent, ResearchCollaboration, Resource,
    BlogCategory, BlogPost, Event, ContactMessage, NewsletterSubscription,
    IRIDInfo, IRIDTeamMember, IRIDProject, IRIDAchievement, IRIDPartner,
    IRIDPublication, CitationMetrics
)

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'

class ResearchAreaSerializer(serializers.ModelSerializer):
    project_count = serializers.SerializerMethodField()
    
    class Meta:
        model = ResearchArea
        fields = '__all__'
    
    def get_project_count(self, obj):
        return obj.projects.count()

class ResearchProjectListSerializer(serializers.ModelSerializer):
    research_area_name = serializers.ReadOnlyField(source='research_area.title')
    status_display = serializers.ReadOnlyField(source='get_status_display')
    
    class Meta:
        model = ResearchProject
        fields = ['id', 'title', 'description', 'image', 'progress', 'status', 
                 'status_display', 'start_date', 'end_date', 'research_area', 
                 'research_area_name', 'funding_source', 'location']

class ResearchProjectDetailSerializer(serializers.ModelSerializer):
    research_area_name = serializers.ReadOnlyField(source='research_area.title')
    status_display = serializers.ReadOnlyField(source='get_status_display')
    
    class Meta:
        model = ResearchProject
        fields = '__all__'

class PublicationListSerializer(serializers.ModelSerializer):
    type_display = serializers.ReadOnlyField(source='get_type_display')
    
    class Meta:
        model = Publication
        fields = ['id', 'title', 'authors', 'journal', 'year', 'type', 
                 'type_display', 'citations', 'doi', 'url']

class PublicationDetailSerializer(serializers.ModelSerializer):
    type_display = serializers.ReadOnlyField(source='get_type_display')
    research_area_name = serializers.ReadOnlyField(source='research_area.title', allow_null=True)
    
    class Meta:
        model = Publication
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class CareerEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerEvent
        fields = '__all__'

class ResearchCollaborationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchCollaboration
        fields = '__all__'

class ResourceSerializer(serializers.ModelSerializer):
    type_display = serializers.ReadOnlyField(source='get_type_display')
    
    class Meta:
        model = Resource
        fields = '__all__'

class BlogCategorySerializer(serializers.ModelSerializer):
    post_count = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogCategory
        fields = '__all__'
    
    def get_post_count(self, obj):
        return obj.posts.count()

class BlogPostListSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'excerpt', 'image', 'category', 
                 'category_name', 'tags', 'date', 'author', 'featured', 'view_count']

class BlogPostDetailSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    related_posts = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogPost
        fields = '__all__'
    
    def get_related_posts(self, obj):
        related = BlogPost.objects.filter(category=obj.category).exclude(id=obj.id)[:3]
        return BlogPostListSerializer(related, many=True).data

class EventListSerializer(serializers.ModelSerializer):
    type_display = serializers.ReadOnlyField(source='get_type_display')
    
    class Meta:
        model = Event
        fields = ['id', 'title', 'type', 'type_display', 'date', 'time', 
                 'location', 'is_virtual', 'image', 'url']

class EventDetailSerializer(serializers.ModelSerializer):
    type_display = serializers.ReadOnlyField(source='get_type_display')
    
    class Meta:
        model = Event
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']

class NewsletterSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscription
        fields = ['email']

# Serializers for IRID models

class IRIDInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = IRIDInfo
        fields = '__all__'

class IRIDTeamMemberSerializer(serializers.ModelSerializer):
    role_display = serializers.ReadOnlyField(source='get_role_display')
    
    class Meta:
        model = IRIDTeamMember
        fields = '__all__'

class IRIDProjectListSerializer(serializers.ModelSerializer):
    status_display = serializers.ReadOnlyField(source='get_status_display')
    team_member_count = serializers.SerializerMethodField()
    
    class Meta:
        model = IRIDProject
        fields = ['id', 'title', 'slug', 'description', 'image', 'status', 
                 'status_display', 'start_date', 'end_date', 'funding_source', 
                 'team_member_count']
    
    def get_team_member_count(self, obj):
        return obj.team_members.count()

class IRIDProjectDetailSerializer(serializers.ModelSerializer):
    status_display = serializers.ReadOnlyField(source='get_status_display')
    team_members = IRIDTeamMemberSerializer(many=True, read_only=True)
    publications = PublicationListSerializer(many=True, read_only=True)
    
    class Meta:
        model = IRIDProject
        fields = '__all__'

class IRIDAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = IRIDAchievement
        fields = '__all__'

class IRIDPartnerSerializer(serializers.ModelSerializer):
    type_display = serializers.ReadOnlyField(source='get_type_display')
    
    class Meta:
        model = IRIDPartner
        fields = '__all__'

class IRIDPublicationSerializer(serializers.ModelSerializer):
    publication_details = PublicationListSerializer(source='publication', read_only=True)
    project_title = serializers.ReadOnlyField(source='project.title', allow_null=True)
    
    class Meta:
        model = IRIDPublication
        fields = '__all__'

class CitationMetricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CitationMetrics
        fields = '__all__'
