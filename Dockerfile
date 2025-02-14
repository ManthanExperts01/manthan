# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
# RUN npm install --only=production
RUN npm install

# Copy the app's source code
COPY . .

# Build the app for production
RUN npm run build

#env production
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
