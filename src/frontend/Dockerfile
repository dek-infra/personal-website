# Stage 1: Build the React application
FROM node:20-bookworm-slim AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies cleanly
COPY src/frontend/package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY src/frontend/ ./

# Build the Vite project (outputs static files to /app/dist)
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the static output from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration from your configs folder
COPY src/configs/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 inside the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]