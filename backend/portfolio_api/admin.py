from django.contrib import admin
from .models import (
    Profile, Achievement, ResearchArea, ResearchProject, Publication,
    News, Testimonial, CareerEvent, ResearchCollaboration, Resource,
    BlogCategory, BlogPost, Event, ContactMessage, NewsletterSubscription,
    IRIDInfo, IRIDTeamMember, IRIDProject, IRIDAchievement, IRIDPartner,
    IRIDPublication, CitationMetrics
)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email')

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'icon')
    list_filter = ('date',)
    search_fields = ('title', 'description')

@admin.register(ResearchArea)
class ResearchAreaAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon')
    search_fields = ('title', 'description')

@admin.register(ResearchProject)
class ResearchProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'research_area', 'status', 'progress', 'start_date', 'end_date')
    list_filter = ('research_area', 'status', 'start_date')
    search_fields = ('title', 'description', 'funding_source', 'location')

@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ('title', 'authors', 'journal', 'year', 'type', 'citations')
    list_filter = ('year', 'type', 'research_area')
    search_fields = ('title', 'authors', 'journal', 'abstract')
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'authors', 'year', 'type', 'abstract', 'keywords')
        }),
        ('Publication Details', {
            'fields': ('journal', 'conference', 'book', 'publisher', 'volume', 'issue', 'pages')
        }),
        ('Metrics & Links', {
            'fields': ('citations', 'doi', 'url', 'pdf_file', 'research_area')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    readonly_fields = ('created_at', 'updated_at')

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')
    list_filter = ('date',)
    search_fields = ('title', 'content', 'excerpt')

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'institution')
    search_fields = ('name', 'institution', 'quote')

@admin.register(CareerEvent)
class CareerEventAdmin(admin.ModelAdmin):
    list_display = ('year', 'title', 'institution')
    list_filter = ('year',)
    search_fields = ('title', 'institution', 'description')

@admin.register(ResearchCollaboration)
class ResearchCollaborationAdmin(admin.ModelAdmin):
    list_display = ('institution', 'country', 'project', 'start_date', 'end_date')
    list_filter = ('country', 'start_date')
    search_fields = ('institution', 'country', 'project', 'description')

@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'size', 'download_count')
    list_filter = ('type',)
    search_fields = ('title', 'description')
    readonly_fields = ('download_count',)

@admin.register(BlogCategory)
class BlogCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date', 'author', 'featured', 'view_count')
    list_filter = ('category', 'date', 'featured')
    search_fields = ('title', 'excerpt', 'content')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('view_count',)

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'date', 'time', 'location', 'is_virtual')
    list_filter = ('date', 'type', 'is_virtual')
    search_fields = ('title', 'description', 'location', 'organizer')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    readonly_fields = ('name', 'email', 'subject', 'message', 'created_at')
    
    def has_add_permission(self, request):
        return False
    
    def save_model(self, request, obj, form, change):
        if 'is_read' in form.changed_data and obj.is_read:
            # Mark as read when admin views it
            obj.is_read = True
        super().save_model(request, obj, form, change)

@admin.register(NewsletterSubscription)
class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_active', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('email',)

# IRID Admin Classes

@admin.register(IRIDInfo)
class IRIDInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'established_year', 'email')
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'short_name', 'logo', 'established_year')
        }),
        ('Description', {
            'fields': ('description', 'mission', 'vision')
        }),
        ('Contact Information', {
            'fields': ('address', 'email', 'phone', 'website')
        }),
    )

@admin.register(IRIDTeamMember)
class IRIDTeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'role', 'email', 'order')
    list_filter = ('role',)
    search_fields = ('name', 'title', 'bio', 'email')
    list_editable = ('order',)

@admin.register(IRIDProject)
class IRIDProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'start_date', 'end_date', 'funding_source')
    list_filter = ('status', 'start_date')
    search_fields = ('title', 'description', 'funding_source')
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ('team_members', 'publications')
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'image', 'status')
        }),
        ('Timeline & Funding', {
            'fields': ('start_date', 'end_date', 'funding_source', 'funding_amount')
        }),
        ('Team & Collaborators', {
            'fields': ('team_members', 'external_collaborators')
        }),
        ('Results', {
            'fields': ('outcomes', 'publications')
        }),
    )

@admin.register(IRIDAchievement)
class IRIDAchievementAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'icon')
    list_filter = ('date',)
    search_fields = ('title', 'description')

@admin.register(IRIDPartner)
class IRIDPartnerAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'partnership_start', 'website')
    list_filter = ('type', 'partnership_start')
    search_fields = ('name', 'description')

@admin.register(IRIDPublication)
class IRIDPublicationAdmin(admin.ModelAdmin):
    list_display = ('publication', 'project', 'is_featured')
    list_filter = ('is_featured', 'project')
    autocomplete_fields = ['publication', 'project']

@admin.register(CitationMetrics)
class CitationMetricsAdmin(admin.ModelAdmin):
    list_display = ('year', 'total_citations', 'h_index', 'i10_index')
    list_filter = ('year',)
    ordering = ('-year',)
