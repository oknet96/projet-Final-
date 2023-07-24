
// Cart items array to store added products
let cartItems = [];

// Function to add a product to the cart
function addToCart(button) {
    const parent = button.closest('.shop-item');
    const productName = parent.querySelector('.shop-item-title').innerText;
    const productPrice = parseFloat(parent.querySelector('.shop-item-price').innerText);
    const productImage = parent.querySelector('.shop-item-image').src;

    const productQuantity = (document.getElementsByClassName('cart-quantity-input').value, 1);

    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
        //existingItem.productQuantity+= productQuantity;
    } else {
        cartItems.push({ name: productName, price: productPrice, quantity: productQuantity, image: productImage });
    }
    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsElement = document.querySelector('.cart-items');
    cartItemsElement.innerHTML = '';
    let cartTotal = 0;

    cartItems.forEach(item => {
        const total = item.price * item.quantity;
        cartTotal += total;

        const row = document.createElement('div');
        row.classList.add('cart-row');
        row.style.borderBottom = '1px solid #ccc';
        row.style.padding = '10px';
        row.innerHTML = `
    
        <div class="cart-item">
            <img class="cart-item-image" src="${item.image}" width="100" height="100" alt="${item.name}" />
            <span class="cart-item-title">${item.name}</span>
        </div>
        <span class=" cart-price cart-column ">${item.price.toFixed(2)} Fcfa</span>
        <div class=" cart-quantity cart-column">
            <input onchange="checknumber(this)" class=" cart-quantity-input" type="number" value="${item.quantity}" /> <!-- Fixed here -->
        </div>
        <span class="cart-price cart-column total" id="naruto">${(item.price * item.quantity).toFixed(2)} Fcfa</span>
        <div class="cart-column">
            <button onclick="remove(this)" class="btn btn-danger" type="button">REMOVE</button>
            <i onclick="like(this)" class="fas fa-heart" id="moi"></i>
        </div>
    </div>
    
    `;
        cartItemsElement.appendChild(row);

    });

    const cartTotalElement = document.querySelector('.cart-total-price');
    cartTotalElement.innerText = `${cartTotal.toFixed(2)} Fcfa`;

}


// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.shop-item-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => addToCart(button));
});

//Add remove function

function remove(papa) {
    papa.parentElement.parentElement.remove()
    var j = document.getElementById('grandpere');
    var p = parseInt(document.getElementById('grandpere').innerHTML);
    var h = parseInt(papa.parentElement.parentElement.children[3].innerHTML)
    var q = p - h
    j.innerHTML = (` ${q} FCFA`)
}

//Add like function

function like(maman) {
    maman.classList.toggle('changeToRed');

}

// Add checknumber function
function checknumber(qty) {

    var x = parseInt(qty.value)
    const y = qty.parentElement.parentElement.children[1].innerText
    var tanti = parseInt(y)
    var z = tanti * x;
    var h = qty.parentElement.parentElement.children[3]
    h.innerText = (`${z} FCFA`)
    boom()

}



// Add boom function

function boom() {

    var j = document.getElementById('grandpere');


    var a = parseInt(document.getElementById('naruto').innerHTML);

    var b = parseInt(document.getElementById('jiraya').innerText);

    var c = parseInt(document.getElementById('sasuké').innerText);
    var total = a + b + c

    j.innerHTML = (`${total} FCFA`)

}


































