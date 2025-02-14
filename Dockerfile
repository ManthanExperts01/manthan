# Use a minimal Node.js base image
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=dev  # Install only production dependencies

# Copy the app's source code
COPY . .

# Build the Next.js app
RUN npm run build

# Ensure the required directories exist and have proper permissions
RUN mkdir -p /app/src/shared/posts && chmod -R 777 /app/src/shared/posts

# Remove development dependencies to reduce image size
RUN rm -rf node_modules && npm install --only=production

# Use a smaller Node.js image for the final container
FROM node:18 AS runner

# Set working directory
WORKDIR /app

# Copy standalone build from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Copy the posts directory (if needed for persistence)
COPY --from=builder /app/src/shared/posts /app/src/shared/posts

# Set proper permissions for writing files
RUN chmod -R 777 /app/src/shared/posts

# Set environment to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js standalone server
CMD ["node", "server.js"]
