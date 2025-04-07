let products = [
    {
        id: 1,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-1.webp",
        name: "Fresh Red Tomatos",
        price: 100,
    },
    {
        id: 2,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-15.webp",
        name: "Fresh Kiwi",
        price: 200,
    },
    {
        id: 3,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-3.webp",
        name: "Fresh Watermelon",
        price: 150,
    },
    {
        id: 4,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-20.webp",
        name: "Fresh Potato",
        price: 250,
    },
    {
        id: 5,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-22.webp",
        name: "Fresh Cookies",
        price: 300,
    },
    {
        id: 6,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-24.webp",
        name: "Fresh Beetroot",
        price: 150,
    },
    {
        id: 7,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-21.webp",
        name: "Fresh Oranges",
        price: 100,
    },
    {
        id: 8,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-16.webp",
        name: "Fresh Broccoli",
        price: 100,
    },
]

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
counter.innerHTML = cartArr.length;

function addToCart(productId) {
    let product = cartArr.find((obj) => obj.id === productId);

    if (product) {
        // product.quantity++;
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Item added once !",
        });
    } else {
        let productToAdd = products.find((obj) => obj.id === productId);

        if (productToAdd) {
            productToAdd.quantity = 1;
            cartArr.push(productToAdd);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cartArr));
    counter.innerHTML = cartArr.length;
}

products.forEach((product, idx) => {
    document.getElementById("rowContent").innerHTML += `
        <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div class="product-wrapper text-center">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info py-3">
                    <h3>${product.name}</h3>
                    <span class="text-danger">$${product.price}</span>
                </div>
                <div class="add-cart">
                    <button class="btn btn-success add-btn w-100" onclick="addToCart(${product.id})">Add To Cart</button>
                </div>
            </div>
        </div>               
    `
})