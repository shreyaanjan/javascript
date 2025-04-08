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
        price: 170,
    },
    {
        id: 7,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-21.webp",
        name: "Fresh Oranges",
        price: 50,
    },
    {
        id: 8,
        image: "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-16.webp",
        name: "Fresh Broccoli",
        price: 190,
    },
]

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
let counter2 = document.getElementById("counter2");

counter.innerHTML = cartArr.length;
counter2.innerHTML = cartArr.length;

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
    counter2.innerHTML = cartArr.length;
}

products.forEach((product, idx) => {
    document.getElementById("rowContent").innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
            <div class="product-wrapper text-center">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="rating pt-3">
                    <span>
                        <svg width="90" height="18" viewBox="0 0 75 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#FFA800"></path>
                            <path d="M22.5 0L24.1839 5.18237H29.6329L25.2245 8.38525L26.9084 13.5676L22.5 10.3647L18.0916 13.5676L19.7755 8.38525L15.3671 5.18237H20.8161L22.5 0Z" fill="#FFA800"></path>
                            <path d="M37.5 0L39.1839 5.18237H44.6329L40.2245 8.38525L41.9084 13.5676L37.5 10.3647L33.0916 13.5676L34.7755 8.38525L30.3671 5.18237H35.8161L37.5 0Z" fill="#FFA800"></path>
                            <path d="M52.5 0L54.1839 5.18237H59.6329L55.2245 8.38525L56.9084 13.5676L52.5 10.3647L48.0916 13.5676L49.7755 8.38525L45.3671 5.18237H50.8161L52.5 0Z" fill="#FFA800"></path>
                            <path d="M67.5 0L69.1839 5.18237H74.6329L70.2245 8.38525L71.9084 13.5676L67.5 10.3647L63.0916 13.5676L64.7755 8.38525L60.3671 5.18237H65.8161L67.5 0Z" fill="#FFA800"></path>
                        </svg>
                    </span>
                </div>
                <div class="product-info py-3">
                    <h3>${product.name}</h3>
                    <span class="text-danger">$${product.price}</span>
                </div>
                <div class="add-cart">
                    <button class="btn btn-success add-btn w-100 d-flex align-items-center justify-content-center" onclick="addToCart(${product.id})"><i class="bi bi-plus fs-4"></i>Add To Cart</button>
                </div>
            </div>
        </div>               
    `
})