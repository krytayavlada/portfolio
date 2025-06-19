# 1. Сборка React-приложения на базе Node.js
FROM node:18-alpine as build

WORKDIR /app

# Копируем package-файлы и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем исходники и билдим проект
COPY . .
RUN npm run build

# 2. Запускаем готовое приложение через nginx
FROM nginx:stable-alpine

# Копируем билд из первого шага в nginx
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx в форграунд режиме
CMD ["nginx", "-g", "daemon off;"]
