# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the application will run on (production server)
EXPOSE 80

# Command to run the application in production
CMD ["npm", "start"]
