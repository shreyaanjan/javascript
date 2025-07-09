let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
let counter2 = document.getElementById("counter2");
let cartItems = document.getElementById("cartItems");
let totalAmount = 0;
let shopTitle = document.querySelector(".shop-title");
let card = document.querySelector(".card")
let checkout = document.getElementById("checkout")

function saveArr() {
    localStorage.setItem("cart", JSON.stringify(cartArr))
}

function deleteItem(idx) {
    cartArr.splice(idx, 1);
    saveArr();
    displayCart()

}

function updateQuantity(idx, value) {
    let newQuantity = cartArr[idx].quantity + value;

    if (newQuantity <= 0) {
        deleteItem(idx);
    } else {
        cartArr[idx].quantity = newQuantity;
        saveArr();
    }
    displayCart();
}

function displayCart() {
    counter.innerHTML = cartArr.length;
    counter2.innerHTML = cartArr.length;
    totalAmount = 0;
    cartItems.innerHTML = "";

    if (cartArr.length === 0) {
        nothingCart.innerHTML = `
            <div class="text-center">
                <img class="w-50" src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="emptycart">
                <p class="mt-3 fw-semibold">Your Cart is currently Empty.</p>
                <button class="btn btn-success home-btn" onclick="window.location='./index.html'">
                    Shop Now
                </button>
            </div>
        `
        shopTitle.classList.add("d-none");
        card.classList.add("d-none");
    } else {
        shopTitle.classList.remove("d-none");
        card.classList.remove("d-none");
    }

    cartArr.forEach((shopItem, idx) => {
        let subTotal = shopItem.quantity * shopItem.price;
        totalAmount += subTotal

        cartItems.innerHTML += `
            <div class="col-lg-6 mt-3 px-3">
                <div class="d-flex gap-4 align-items-center justify-content-start  ">
                    <div class="product-image">
                        <img width="100%" class="border" src="${shopItem.image}" alt="${shopItem.name}">
                    </div>
                    <div>
                        ${shopItem.name}
                    </div>
                </div>
            </div> 
            <div class="col-lg-2 col-4 mt-2">
                <div class="mt-2 text-center">
                    <h5>$${shopItem.price}</h5>
                </div>
            </div>
            <div class="col-lg-2 col-4 mt-2">
                <div class="d-flex justify-content-lg-between justify-content-center  align-items-center">
                    <div class="d-flex align-items-center justify-content-between  quantity">
                        <button class="border-0 bg-transparent" onclick="updateQuantity(${idx}, -1)">
                            <i class="bi bi-dash"></i>
                        </button>
                        <span>${shopItem.quantity}</span>
                        <button class="border-0 bg-transparent" onclick="updateQuantity(${idx}, 1)">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-4 mt-2">
                <div class="d-flex align-items-center justify-content-center gap-lg-5 gap-3">
                    <span>$${subTotal}</span>
                    <button class="border-0 bg-transparent" onclick="deleteItem(${idx})">
                        <i class="bi bi-x"></i>
                    </button>
                </div>
            </div>
        `
    })
    document.getElementById("bill").innerHTML = "";
    document.getElementById("bill").innerHTML += `
        <h5 class="card-header">Order Summary</h5>
        <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">Subtotal</h5>
                <span>$${totalAmount}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
                <h5 class="card-title">Shipping</h5>
                <span>$50</span>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
                <h5 class="card-title">Total</h5>
                <span>$${totalAmount + 50}</span>
            </div>
        </div>
    `
    checkout.innerHTML = "";
    checkout.innerHTML += `
        <button class="btn btn-success mt-3 home-btn">Checkout</button>
    `

}
displayCart();
counter.innerHTML = cartArr.length;
counter2.innerHTML = cartArr.length;