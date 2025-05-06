let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter2 = document.getElementById("counter");
let totalAmount = 0;

function displayCart(){
    cartArr.forEach((item, idx)=>{
        let subTotal = item.quantity * item.price;
        totalAmount += subTotal;

        document.getElementById("cartItems").innerHTML += `
            <div class="col-lg-6 mt-3 px-3">
                <div class="d-flex gap-4 align-items-center justify-content-start  ">
                    <div class="product-image">
                        <img width="150px" class="img-fluid" src="${item.img}" alt="${item.description}">
                    </div>
                    <h3>
                        ${item.description}
                    </h3>
                </div>
            </div> 
            <div class="col-lg-2 col-4 mt-2">
                <div class="mt-2 text-center">
                    <h5>$${item.price}</h5>
                </div>
            </div>
            <div class="col-lg-2 col-4 mt-2">
                <div class="d-flex justify-content-lg-between justify-content-center  align-items-center">
                    <div class="d-flex align-items-center justify-content-between  quantity">
                        <button class="border-0" onclick="updateQuantity(${idx}, -1)">
                            <i class="bi bi-dash"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="border-0" onclick="updateQuantity(${idx}, 1)">
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
}
displayCart();

function updateQuantity(){

}

function deleteItem(idx){
    ca
}