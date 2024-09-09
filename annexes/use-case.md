# Cas d'utilisation
Pour être bien sûrs d'avoir compris le besoin du client et de bien implémenter toutes les exigences,
On rédige un cas d'utilisation qui va retracer chaque étape d'un cas précis d'utilisation de notre futur système.

On prend aussi le soin de challenger ce scénario standard en essayant de prévoir ce qui pourrait mal se passer, 
ou des cas particulier auxquels le client n'a peut-être pas pensé :
-> Et si la trappe se referme avant que Fido ne soit rentré ?

Si besoin on ajoute un chemin alternatif au cas d'utilisation pour prendre en compte ce cas particulier.

## Ce que fait la trappe
(1) Fido aboie pour sortir
(2) Paul ou Virginie entend Fido aboyer
(3) Paul ou Virginie appuie sur le bouton de la télécommande
(4) La trappe s'ouvre
(5) Fido sort
(6) Fido fait ses besoins
  ** Chemin alternatif
  (6.1) la trappe se ferme automatiquement
  (6.2) Fido aboie pour rentrer
  (6.3) Paul ou virginie entend Fido aboyer (de nouveau)
  (6.4) Paul ou virginie appuie sur le bouton de la télécommande
  (6.5) La trappe s'ouvre (de nouveau)
  ** Fin du chemin alternatif
(7) Fido rentre
(8) La trappe se referme automatiquement
