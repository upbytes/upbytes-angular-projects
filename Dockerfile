### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /work/upbytes/upbytes-angular-projects/
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:component
RUN npm run build

### STAGE 2: Run ###
FROM nginx:latest
COPY --from=build /work/upbytes/upbytes-angular-projects/dist/upbytes-angular-calendar /usr/share/nginx/html
EXPOSE 80