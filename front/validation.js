const storage = window.localStorage

const total = storage.getItem("total")
document.getElementById("cartTotalValidation").innerHTML = `${total}€`

// creer fonction order pour ce qui se passe lorsqu'on clique sur le bouton submit 

async function order(e) {
    e.preventDefault();


    // ici on a besoin du local storage pou*r récupérer l'ID de la commande
    const storage = window.localStorage;
    const panier = JSON.parse(storage.getItem('panier'));

    // initialise la variabel productIds en array
    let productIds = [];


    // boucle pour récupérer l'order Id. 
    panier.forEach(item => {
      productIds.push(item._id)
      
    })

    console.log(productIds);
    console.log("productIds");

    const formData = new FormData(document.getElementById("order-form"));
  
    const data = {
      contact: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        address: formData.get("address"),
        city: formData.get("city"),
        email: formData.get("email"),
      },
      products: productIds,
    };

    
    // envoyer ensuite les données récupérés dans le back - utiliser fetch pour se lier a l'api mais avec la méthode post pour envoyer

    const postOrder = await fetch('http://localhost:3000/api/teddies/order', {
      method: "POST",
      headers: { "content-Type": "application/json"},
      body: JSON.stringify(data),
    
    });

    const result = await postOrder.json();


    // pour rediriger directement avec l'ID de la commande :  window.location.href =`../front/confirmation.html?orderid=${result.orderId}&total=`;


    storage.setItem("orderId", result.orderId);

    window.location.href = `../front/confirmation.html`;


    
    






}




  
  
    
