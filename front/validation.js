// appeler le local storage - création de la constante storage 
const storage = window.localStorage

// récupérer la valeur de la clé total du local storage et stocké dans constante total
const total = storage.getItem("total")

// ajout du total au html là où il y a l'Id cartTotalValidation
document.getElementById("cartTotalValidation").innerHTML = `${total}€`

// fonction order pour gérer tout ce qui se passe lorsqu'on clique sur le bouton submit 
async function order(e) {
    // prevent Default pour ce que la async function order ne fasse que ce qu'y est écrit ci apres
    e.preventDefault();

    // appeler le local storage - création de la constante storage 
    const storage = window.localStorage;

    // recupere les valeur de la clé Panier du local storage les stocker dans la constante panier
    const panier = JSON.parse(storage.getItem('panier'));

    // initialise la variable productIds en array
    let productIds = [];

    // boucle pour chaque item : ajouter au tableau productIds l'Id de l'item
    panier.forEach(item => {
      productIds.push(item._id)  
    })

 
    // creation nouveau FormData là où il y a l'Id order-form -  stocké dans la constante formData 
    const formData = new FormData(document.getElementById("order-form"));
  
    // création de la constante array data contenant tout les elements du formulaire remplis sur la page 
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

    
    // envoyer ensuite les données récupérés vers le back - utiliser fetch pour se lier a l'api mais avec la méthode post pour envoyer
    const postOrder = await fetch('http://localhost:3000/api/teddies/order', {
      method: "POST",
      headers: { "content-Type": "application/json"},
      body: JSON.stringify(data),
    
    });

    // stocker le resultat dans une constante result en format json
    const result = await postOrder.json();


    // création d'une nouvelle clé dans le local storage pour générer un Id de commande  orderId    
    storage.setItem("orderId", result.orderId);

    // rediriger ensuite vers la page confirmation.html
    window.location.href = `../front/confirmation.html`;


    
    






}




  
  
    
