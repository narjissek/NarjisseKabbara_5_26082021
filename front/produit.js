// affichage du produit selectionné dans la page index.html dans sa propre page grace a la recupération de l'ID - url avec l'ID du produit 
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);

  // constante pour stocker l'ID du produit selectionné
  const id = params.get("id");

  // appeler l'api avec comme url l'ID selectionné 
  const item = await fetch(`http://localhost:3000/api/teddies/${id}`)
  // resultat du fetch retourné et mis en format json
    .then((res) => res.json())
  // si le fetch n'a pas fonctionné affiche un msg dans la console 
    .catch((e) => console.log("le fetch n'a pas fonctionné"));

// création d'une constante product qui vient stocké l'ID product 
  const product = document.getElementById("product");

  // création et ajout du html dans la page en utilisant les valeurs récupérés  
  product.innerHTML += `<div class="" style="width: 40%;">
                <img src="${item.imageUrl}" class="m-3 card-img-top" alt="...">
                
                <div class="m-3 card-body" id="article">
                  <h2 class="m-3 card-title" id="article-titre">${item.name}</h2>

                 <div class="m-3">
                 <span>Choose a color:  </span> <select class="m-2 btn btn-secondary" id="couleur">
                    ${item.colors.map((color) => `<option>${color}</option>`)}
                  </select>
                  </div> 

                  <p class="m-3 card-text" id="article-description">${item.description}</p>
                  <p class="m-3 font-weight-bold card-text"><span id="article-prix">${item.price * 0.01}</span>€</p>
                  <button class="m-3 btn btn-primary" onClick='addToCart(${JSON.stringify(item)})'>Add to cart </button>
                </div>
            </div>`;
});


// creation de la fonction addToCart pour ajouter les items produits selectionnés au panier
function addToCart(item) {

  // la couleur selectionné est stocké dans une fonction constante couleur
  const couleur = document.getElementById("couleur").value;

  // création de la constante storage pour aller appeler le local storage
  const storage = window.localStorage;

  // approprier la valeur de la couleur selectionné a la couleur 
  item["selectedColor"] = couleur;
  item.colors = undefined;

  // declaration de la variable panier correspondant a ce qu'il y a comme produits dans le local storage
  let panier = JSON.parse(storage.getItem("panier"));

  // si le panier est vide création de la variable en tant que array 
  if (!panier) {
    panier = [];
  }

  // ajout des éléments dans le tableau panier
  panier.push(item);

  // création d'une nouvelle clé dans le local storage, panier, ou les valeurs des produits seront ajoutés
  storage.setItem("panier", JSON.stringify(panier));


  // alerte a l'utilisateur lorsque le produit a été ajouté 
  alert("thank you !");

}


