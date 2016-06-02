{% extends '::email.html.twig' %}

{% block content %}
    {% set cotisation =  parametres.getValueOf('cotisationUsagerEuro') %}
    <h1>Inscription sur le site du Ropi</h1>
    <p>Merci de votre inscription sur le site du Ropi ASBL</p>
    <p>Petit rappel de vos informations de connections</p>
    <h2>Identifiants de connection</h2>
    <p>Votre login :  {{ login }} <br /></p>

    {% if volonteMembre %}
        <h2>Votre adhésion en tant que membre effectif</h2>
        <p>Vous avez émis la volonté de vous inscrire en tant que membre effectif de notre ASBL et nous vous remercions de participer à notre démocratie interne. Afin de confirmer votre demande, merci de verser le montant de {{ cotisation }}€ sur le compte de l'ASBL</p>
        <p>
        <ul>
            <li>
                Compte courant Ropi ASBL : {{ parametres.getValueOf('compteCourant') }}
            </li>
            <li>
                Ropi ASBL - {{ parametres.getValueOf('adresseSiegeSocial') }}
            </li>
            <li>
                Montant : {{ cotisation }}€
            </li>
            <li>
                Communication : Cotisation Membre {{ nom }} {{ prenom }}
            </li>
        </ul>
        </p>
        <p>Si vous souhaitez payer votre cotisation en Ropi ({{ parametres.getValueOf('cotisationUsagerRopi') }}R), merci de prendre contact avec l'ASBL</p>
    {% endif %}

    <h2>Validation de l'inscription</h2>
    <p>Afin de valider votre inscription, merci de cliquer sur le lien suivant:</p>
    <p> <a href="{{url("Ropi_Key",{"id":id,'key':cle}) }}">{{url("Ropi_Key",{"id":id,'key':cle}) }}</a></p>
    <p>A très bientôt sur www.ropi.be</p>
    <p>L'équipe du Ropi</p>
{% endblock %}