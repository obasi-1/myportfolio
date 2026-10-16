#!/usr/bin/env bash
# exit on error

set -o errexit

# Install dependencies
pip install -r requirements.txt

# Collect static files (for the Django Admin panel UI)
python manage.py collectstatic --no-input

# Run database migrations
python manage.py migrate

# Create superuser automatically from environment variables
python manage.py createsuperuser --no-input || true