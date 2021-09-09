const insertProductsCart = async () => {

   const products = JSON.parse(storage.getItem("panier"));
    
    console.log(products);

      for (let product of products) {
         document.getElementById("cartApp").innerHTML += 
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

    console.log("hello");

}; 

insertProductsCart();
