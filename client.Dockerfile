# Development Dockerfile
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm cache clean --force && npm install

# Copy source code
COPY . .

# Expose port 4200 (Angular dev server default)
EXPOSE 4200

# Start the development server with host binding
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]