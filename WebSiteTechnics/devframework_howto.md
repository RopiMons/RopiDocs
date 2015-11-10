# installe IDE NetBean (optionnel)

# installer wamp

wamp (serveur apache / php / sql pour windows)

# Set php.exe in path
set php.exe path in path environment variable

# Insatall curl
TODO? pas nécessaire


# cloner le projet ropiv2
aller dans `wamp/www` et cloner le repository git de `ropiv2` 

`git clone git@192.168.1.100:/opt/www`

# Installer composer
Aller dans le répertoire ropiv2

`cd ropiv2`
`php -r "readfile('https://getcomposer.org/installer');" | php`
`php composer.phar update`

ça installe symphony automatiquement

il download et installe pleins de package, puis pose plein de question.

Accepter toutes les réponse par défaut sauf

`database_name (symfony): ropi`


`php app/console doctrine:database:create`

`php app/console doctrine:schema:update --force`
Cette commande est à refaire pour générer les table sur base de l'entity générator


`php app/console doctrine:fixtures:load --append`

`php app/console assetic:dump`

`php app/console assets:install`


# Quelques tweaks de config 
Pour que want puisse servir le site ropi.

## windows hosts
Lancer Wordpad en admin
editer  `Windows/System32/drivers/etc/hosts` et ajouter

`127.0.0.1		ropi.local`

## wamp host
Créer fichier `c:\wamp\alias\ropi.conf`

    <VirtualHost ropi.local:80>
    	ServerName ropi.local
    	ServerAdmin fdortu@fastmail.net
    	DocumentRoot "c:\wamp\www\ropiv2\web"
    	<Directory	/>
    		Options Indexes FollowSymLinks
    		AllowOverride all
    		Order allow,deny
    		allow from all
    	</Directory>
    </VirtualHost>

reload wamp (icone en bas à droite -->restart all services)

# Voir site sur serveur
`http://ropi.local/app.php/`

`http://ropi.local/app.php/login`

    login: fabian
    pass: @Bcde1
