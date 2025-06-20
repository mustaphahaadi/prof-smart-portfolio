from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User

class Profile(models.Model):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='profile/', null=True, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    office_location = models.CharField(max_length=255, blank=True)
    cv_file = models.FileField(upload_to='cv/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Achievement(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()
    icon = models.CharField(max_length=50, default='award')  # For frontend icon selection
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title

class ResearchArea(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='research/', null=True, blank=True)
    icon = models.CharField(max_length=50, default='beaker')  # For frontend icon selection
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ResearchProject(models.Model):
    STATUS_CHOICES = (
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('planned', 'Planned'),
    )
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', null=True, blank=True)
    progress = models.IntegerField(default=0)  # 0-100 percentage
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing')
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    research_area = models.ForeignKey(ResearchArea, on_delete=models.CASCADE, related_name='projects')
    funding_source = models.CharField(max_length=255, blank=True)
    funding_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    collaborators = models.JSONField(default=list, blank=True)  # Store as JSON array
    location = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-start_date']

    def __str__(self):
        return self.title

class Publication(models.Model):
    PUBLICATION_TYPES = (
        ('journal', 'Journal Article'),
        ('conference', 'Conference Paper'),
        ('book', 'Book'),
        ('chapter', 'Book Chapter'),
        ('report', 'Technical Report'),
        ('other', 'Other'),
    )
    
    title = models.CharField(max_length=255)
    authors = models.CharField(max_length=255)
    journal = models.CharField(max_length=255, blank=True)
    conference = models.CharField(max_length=255, blank=True)
    book = models.CharField(max_length=255, blank=True)
    publisher = models.CharField(max_length=255, blank=True)
    volume = models.CharField(max_length=50, blank=True)
    issue = models.CharField(max_length=50, blank=True)
    pages = models.CharField(max_length=50, blank=True)
    year = models.IntegerField()
    type = models.CharField(max_length=20, choices=PUBLICATION_TYPES)
    abstract = models.TextField(blank=True)
    keywords = models.JSONField(default=list, blank=True)  # Store as JSON array
    citations = models.IntegerField(default=0)
    doi = models.CharField(max_length=100, blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    pdf_file = models.FileField(upload_to='publications/', null=True, blank=True)
    research_area = models.ForeignKey(ResearchArea, on_delete=models.SET_NULL, null=True, blank=True, related_name='publications')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-year']

    def __str__(self):
        return self.title

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    excerpt = models.TextField(blank=True)
    image = models.ImageField(upload_to='news/', null=True, blank=True)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']
        verbose_name_plural = 'News'

    def __str__(self):
        return self.title

class Testimonial(models.Model):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    institution = models.CharField(max_length=255)
    quote = models.TextField()
    image = models.ImageField(upload_to='testimonials/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Testimonial from {self.name}"

class CareerEvent(models.Model):
    year = models.IntegerField()
    title = models.CharField(max_length=255)
    institution = models.CharField(max_length=255)
    description = models.TextField()
    achievements = models.JSONField(default=list, blank=True)  # Store as JSON array
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-year']

    def __str__(self):
        return f"{self.year}: {self.title} at {self.institution}"

class ResearchCollaboration(models.Model):
    institution = models.CharField(max_length=255)
    country = models.CharField(max_length=100)
    project = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    position_x = models.FloatField()  # For map positioning (percentage)
    position_y = models.FloatField()  # For map positioning (percentage)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Collaboration with {self.institution}, {self.country}"

class Resource(models.Model):
    RESOURCE_TYPES = (
        ('paper', 'Paper'),
        ('book', 'Book'),
        ('presentation', 'Presentation'),
        ('video', 'Video'),
        ('dataset', 'Dataset'),
        ('code', 'Code'),
        ('other', 'Other'),
    )
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(max_length=20, choices=RESOURCE_TYPES)
    file = models.FileField(upload_to='resources/')
    size = models.CharField(max_length=20)  # e.g., "2.5 MB"
    download_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class BlogCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Blog Categories'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    excerpt = models.TextField()
    content = models.TextField()
    image = models.ImageField(upload_to='blog/', null=True, blank=True)
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE, related_name='posts')
    tags = models.JSONField(default=list)  # Store as JSON array
    date = models.DateField()
    author = models.CharField(max_length=255)
    featured = models.BooleanField(default=False)
    view_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Event(models.Model):
    EVENT_TYPES = (
        ('conference', 'Conference'),
        ('workshop', 'Workshop'),
        ('seminar', 'Seminar'),
        ('lecture', 'Guest Lecture'),
        ('meeting', 'Meeting'),
        ('other', 'Other'),
    )
    
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=20, choices=EVENT_TYPES, default='other')
    date = models.DateField()
    time = models.CharField(max_length=100)
    end_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='events/', null=True, blank=True)
    organizer = models.CharField(max_length=255, blank=True)
    is_virtual = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name}: {self.subject}"

class NewsletterSubscription(models.Model):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

# New models for IRID

class IRIDInfo(models.Model):
    """Information about the Institute of Research, Innovation and Development"""
    name = models.CharField(max_length=255, default="Institute of Research, Innovation and Development")
    short_name = models.CharField(max_length=50, default="IRID")
    description = models.TextField()
    mission = models.TextField()
    vision = models.TextField()
    logo = models.ImageField(upload_to='irid/', null=True, blank=True)
    established_year = models.IntegerField()
    address = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    website = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "IRID Information"
        verbose_name_plural = "IRID Information"

    def __str__(self):
        return self.name

class IRIDTeamMember(models.Model):
    """Team members of IRID"""
    ROLE_CHOICES = (
        ('director', 'Director'),
        ('deputy_director', 'Deputy Director'),
        ('researcher', 'Senior Researcher'),
        ('assistant', 'Research Assistant'),
        ('admin', 'Administrative Staff'),
        ('other', 'Other'),
    )
    
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    bio = models.TextField()
    image = models.ImageField(upload_to='irid/team/', null=True, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    order = models.IntegerField(default=0)  # For controlling display order
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.name} - {self.get_role_display()}"

class IRIDProject(models.Model):
    """Projects specifically under IRID"""
    STATUS_CHOICES = (
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('planned', 'Planned'),
    )
    
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to='irid/projects/', null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing')
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    funding_source = models.CharField(max_length=255, blank=True)
    funding_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    team_members = models.ManyToManyField(IRIDTeamMember, related_name='projects', blank=True)
    external_collaborators = models.JSONField(default=list, blank=True)  # Store as JSON array
    outcomes = models.TextField(blank=True)
    publications = models.ManyToManyField(Publication, related_name='irid_projects', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-start_date']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class IRIDAchievement(models.Model):
    """Achievements of IRID as an institute"""
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='irid/achievements/', null=True, blank=True)
    icon = models.CharField(max_length=50, default='award')  # For frontend icon selection
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title

class IRIDPartner(models.Model):
    """Partner organizations of IRID"""
    PARTNER_TYPES = (
        ('academic', 'Academic Institution'),
        ('industry', 'Industry Partner'),
        ('government', 'Government Agency'),
        ('ngo', 'Non-Governmental Organization'),
        ('international', 'International Organization'),
        ('other', 'Other'),
    )
    
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=20, choices=PARTNER_TYPES)
    description = models.TextField()
    logo = models.ImageField(upload_to='irid/partners/', null=True, blank=True)
    website = models.URLField(blank=True, null=True)
    partnership_start = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.get_type_display()})"

class IRIDPublication(models.Model):
    """Publications specifically attributed to IRID"""
    publication = models.ForeignKey(Publication, on_delete=models.CASCADE, related_name='irid_attribution')
    project = models.ForeignKey(IRIDProject, on_delete=models.SET_NULL, null=True, blank=True, related_name='attributed_publications')
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"IRID: {self.publication.title}"

class CitationMetrics(models.Model):
    """Citation metrics over time"""
    year = models.IntegerField()
    total_citations = models.IntegerField()
    h_index = models.IntegerField()
    i10_index = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-year']
        verbose_name_plural = "Citation Metrics"

    def __str__(self):
        return f"Citations for {self.year}: {self.total_citations}"
