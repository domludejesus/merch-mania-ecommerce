FROM node:18.12.1

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
RUN npm install

# Copy the application code
COPY . .

# Expose the port on which the server will run
EXPOSE 5001

# Run the server
CMD ["npm", "start"]
