const response = fetch("https://fakestoreapi.com/products")
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        const productList = data;
        const body = document.body;
        const productGrid = document.createElement("div");
        productGrid.id = "product__grid";
        body.appendChild(productGrid);

        data.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product__card";
            productCard.innerHTML = `<h2>${product.title}</h2>
            <div class="image__container"><img src="${product.image}" alt="${product.title}"></div>`;
            const addToCartBtn = document.createElement("button");
            addToCartBtn.className = "btn btn--addToCart";
            addToCartBtn.innerText = "Add to cart";

            addToCartBtn.onclick = addToCart.bind(product);
            productCard.appendChild(addToCartBtn);
            productGrid.appendChild(productCard);
        });
    })
    .catch((error) => console.error("error", error));

function addToCart(product) {
    console.log("Add to cart");
    const userId = 8;
    const date = new Date().toISOString().split("T")[0];
    const productId = product.id;
    const quantity = 1;

    const cartData = {
        userId,
        date,
        products: [{ productId, quantity }],
    };

    fetch(`https://fakestoreapi.com/carts/7`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("error", error));
}
