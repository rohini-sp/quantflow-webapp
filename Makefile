# Makefile for Quantaflow Landing Page

.PHONY: help build run stop clean dev install lint format

# Default target
help:
	@echo "Available commands:"
	@echo "  build     - Build the Docker image"
	@echo "  run       - Run the application with Docker Compose"
	@echo "  stop      - Stop the running containers"
	@echo "  clean     - Remove containers and images"
	@echo "  dev       - Run in development mode"
	@echo "  install   - Install dependencies"
	@echo "  lint      - Run linting"
	@echo "  format    - Format code"

# Build the Docker image
build:
	docker build -t quantaflow-landing .

# Run with Docker Compose
run:
	docker-compose up -d

# Stop containers
stop:
	docker-compose down

# Clean up containers and images
clean:
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -f

# Development mode
dev:
	npm run dev

# Install dependencies
install:
	npm install

# Run linting
lint:
	npm run lint

# Format code
format:
	npx prettier --write .

# Build for production
build-prod:
	npm run build

# Run production build locally
start:
	npm start

# Docker build with multi-platform support
build-multi:
	docker buildx build --platform linux/amd64,linux/arm64 -t quantaflow-landing .

# Push to registry (replace with your registry)
push:
	docker tag quantaflow-landing your-registry/quantaflow-landing:latest
	docker push your-registry/quantaflow-landing:latest
