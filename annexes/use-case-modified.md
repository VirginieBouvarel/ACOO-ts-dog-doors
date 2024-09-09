# Cas d'utilisation
Les clients sont contents de leur trappe mais _en l'utilisant_ ils ont éprouvé un **nouveau besoin**.
Maintenant ils veulent que la trappe s'ouvre automatiquement dès que leur chien aboie.
Ils ne veulent plus être obligés d'appuyer sur le bouton de la télécommande.

Après avoir bien écouter la description de leur nouveau besoin on modifie le cas d'utilisation :
- le chemin principal devient l'ouverture automatique de la trappe 
    -> car ce sera le cas le plus fréquent
- les cas où Paul ou Virginie devront appuyer sur le bouton devient un nouveau chemin aternatif

## Ce que fait la trappe
(1) Fido aboie pour sortir
(2) Le détecteur d'aboiements "entend" un aboiement
  **_(2.1) Paul ou Virginie entend Fido aboyer_**
(3) Le détecteur d'aboiement envoie une requête à la trappe pour l'ouvrir
  **_(3.1) Paul ou Virginie appuie sur le bouton de la télécommande_**
(4) La trappe s'ouvre
(5) Fido sort
(6) Fido fait ses besoins
  (6.1) la trappe se ferme automatiquement
  (6.2) Fido aboie pour rentrer
  (6.3) Le détecteur d'aboiements "entend" un aboiement (de nouveau)
    **_(6.3.1) Paul ou virginie entend Fido aboyer (de nouveau)_**
  (6.4) Le détecteur d'aboiements envoie une requête à la trappe pour l'ouvrir
    **_(6.4.1) Paul ou virginie appuie sur le bouton de la télécommande_**
  (6.5) La trappe s'ouvre (de nouveau)
(7) Fido rentre
(8) La trappe se referme automatiquement



