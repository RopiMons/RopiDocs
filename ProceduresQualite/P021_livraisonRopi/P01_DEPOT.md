
# PROCEDURE DEPOT DE ROPI

## REVISIONS

* Rev0 - 29/05/2015 - Fabian Dortu

## OBJET

Procédure de mise en dépôt de Ropi. Une mise en dépôt est le dépôt d'une quantité déterminée de Ropi en format papier (billet) dans un lieu à priori quelconque appelé **comptoir de change**. Les Ropi en dépôt restent la propriété de l'asbl Ropi et sont donc simplement prêtés au comptoir de change pour que ce dernier en assure la vente (échange de Ropi contre des Euro) aux citoyens.

## PROCEDURE CHRONOLOGIQUE

### Décision du CA

1.  Le CA identifie un lieu (commerce, guichet, ...) pour accueillir un comptoir de change, appelé comptoir de change candidat.
2.  Le CA décide d'un montant minimum et d'un montant maximum à mettre en dépôt dans le comptoir de change. Le montant maximum pour l'ensemble des comptoirs de change ne peut excéder 5% du **Fonds de garantie**.
3.  Le CA mandate un bénévole, appelé **courtier** pour effectuer les transactions avec le comptoir de change candidat.

### Négociation avec le comptoir

4.  Le courtier se rend au comptoir de change candidat.
5.  Le courtier et le responsable du comptoir de change candidat, appelé ci-après **responsable**,  s'accordent sur un montant `X` à mettre en dépôt dans les limites imposées par le CA au point 2.

### Retrait de Ropi

6. Le courtier demande au comptable les billets de Ropi pour le montant établi. Ces billets sont puisés par le comptable de la **réserve principale** et passés au courtier.
7. Le comptable inscrit le mouvement dans le livre comptable `(débit réserve Ropi X ; crédit compte courtier X)`
8. Le comptable se logue sur la partie administation du site web Ropi et complète le formulaire `FORMDEPOT` en y indiquant le nom du comptoir, le nom du courtier et le montant à déposer.

### Dépôt des Ropi au comptoir

8.  Le courtier et le responsable signent la convention `CONVDEPOT` (annexe) en y indiquant le montant décidé, la date et le lieu de la signature.
9.  Le courtier laisse les Ropi en dépôt au comptoir.

### Cloture de la transaction 

10. Le courtier se logue sur la partie administation du site web Ropi et complète le formulaire `FORMDEPOT` en y indiquant le montant déposé et en uploadant un scan de la convention. 
11. Si le montant effectivemnt déposé est égale au montant indiqué au point 8, la transaction est effectivement cloturée. Sinon continuer au point 12.
`(débit compte courtier X ; crédit compte comptoir X)`
12. Si le montant effectivement déposé `Y` diffère du montant indiqué au point 8 par, le courtier indique `Y` dans le formulaire
`(débit compte courtier Y ; crédit compte comptoir Y)`
13. la différence de Ropi (`dx=X-Y`) doit être rendue au comptable et la transaction sera cloturé par le comptable à la remise des billets.
`(débit compte courtier dx ; crédit réserve Ropi dx)`

###  Liste des dépôt
14. Les dépôts sont toujours visibles sur le compte du comptoir dans la catégorie comptoirs.