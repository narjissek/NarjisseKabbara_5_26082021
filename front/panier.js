const storage = window.localStorage;

const insertProductsToCart = async () => {

if (storage.getItem('panier')) {
    let panier = []
    let total = 0
    
    products = JSON.parse(storage.getItem('panier'))    
}
  
      for (let product of products) {
         document.getElementById("cartApp").innerHTML += 

         `<div class="ibox-content">
         <div class="table-responsive">
             <table class="table shoping-cart-table">

                 <tbody>
                 <tr>
                     <td width="90">
                         <div class="cart-product-imitation">
                         <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}"> 

                         </div>
                     </td>
                     <td class="desc">
                         <h3>
                             <a href="#" class="text-navy">
                             ${product.name}
                             </a>
                         </h3>
                         <p class="small">
                         ${product.description}
                         </p>
                         <dl class="small m-b-none">
                             <dt>color :</dt>
                             <dd>${product.selectedColor}</dd>
                         </dl>

                         <div class="m-t-sm">
                             
                             <a href="#" class="text-muted float-right"><i class="fa fa-trash"></i> Remove item</a>
                         </div>
                     </td>

                     <td>
                         
                     </td>
                     <td width="65">
                         <input type="text" class="form-control" placeholder="1">
                     </td>
                     <td>
                         <h4>
                         <span id="article-prix">${product.price * 0.01}</span>€</p>
                         </h4>
                     </td>

                 </tr>
                 </tbody>
             </table>
         </div>

     </div>`


    };


}; 

insertProductsToCart();


let cartPrice = product.price * 0.01;

console.log(cartPrice);


let cartTotal = () => {
    const array = [1, 2, 3, 4];
    let sum = 0;
    
    for (let i = 0; i < panier.length; i++) {
        sum += panier[i];
    }
    console.log(sum);


}

cartTotal();

document.getElementById("cartTotal").innerHTML += cartTotal;
















// // panier products you may be interested 


// const insertProducts = async () => {

//     const products = await fetch(api)
//     .then((result) => result.json())
//     .catch(() => console.log("le fetch n'a pas fonctionné"));
     
//      console.log(products);
 
//        for (let product of products) {
//         document.getElementById("interestedProduct").innerHTML += 
//         `<a href="produit.html?id=${product._id}" class="product-name">${product.name} </a>
//             <div class="small m-t-xs">
//             ${product.description}
//             </div>
//             <div class="m-t text-righ">
//                 <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>
//             </div>
//         `  
//      };
 
//  }; 
 
//  insertProducts();
 
 

