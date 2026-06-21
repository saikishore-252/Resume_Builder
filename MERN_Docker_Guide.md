# MERN Application Docker Guide

## Project Structure

``` text
resume-builder/
├── client/
│   ├── Dockerfile
│   └── .dockerignore
├── server/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env
└── docker-compose.yml
```

## Backend Dockerfile

``` dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","server"]
```

## Frontend Dockerfile

``` dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev","--","--host","0.0.0.0"]
```

## docker-compose.yml

``` yaml
services:
  backend:
    build:
      context: ./server
    container_name: resume-builder-backend
    ports:
      - "3000:3000"
    env_file:
      - ./server/.env

  frontend:
    build:
      context: ./client
    container_name: resume-builder-frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
    environment:
      VITE_API_URL: http://localhost:3000
```

## Build

``` bash
docker compose build
```

## Start

``` bash
docker compose up -d
```

## Stop

``` bash
docker compose down
```

## Running Services

``` bash
docker compose ps
```

## Logs

``` bash
docker compose logs -f
docker compose logs -f backend
docker compose logs -f frontend
```

## Docker Commands

### List Images

``` bash
docker images
```

### List Containers

``` bash
docker ps
docker ps -a
```

### Tag an Image

``` bash

docker tag resume-builder-backend:latest saikishore17825/resume_builder_backend:v1

docker tag resume-builder-frontend:latest saikishore17825/resume_builder_frontend:v1
```

### Push Image

``` bash
docker push saikishore17825/resume_builder_backend:v1
docker push saikishore17825/resume_builder_frontend:v1
```

## Access URLs

-   Frontend: http://localhost:5173
-   Backend: http://localhost:3000

## Troubleshooting

### TLS Handshake Timeout / `lookup auth.docker.io: no such host`

This indicates Docker Desktop cannot reach Docker Hub.

Check:

``` bash
docker pull node:22-alpine
nslookup auth.docker.io
docker info
```

If Docker Desktop is configured with an invalid proxy, disable or
correct it in **Docker Desktop → Settings → Resources → Proxies**, then
restart Docker Desktop.
