# Use the official Node.js 20 image with Alpine 3.19.
# https://hub.docker.com/_/node
FROM node:20-alpine3.19 AS builder

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install 

# Copy local code to the container image.
COPY . .

# Build the application if necessary (e.g., if you use TypeScript or a build step).
# RUN npm run build

# Use a smaller base image for the final image.
FROM node:20-alpine3.19

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage.
COPY --from=builder /usr/src/app .

# Use environment variables for flexibility.
# ENV NODE_ENV=production
# ENV PORT=3000 

RUN apk update && apk upgrade && apk add vim bash curl

RUN npm run build

RUN rm -rf src

# Expose the port the app runs on.
EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "start" ]

# Optionally, add a health check to ensure the container is running correctly.
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 CMD curl -f http://localhost:3000/ping || exit 1
