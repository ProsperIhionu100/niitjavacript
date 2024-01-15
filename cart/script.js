// Create a Variable that stores all the cart items when the user clicks on them
const btn = document.querySelectorAll('.btn')
const cartItemsCtn = document.querySelector('#cart-items')
let cartItems = [];
function addToCart(productName, productPrice) {
    let cartItem ={
        name: productName,
        price: productPrice,
    }

    cartItems.push(cartItem)

    displayCartItems()
}

// Accessing all buttons

for (let i = 0; i <btn.length; i++) {
    let parent = btn[i].parentNode;
    let productName = parent.querySelector('h2').innerHTML;
    let productPrice = parent.querySelector('p').innerHTML;

    btn[i].addEventListener("click", () => {
        addToCart(productName, productPrice)
    })
}

function displayCartItems() {
    cartItemsCtn.innerHTML = '';

    for (let i = 0; i < cartItems.length; i++){
        let cartP = document.createElement('p')
        cartP.className = 'cart-item';
        cartP.innerHTML = cartItems[i].name
        cartItemsCtn.appendChild(cartP);
    }
}