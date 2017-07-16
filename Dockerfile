FROM node:boron
ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install npm packages
COPY . /usr/src/app
RUN npm install

# Bundle app source inside the Docker image

# Map port 3000 by docker daemon and
# Run the node server
EXPOSE 3000
CMD [ "node", "node public/server.bundle.js" ]

