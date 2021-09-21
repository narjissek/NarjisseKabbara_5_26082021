

console.log("hello");

async function order(e) {
    e.preventDefault();
  
    let productIds = [];
  
    const storage = window.localStorage;
  
    document.getElementById("cartTotal").innerHTML += `${total} €`;

    const panier = JSON.parse(storage.getItem("panier"));
  
    panier.forEach((item) => {
      productIds.push(item._id);
    });
  
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
  
    const postOrder = await fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    
    const result = await postOrder.json();
  
    storage.setItem("orderId", result.orderId);
  
    
    window.location.href = `../front/confirmation.html`;
  }