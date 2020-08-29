# build environment
FROM node:alpine as builder
ARG version
RUN echo "Version: $version"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PORT 80
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

RUN yarn --network-timeout 1000000 install

COPY . /usr/src/app
RUN version=$version yarn run build

