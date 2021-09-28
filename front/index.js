// création de la constante api pour ne pas réutiliser ladresse de l'api au complet
const api = "http://localhost:3000/api/teddies";

// déclaration de la constante insertProducts pour insérer les produits de l'api sur la page Index
const insertProducts = async () => {

    // déclaration de la constante products qui va chercher l'api avec l'utilisation de fetch 
   const products = await fetch(api)
    // prend le resultat du fetch soit, les infos de l'api, et les mets en format Json 
   .then((result) => result.json())
   // - si le fetch n 'a pas fonctionné, affiche dans la console un message   
   .catch(() => console.log("le fetch n'a pas fonctionné"));
    
// boucle pour afficher tout les produits de l'api.
      for (let product of products) {
         document.getElementById("app").innerHTML += 
         `<a class="link-dark m-3 p-2 px-3 d-flex align-items-stretch justify-content-center" href="produit.html?id=${product._id}">
         <div class="homeCard " style="width: 18rem;"> 
                 <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}"> 
                 <div class="card-body" id="article"> 
                     <h2 class="card-title" id="article-titre">${product.name}</h2>
                     <p class="font-weight-bold card-text"><span id="article-prix">${product.price * 0.01}</span>€</p>
                 </div>  
              </div>
            </a>`;   
    };

}; 


// utilisation de la fonction insertProducts(s)
insertProducts();




