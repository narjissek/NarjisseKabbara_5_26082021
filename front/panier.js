// // code internet : Récupération des éléments du panier pour la page de panier ou la page de commande
// const getBasket = async (deleteProduct = false) => {
//     if (localStorage.getItem('products')) {
//       let products = []
//       let total = 0
//       products = JSON.parse(localStorage.getItem('products'))
//       const uniqueProducts = new Set([...products.map(item => item.id)])
//       let index = 1
//       for (let product of uniqueProducts) {
//         const data = await getProduct(product)
//         const lenses = products.filter(item => item.id == product)
//         document.getElementById("cartApp").innerHTML += "hello test panier"
//         document.getElementById("total-price").innerHTML = `${formatPrice(total += data.price * lenses.length)}`
//         index += 1
//       }
//     }
//     else {
//       document.getElementById("table-body").innerHTML += `<tr><th scope="row">Aucun produit</th></tr>`
//     }
//   }





// mon code 

const storage = window.localStorage;


const insertProductsToCart = async () => {

if (storage.getItem('panier')) {
    let panier = []
    let total = 0
    
    products = JSON.parse(storage.getItem('panier'))
    
}
  
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

}; 

insertProductsToCart();














































// Tentatives diverses de code pour le panier:





// document.addEventListener("DOMContentLoaded", async () => {
//     const params = new URLSearchParams(window.location.search);
  
//     const id = params.get("id");
  
//     const item = await fetch(`http://localhost:3000/api/teddies/${id}`)
//       .then((res) => res.json())
//       .catch((e) => console.log("le fetch n'a pas fonctionné"));
  
//     console.log(item);
  
//     const product = document.getElementById("product");







// let panier = JSON.parse(storage.getItem("panier"));







// console.log(panier);

// if(!panier) {
//     cartApp.innerHTML("Le panier est vide ! :( ")
// }

// const insertProductsCart = async () => {

//    const product = JSON.parse(storage.getItem("panier"));

//    console.log("hello de panier.js");
//     console.log(product);

//       for (let product of products) {
//          document.getElementById("cartApp").innerHTML += 
//          `<a class="link-dark m-3 p-2 px-3 d-flex align-items-stretch justify-content-center" href="produit.html?id=${product._id}">
//          <div class="homeCard " style="width: 18rem;"> 
//                  <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}"> 
//                  <div class="card-body" id="article"> 
//                      <h2 class="card-title" id="article-titre">${product.name}</h2>
//                      <p class="font-weight-bold card-text"><span id="article-prix">${product.price * 0.01}</span>€</p>
//                  </div>  
//               </div>
//             </a>`;   
//     };

   
    




//  }; 






//  });




// insertProductsCart();







// <div class="ibox-content">
// <div class="table-responsive">
//     <table class="table shoping-cart-table">

//         <tbody>
//         <tr>
//             <td width="90">
//                 <div class="cart-product-imitation">
//                   <img src="../back/images/teddy_2.jpg " alt="">

//                 </div>
//             </td>
//             <td class="desc">
//                 <h3>
//                     <a href="#" class="text-navy">
//                         PM software
//                     </a>
//                 </h3>
//                 <p class="small">
//                     Readable content of a page when looking at its layout. The point of using Lorem Ipsum is
//                 </p>
//                 <dl class="small m-b-none">
//                     <dt>Description lists</dt>
//                     <dd>A description list is perfect for defining terms.</dd>
//                 </dl>

//                 <div class="m-t-sm">
//                     <a href="#" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
//                 </div>
//             </td>

//             <td>
//                 $130,00
//             </td>
//             <td width="65">
//                 <input type="text" class="form-control" placeholder="1">
//             </td>
//             <td>
//                 <h4>
//                     $130,00
//                 </h4>
//             </td>

//         </tr>
//         </tbody>
//     </table>
// </div>

// </div>