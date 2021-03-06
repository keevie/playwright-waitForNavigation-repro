FROM mcr.microsoft.com/playwright:v1.16.3-focal
ENV TZ America/New_York
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm ci
COPY . ./
