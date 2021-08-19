function changeTitles(){
    document.querySelector("h1").innerHTML = "Ce que j'ai appris à THP"
    document.querySelector("p.lead.text-muted").innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

changeTitles()

console.log(document.querySelector("h1"))


function changeCallToActions(){

    document.querySelector(".btn.btn-primary.my-2").innerHTML = "OK je veux tester !"
    document.querySelector(".btn.btn-primary.my-2").href = "http://www.thehackingproject.org"
    document.querySelector(".btn.btn-secondary.my-2").innerHTML = "Non Merci"
    document.querySelector(".btn.btn-secondary.my-2").href = "https://www.pole-emploi.fr/accueil/"
}

changeCallToActions()

function changeLogoName(){
    document.querySelector(".container.d-flex.justify-content-between strong").innerHTML = "The THP Experience"
}

changeLogoName()