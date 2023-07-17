# Phase de construction
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Phase de production
FROM nginx:1.21.1 AS production
COPY --from=build /app/build /usr/share/nginx/html

# Installer les dépendances
RUN apt-get update && apt-get install -y rsync nano cron

# Copier le script.sh
COPY script.sh /script.sh

# Donner les droits d'exécution au script.sh
RUN chmod +x /script.sh

# Copier le cronjob
COPY cronjob /etc/cron.d/my-cronjob

# Donner les droits d'exécution au cronjob
RUN chmod 0644 /etc/cron.d/my-cronjob

# Appliquer le cronjob
RUN crontab /etc/cron.d/my-cronjob

# Lancer le cronjob et nginx
CMD cron && nginx -g "daemon off;"
