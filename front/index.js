const api = 'http://localhost:3000/api/teddies';

console.log("hello");

const insertArticle = async () => {

    // const articles = await fetch('${api}').json();
    const products = await fetch('${api}').then(result => result.json());

    console.log(products);

     for (let product of products) {

         document.getElementById("app").innerHTML += 
        '<a href="produit.html?id=${product._id}' 
         class="card" style="width: 18rem;">
                 <img src="${article.imageUrl}" class="card-img-top" alt="${article.name}">
                 <div class="card-body" id="article">
                     <h5 class="card-title" id="article-titre">${article.name}</h5>
                     <p class="card-text" id="article-description">${article.description}</p>
                     <p class="font-weight-bold card-text"><span id="article-prix">${article.price}</span>€</p>
                 </div>     
         </a>';
        
     }
};


 insertProducts();