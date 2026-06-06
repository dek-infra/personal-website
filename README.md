# DevOps & Infrastructure Engineer Portfolio

A clean, modern, and highly responsive single-page personal portfolio designed specifically for DevOps, Infrastructure, and Systems Engineers. 

This project features a premium SaaS-inspired UI with a built-in Dark/Light mode toggle, dynamic typing effects, and is fully containerized for both seamless local development (with hot-reloading) and highly optimized production deployment.

## ✨ Features

- **Dark & Light Themes:** Premium UI featuring ambient background glows, offset shadows, and `localStorage` persistence to remember user preferences.
- **Dynamic Hero Section:** A customized "typewriter" effect highlighting key infrastructure disciplines (Pipelines, Clusters, Systems).
- **Categorized Skills Grid:** Beautifully styled skill badges separated into OS, Programming, Hypervisors, CI/CD, Containerization, IaC, and Observability.
- **Docker Native:** Comes with out-of-the-box configurations for both live-development and Nginx-powered production hosting.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS (v3)
- **Icons:** Lucide React
- **Web Server:** Nginx (Alpine)
- **Containerization:** Docker & Docker Compose

## 📁 Project Structure

```text
.
├── docker-compose.yml          # Production Docker Compose (Nginx)
├── docker-compose.dev.yml      # Development Docker Compose (Vite Hot-Reload)
├── src/
│   ├── configs/
│   │   └── nginx.conf          # Custom Nginx SPA routing and gzip configuration
│   └── frontend/
│       ├── Dockerfile          # Multi-stage Dockerfile (Node Build -> Nginx Serve)
│       ├── package.json        # Frontend dependencies
│       ├── tailwind.config.js  # Dark mode and animation configurations
│       └── src/
│           └── App.jsx         # Main React portfolio component
```

## 🚀 How to Run (Using Docker)

You do not need Node.js installed on your local machine to run this project, only **Docker** and **Docker Compose**.

### 1. Development Mode (Hot Reloading)
This mode uses Vite's development server inside the container and maps your local files via Docker volumes. Any changes you make to the code will instantly update in your browser without needing a rebuild.

```bash
# Start the development server
docker-compose -f docker-compose.dev.yml up -d --build
```
- **URL:** Access the live site at `http://localhost:8080`
- **Logs:** `docker-compose -f docker-compose.dev.yml logs -f`
- **Stop:** `docker-compose -f docker-compose.dev.yml down`

### 2. Production Mode (Nginx)
This mode builds the optimized static HTML/JS/CSS assets and serves them using a highly performant, lightweight Nginx web server. Use this to verify how the site will run in a real-world deployment.

```bash
# Build the static assets and start the Nginx server
docker-compose up -d --build
```
- **URL:** Access the production site at `http://localhost:8080`
- **Logs:** `docker-compose logs -f`
- **Stop:** `docker-compose down`

---
*Built by Ing.*
