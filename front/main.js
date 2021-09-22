//const panier  = JSON.parse(window.localStorage.getItem("panier"));
//document.getElementById("cartnumber").innerHTML += products.length;


const storage = window.localStorage;

const insertArticles = async () => {

    if (!storage.getItem('panier')){
        return 
    }
    
    let articles = 0
        
    products = JSON.parse(storage.getItem('panier'))    
  
    for (let product of products) {
        document.getElementById("cartnumber").innerHTML += products.length;

    };

    // console.log("hello");

    storage.setItem('articles', JSON.stringify(articles));


    

}; 

insertArticles();



