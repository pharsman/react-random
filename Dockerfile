# build stage
# 12.22-alpine
FROM node:lts-alpine as build-stage
ARG BRANCH_NAME
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run $BRANCH_NAME

# production stage
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
