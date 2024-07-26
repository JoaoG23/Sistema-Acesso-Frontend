
FROM nginx:latest

COPY view/ /nginx/

COPY ./nginx/nginx.config /etc/nginx/conf.d/default.conf
COPY ./nginx /usr/share/nginx/html

