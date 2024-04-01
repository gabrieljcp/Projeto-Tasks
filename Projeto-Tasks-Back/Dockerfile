# Especifica a imagem base
FROM php:7.4-apache

# Atualiza os pacotes e instala o git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# Habilita o mod_rewrite para o Apache
RUN a2enmod rewrite

# Instala as extensões do PHP que seu projeto precisa
# Exemplo: mysqli para MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copia os arquivos do seu projeto para o diretório padrão do Apache
COPY . /var/www/html/

# Expõe a porta 80 para acesso HTTP
EXPOSE 80

# O Apache já é iniciado por padrão na imagem php:apache, então não é necessário definir CMD
