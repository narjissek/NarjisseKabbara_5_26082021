async function order(e){
    e.preventDefault();   
}

let productIds = []:

const data = {
    contact: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        address: formData.get("address"),
        city: formData.get("city"),
        email: formData.get("email"),
    },
    products: productIDs,
};