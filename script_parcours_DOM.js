// console.log("Question 1 : Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.")

// let tableau_p = document.querySelectorAll("p")

// console.log(tableau_p.length)


// console.log("Question 2 :Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.")

// let coucou = document.querySelector("#coucou")

// console.log(coucou.innerHTML)



// console.log("Question 3 :// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.")

// let a_3 = document.querySelectorAll("a")

// console.log(a_3[2].href)


// console.log("Question 4 :// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.")

// let compte_moi = document.querySelectorAll(".compte-moi")

// console.log(compte_moi.length)



// console.log("Question 5 :// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.")


// console.log(document.querySelectorAll("li.compte-moi").length)



// console.log("Question 6 :// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.")

// console.log(document.querySelectorAll("ol li.compte-moi").length)


// console.log("Question 7 :// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…")



// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. 
// Dans le second <ul>,le premier élément de la liste (tag <li>) est caché visuellement de 
// l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.

let hidden_div = document.querySelectorAll("div ul")[1].querySelector("li").innerHTML

console.log(hidden_div)