"use strict";

//Quelles valeurs affiche la boucle while ?

/*A votre avis, quelles sont les valeurs affichées pour chaque boucle ? Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l’alert ou pas ?*/

// 1. Le préfixe sous forme ++i :

// let i = 0;
// while (++i < 5) alert(i);

// 2.Le postfixe sous forme i++ :

// let i = 0;
// while (i++ < 5) alert(i);

//Réponse: Les deux boucles n'affichent pas les mêmes valeurs car dans la première boucle, l'incrémentation est en préfixe, par conséquent la première valeur renvoyée est la nouvelle valeur modifiée. Dans la deuxième boucle, l'incrémentation est en postfixe, de ce fait, la première valeur renvoyée est donc la dernière valeur non modifiée.
// Parce que l'alert est une autre instruction de la boucle, la deuxième boucle affichera 5 car il affichera la dernière valeur de i mais dans la comparaison, i affichera 4 et donc 4<5.
