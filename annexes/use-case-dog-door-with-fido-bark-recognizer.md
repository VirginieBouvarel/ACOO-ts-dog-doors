# Cas d'utilisation 1 : Trappe pour chien avec détecteur d'aboiement de Fido
La trappe pour chien avec télécommande et détecteur d'aboiement fonctionne très bien, mais...
_En l'utilisant_ Paul et Virginie ont trouvé un nouveau problème qu'ils voudraient corriger :
Depuis que le détecteur d'aboiement est installé, la trappe s'ouvre dès qu'un chien aboie, même si ce n'est pas Fido !
Et des chiens inconnus entre dans la maison !

Paul et Virginie souhaiteraient désormais que la trappe ne s'ouvre QUE si c'est Fido qui aboie.

Il faut donc mettre à jour le cas d'utilisation :

## Ce que fait la trappe
(1) Fido aboie pour sortir
(2) Le détecteur d'aboiements "entend" un aboiement
  (2.1) Paul ou Virginie entend Fido aboyer
(3) **_Si c'est Fido qui aboie_**, le détecteur d'aboiement envoie une requête à la trappe pour l'ouvrir
  (3.1) Paul ou Virginie appuie sur le bouton de la télécommande
(4) La trappe s'ouvre
(5) Fido sort
(6) Fido fait ses besoins
  (6.1) La trappe se ferme automatiquement
  (6.2) Fido aboie pour rentrer
  (6.3) Le détecteur d'aboiements "entend" un aboiement (de nouveau)
    (6.3.1) Paul ou virginie entend Fido aboyer (de nouveau)
  (6.4) **_Si c'est Fido qui aboie_**, le détecteur d'aboiements envoie une requête à la trappe pour l'ouvrir
    (6.4.1) Paul ou virginie appuie sur le bouton de la télécommande
  (6.5) La trappe s'ouvre (de nouveau)
(7) Fido rentre
(8) La trappe se referme automatiquement


> Il va également falloir AJOUTER un nouveau cas d'utilisation pour gérer le stockage d'un aboiement précis