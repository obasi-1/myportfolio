from django.db import models

class SkillCategory(models.TextChoices):
    BACKEND = 'BE', 'Backend'
    FRONTEND = 'FE', 'Frontend'
    TOOLS = 'TL', 'Tools'

class Skill(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(
        max_length=2, 
        choices=SkillCategory.choices, 
        default=SkillCategory.BACKEND
    )

    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"

class Experience(models.Model):
    company = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    date = models.CharField(max_length=100, help_text='e.g., "October 2026" or "2025 - Present"')
    description = models.TextField()
    skills = models.ManyToManyField('Skill', blank=True) # Links to your existing Skill model
    order = models.IntegerField(default=0, help_text="Lower numbers appear first")

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return f"{self.role} at {self.company}"    

class Project(models.Model):
    title = models.CharField(max_length=200)
    tagline = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField(max_length=500, blank=True, null=True)
    
    is_flagship = models.BooleanField(default=False)
    
    github_url = models.URLField(blank=True, null=True)
    live_demo_url = models.URLField(blank=True, null=True)
    
    tech_stack = models.ManyToManyField(Skill, related_name="projects")
    
    display_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', '-created_at']

    def __str__(self):
        return self.title