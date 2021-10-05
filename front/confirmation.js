// appeler le local storage - création de la constante storage 
const storage = window.localStorage

// récupérer la valeur de la clé total du local storage et stocké dans constante total
const total = storage.getItem("total")
// récupérer la valeur de la clé orderId du local storage et stocké dans constante orderId
const orderId = storage.getItem("orderId")

// là où il y'a l'Id confirmation est stocké dans constante confirmation
const confirmation = document.getElementById("confirmation")

// on ajoute au html 
confirmation.innerHTML = `
<h2>We thank you for placing your order with Orinoco ! ♡ </h2>
</br>
<h3>Order Id : ${orderId}</h3>
<h3>total : ${total} € </h3>
`

// on ajoute le total au html là où il y  l'Id cartTotalValidation
document.getElementById("cartTotalValidation").innerHTML = `${total}€`

localStorage.removeItem("total");
localStorage.removeItem("orderId");
localStorage.removeItem("panier");
