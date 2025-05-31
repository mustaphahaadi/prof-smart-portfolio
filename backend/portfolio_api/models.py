from django.db import models
from django.utils.text import slugify

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
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ResearchProject(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', null=True, blank=True)
    progress = models.IntegerField(default=0)  # 0-100 percentage
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    research_area = models.ForeignKey(ResearchArea, on_delete=models.CASCADE, related_name='projects')
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
        ('other', 'Other'),
    )
    
    title = models.CharField(max_length=255)
    authors = models.CharField(max_length=255)
    journal = models.CharField(max_length=255)
    year = models.IntegerField()
    type = models.CharField(max_length=20, choices=PUBLICATION_TYPES)
    citations = models.IntegerField(default=0)
    doi = models.CharField(max_length=100, blank=True, null=True)
    pdf_file = models.FileField(upload_to='publications/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-year']

    def __str__(self):
        return self.title

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
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
        ('other', 'Other'),
    )
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(max_length=20, choices=RESOURCE_TYPES)
    file = models.FileField(upload_to='resources/')
    size = models.CharField(max_length=20)  # e.g., "2.5 MB"
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class BlogCategory(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Blog Categories'

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
    title = models.CharField(max_length=255)
    date = models.DateField()
    time = models.CharField(max_length=100)
    location = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)
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
