// Changer le titre de la page
function changeTitles() {
  document.querySelector("h1").innerHTML = "Ce que j'ai appris à THP"
  document.querySelector("p.lead.text-muted").innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

changeTitles()

// Changer le call to Action en tête de page
function changeCallToActions() {

  document.querySelector(".btn.btn-primary.my-2").innerHTML = "OK je veux tester !"
  document.querySelector(".btn.btn-primary.my-2").href = "http://www.thehackingproject.org"
  document.querySelector(".btn.btn-secondary.my-2").innerHTML = "Non Merci"
  document.querySelector(".btn.btn-secondary.my-2").href = "https://www.pole-emploi.fr/accueil/"
}

changeCallToActions()

// Changer le logoname
function changeLogoName() {
  logoname = document.querySelector(".container.d-flex.justify-content-between strong")
  logoname.innerHTML = "The THP Experience"
  logoname.style.fontSize = "2em"
}

changeLogoName()

// Ajout des images
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages() {
  document.querySelectorAll("img.card-img-top").forEach(function (image, index) {
    image.src = imagesArray[index]
  }
  )
}

populateImages()

// Effacer les dernières 3 cartes
function deleteLastCards() {
  for (let i = 0; i < 3; i++) {
    document.querySelector("div.album div.container div.row").lastElementChild.remove()
  }
}

deleteLastCards()

// Modifier le text des 3 premières cartes
let text_change = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]

function changeCardsText() {
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll("div.album div.container div.row p")[i].innerHTML = text_change[i]
  }
}

changeCardsText()

// Modifier le style des buttons
function changeViewButtons() {
  [...document.querySelectorAll("div.album div.container div.row .btn-outline-secondary")].filter(element => element.innerHTML === "View").forEach(btn => { btn.classList.add("btn-success"), btn.classList.remove("btn-outline-secondary") })
}

changeViewButtons()

// Pyramide inversée
function upSideDownPyramid() {
  let new_row = document.createElement("div")
  new_row.classList.add("row")
  new_row.append(document.querySelectorAll("div.album div.container div.row div.col-md-4")[3])
  document.querySelector("div.album div.container").append(new_row)
}

upSideDownPyramid()
