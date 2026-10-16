from django.contrib import admin
from .models import Skill, Project

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category')
    list_filter = ('category',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_flagship', 'display_order', 'created_at')
    list_filter = ('is_flagship',)
    search_fields = ('title', 'tagline')
    filter_horizontal = ('tech_stack',) # Creates a sleek UI for selecting multiple skills