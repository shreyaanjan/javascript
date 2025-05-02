let products = [
    {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2016/11/18/22/29/footwear-1837170_640.jpg",
        price: 1500,
        description: "spark",
    },
    {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg",
        price: 2500,
        description: "nike",
    },
    {
        id: 3,
        img: "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_640.jpg",
        price: 3000,
        description: "woodland",
    },
    {
        id: 4,
        img: "https://media.istockphoto.com/id/1389649796/photo/variety-of-comfortable-casual-trousers-top-view-copy-space-image-with-retro-toning.webp?b=1&s=612x612&w=0&k=20&c=-f7ytU18Hk5lfadYE6QOVRiuQAFRfVE_ZktJrVeqdIE=",
        price: 700,
        description: "jeans",
    },
    {
        id: 5,
        img: "https://cdn.pixabay.com/photo/2015/07/14/16/33/white-845071_640.jpg",
        price: 600,
        description: "shirt",
    },
    {
        id: 6,
        img: "https://cdn.dribbble.com/users/7376416/screenshots/17279322/media/0c904010b4fb41b0959bbed52b58081f.png?resize=400x0",
        price: 400,
        description: "t-shirt",
    },
]

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");

function addToCart(productId){
    let product = products.find((obj)=>{
        return obj.id === productId;
    })

    let productIdx = cartArr.findIndex((obj)=>{
        return obj.id === productId;
    })

    if(productIdx !== -1){
        alert("already added");
    } else {
        product.quantity = 1;
        cartArr.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cartArr));
    counter.innerHTML = cartArr.length;
}

products.forEach((cartItem ,idx)=>{
    document.getElementById("cartContent").innerHTML += `
       <div class="col-4 mb-4">
            <div class="product-wrapper text-center">
                <div class="product-img">
                    <img src="${cartItem.img}" alt="${cartItem.description}" width="100%">
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
                    <h3>${cartItem.description}</h3>
                    <span class="text-danger">$${cartItem.price}</span>
                </div>
                <div class="add-cart">
                    <button class="btn btn-success" onclick="addToCart(${cartItem.id})">Add To Cart</button>
                </div>
            </div>
        </div>               
    `
})