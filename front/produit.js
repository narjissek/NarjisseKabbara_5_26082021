document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  const item = await fetch(`http://localhost:3000/api/teddies/${id}`)
    .then((res) => res.json())
    .catch((e) => console.log("le fetch n'a pas fonctionné"));

  console.log(item);

  const product = document.getElementById("product");

  product.innerHTML += `<div class="card" style="width: 50%;">
                <img src="${item.imageUrl}" class="card-img-top" alt="...">
                
                <div class="card-body" id="article">
                  <h5 class="card-title" id="article-titre">${item.name}</h5>

                  <select id="couleur">
                    ${item.colors.map((color) => `<option>${color}</option>`)}
                  </select>

                  <p class="card-text" id="article-description">${item.description}</p>
                  <p class="font-weight-bold card-text"><span id="article-prix">${item.price * 0,01}</span>€</p>
                  <button onClick='addToCart(${JSON.stringify(
                    item
                  )})'>Ajouter au panier </button>
                </div>
            </div>`;
});

function addToCart(item) {
  const couleur = document.getElementById("couleur").value;

  const storage = window.localStorage;

  /*
  
  item = {
      colors: [],
      name,
      price
  }
  
  */

  item["selectedColor"] = couleur;
  item.colors = undefined;

  /*
      item = {
          name,
          price,
          selectedColor
      }
      */

  storage.setItem("panier", JSON.stringify(item));
}
