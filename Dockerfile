FROM node:18
COPY ./films/package.json .
COPY ./films/package-lock.json .
RUN npm install
COPY ./films .
CMD ["npm","run","application"]
