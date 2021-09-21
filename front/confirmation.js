const storage = window.localStorage;

const total = storage.getItem("total");

const orderId = storage.getItem("orderId");

const confirmation = storage.getElementById("confirm");

confirmation.innerHTML =`

Thank you for your order ! ♡


<h1> total of your order : ${total} € </h1>

<h2> Order Id : ${orderId} </h2>
`;