# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
#COPY ./ /usr/local/app/
COPY package.json package-lock.json ./

# Install all the dependencies
RUN npm install

COPY . .

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/raspi-controller-front-app /usr/share/nginx/html

# Expose port 4200
#EXPOSE 4200
