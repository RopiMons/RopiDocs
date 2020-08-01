Générer nouveau bundle

	php app/console generate:bundle

	Ropi/AccountBundle


Générer nouvelle entité

	php app/console doctrine:generate:entity

Entity shortcut name: 

	RopiCommerceBundle:Order

--> ajouter les fields names et leur type.

--> pour les énumérations (un champ qui acceptent différentes valeurs prédéfinies, elle même définies comme une entité), ne rien entrer, on le fait manuellement après

`php app/console doctrine:schema:update --force

La table est maintenant visible dans `http://localhost/phpmyadmin`

