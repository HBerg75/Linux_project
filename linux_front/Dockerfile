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

# Install rsync and nano
RUN apt-get update && apt-get install -y rsync nano cron

# Copy the script.sh file to the container
COPY script.sh /script.sh

# Grant execution rights to the script.sh file
RUN chmod +x /script.sh

# Copy the cron job file
COPY cronjob /etc/cron.d/my-cronjob

# Give execution rights to the cron job
RUN chmod 0644 /etc/cron.d/my-cronjob

# Apply the cron job
RUN crontab /etc/cron.d/my-cronjob

# Start the cron service and Nginx
CMD cron && nginx -g "daemon off;"
