from django.contrib import admin
from .models import Skill, Project, Experience

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category')
    list_filter = ('category',)

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'date', 'order')
    list_editable = ('order',)
    search_fields = ('company', 'role')
    filter_horizontal = ('skills',)    

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_flagship', 'display_order', 'created_at')
    list_filter = ('is_flagship',)
    search_fields = ('title', 'tagline')
    filter_horizontal = ('tech_stack',)