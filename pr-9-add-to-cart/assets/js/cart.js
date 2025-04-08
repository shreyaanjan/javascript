let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
counter.innerHTML = cartArr.length;
let cartItems = document.getElementById("cartItems");
let totalAmount = 0;
let shopTitle = document.querySelector(".shop-title");
let card = document.querySelector(".card")

function saveArr(){
    localStorage.setItem("cart",JSON.stringify(cartArr))
}

function deleteItem(idx){
    cartArr.splice(idx, 1);
    saveArr();
    displayCart()

}

function updateQuantity(idx, value){
    let newQuantity = cartArr[idx].quantity + value;

    if(newQuantity <= 0){
        deleteItem(idx);
    } else {
        cartArr[idx].quantity = newQuantity;
        saveArr();
    }
    displayCart();
}

function displayCart(){
    totalAmount = 0;
    cartItems.innerHTML = "";

    if(cartArr.length === 0){
        cartItems.innerHTML = `
            <div>
                <img class="img-fluid" src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="emptycart">
            </div>
        `
        shopTitle.classList.add("d-none");
        card.classList.add("d-none");
    } else {
        shopTitle.classList.remove("d-none");
        card.classList.remove("d-none");
    }

    cartArr.forEach((shopItem, idx)=>{
        let subTotal = shopItem.quantity * shopItem.price;
        totalAmount += subTotal
        
        cartItems.innerHTML += `
        
            <div class="col-6 mt-3">
                <div class="d-flex gap-4 align-items-center">
                    <div class="product-image">
                        <img width="100%" class="border" src="${shopItem.image}" 
                            alt="">
                    </div>
                    <div class=" ">
                        ${shopItem.name}
                    </div>
                </div>
            </div> 
            <div class="col-2 ">
                <div class="">
                    <h5>$${shopItem.price}</h5>
                </div>
            </div>
            <div class="col-2">
                <div class="d-flex justify-content-between border quantity">
                    <button class="border-0" onclick="updateQuantity(${idx}, -1)">
                        <i class="bi bi-dash"></i>
                    </button>
                    <span>${shopItem.quantity}</span>
                    <button class="border-0" onclick="updateQuantity(${idx}, 1)">
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
            </div>
            <div class="col-2">
                <div class="d-flex align-items-center gap-5">
                    <span>$${subTotal}</span>
                    <button class="border-0" onclick="deleteItem(${idx})">
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
                    <span>$0</span>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-3">
                    <h5 class="card-title">Total</h5>
                    <span>$${totalAmount}</span>
                </div>
            </div>
        `
    
}
displayCart();