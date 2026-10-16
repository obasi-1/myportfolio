from rest_framework import serializers
from .models import Skill, Project

class SkillSerializer(serializers.ModelSerializer):
    # This will return the readable category name (e.g., "Backend") instead of the short code ("BE")
    category_name = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Skill
        fields = ['id', 'name', 'category', 'category_name']

class ProjectSerializer(serializers.ModelSerializer):
    # This nests the Skill details directly inside the project payload, 
    # saving React from having to make multiple API calls.
    tech_stack = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'tagline', 'description', 'image', 'is_flagship',
            'github_url', 'live_demo_url', 'tech_stack', 'display_order'
        ]