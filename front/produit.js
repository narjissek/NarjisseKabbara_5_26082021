document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  const item = await fetch(`http://localhost:3000/api/teddies/${id}`)
    .then((res) => res.json())
    .catch((e) => console.log("le fetch n'a pas fonctionné"));

  console.log(item);

  const product = document.getElementById("product");

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




function addToCart(item) {
  const couleur = document.getElementById("couleur").value;

  const storage = window.localStorage;

  item["selectedColor"] = couleur;
  item.colors = undefined;

  
  let panier = JSON.parse(storage.getItem("panier"));

  if (!panier) {
    panier = [];
  }

  panier.push(item);

  storage.setItem("panier", JSON.stringify(panier));

  alert("thank you !");
}