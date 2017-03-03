FROM  hub.c.163.com/liyanginchina/centos-nodejs:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

RUN npm install -g pm2
RUN pm2 dump

# Bundle app source
COPY . /usr/src/app/

EXPOSE 3000
CMD [ "npm", "test" ]
#CMD ["pm2", "start", "/usr/src/app/package.json", "--no-daemon"]
