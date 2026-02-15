# ==================================
# Stage 1: Build Next.js Application
# ==================================
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install all dependencies (devDependencies needed for build, discarded in final stage)
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js static export
# This generates the /app/out directory with static HTML/CSS/JS
RUN bun run build

# ==================================
# Stage 2: Serve with nginx
# ==================================
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built static files from builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Add healthcheck (using curl which is available in nginx:alpine)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://127.0.0.1/health || exit 1

# Expose port 80
EXPOSE 80

# Start nginx (runs as root, automatically drops to nginx user after binding to port 80)
CMD ["nginx", "-g", "daemon off;"]
