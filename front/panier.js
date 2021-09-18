const storage = window.localStorage;

const insertProductsToCart = async () => {

    if (!storage.getItem('panier')){
        return 
    }
    
    let total = 0
        
    products = JSON.parse(storage.getItem('panier'))    
  
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

    total += product.price * 0.01; 
    };


    document.getElementById("numberCart").innerHTML += products.length;

    document.getElementById("cartTotal").innerHTML += `${total} €`;

}; 

insertProductsToCart();



