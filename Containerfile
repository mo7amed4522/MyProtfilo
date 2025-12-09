## Multi-stage build to produce production static assets and serve via Nginx
FROM node:18-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
ARG BASE_URL=/
ENV BASE_URL=${BASE_URL}
RUN npm run build

FROM nginx:alpine AS runtime
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

