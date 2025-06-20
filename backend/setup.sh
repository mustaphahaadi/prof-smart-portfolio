#!/bin/bash
echo "Setting up the backend..."

echo "Creating virtual environment..."
python3 -m venv venv

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Creating .env file..."
cp .env.example .env

echo "Running migrations..."
python manage.py migrate

echo "Creating superuser..."
python manage.py createsuperuser

echo "Generating sample data..."
python generate_sample_data.py

echo "Setup complete!"
echo "Run 'python manage.py runserver' to start the development server"