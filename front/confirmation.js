const storage = window.localStorage

const total = storage.getItem("total")
const orderId = storage.getItem("orderId")

const confirmation = document.getElementById("confirmation")

confirmation.innerHTML = `
<h2>We thank you for placing your order with Orinoco ! ♡ </h2>
</br>
<h3>Order Id : ${orderId}</h3>
<h3>total : ${total} € </h3>
`


document.getElementById("cartTotalValidation").innerHTML = `${total}€`




















































// document.addEventListener("DOMContentLoaded", async () => {
//     const params = new URLSearchParams(window.location.search);
  
// //     const id = params.get("id");






// // const storage = window.localStorage;

// const total = storage.getItem("total");

// const orderId = storage.getItem("orderId");

// const confirmation = storage.getElementById("confirm");

// confirmation.innerHTML =`

// Thank you for your order ! ♡


// <h1> total of your order : ${total} € </h1>

// <h2> Order Id : ${orderId} </h2>
// `;


// )};

