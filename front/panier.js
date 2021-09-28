// appeler le local storage, et stocker dans constante storage pour réutiliser plus facilement
const storage = window.localStorage;

// fonction insertProductsToCart, constante créée pour afficher les produits ajoutés au panier
const insertProductsToCart = async () => {

    // verifie s'il y a bien une catégorie panier dans le local storage - si oui la retourne
    if (!storage.getItem('panier')){
        return 
    }
    
    // initialise la fonction total à 0
    let total = 0
        
    // les elements dans la catégorie panier du local storage sont stocké dans la varaiable products
    products = JSON.parse(storage.getItem('panier'))    
  
    // boucle pour afficher tout les produits contenues dans le local storage
    // création et ajout du html pour les produits du panier 
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
                        <h3 class="text-navy">
                            
                                ${product.name}
                            
                        </h3>
                        <p class="small">
                            ${product.description}
                        </p>
                        <dl class="small m-b-none">
                                <dt>color :</dt>
                            <dd>${product.selectedColor}</dd>
                        </dl>
                    </td>
                    
                    <td><h4><span id="article-prix">${product.price * 0.01}</span>€</p></h4>
                    </td>
                    </tr>
                    </tbody> 
                </table>
            </div>
        </div>
        `

    total += product.price * 0.01; 
    
    };


    // création d'une nouvelle clé dans le local storage, total, où le total du prix du panier sera stocké
    storage.setItem('total', JSON.stringify(total));

    // ajoute le nombres de produits là où il y a l'ID numberCart
    document.getElementById("numberCart").innerHTML += products.length;

    // ajoute le montant total là où il y a l'ID cartTotal
    document.getElementById("cartTotal").innerHTML += `${total} €`;

}; 

// on utilise la fonction insertProductsToCart
insertProductsToCart();

