// let addTocart = '';
// function cart() {
//     addTocart++;
//     const damn = document.querySelector(".cart span");
//     damn.innerHTML = addTocart;
// }




let cart = [];

function addToCart(product) {
    cart.push(product);

    console.log(cart);

    const damn = document.querySelector(".cart span");

    damn.innerHTML = cart.length;
}