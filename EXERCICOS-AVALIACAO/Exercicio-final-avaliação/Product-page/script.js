const getProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products/4");
    const data = response.json();
    console.log(data);
    return data;
};

const productContainer = document.createElement("div");
const body = document.body;
productContainer.classList = "product-container";

body.appendChild(productContainer);

const createProduct = (product) => {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = `<div class="product-image"><img src="${product.image}" alt"${product.title}"></div>
    <span>${product.category}</span>
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <span>${product.price}</span>
    <div>
        <span>${product.rating.count}</span>
        <span>${product.rating.rate}</span>
    </div>`;
    return productContainer;
};

const relatedProductsContainer = document.createElement("div");
relatedProductsContainer.classList = "Related-products-container";

body.appendChild(relatedProductsContainer);

const createRelatedProducts = fetch(
    "https://fakestoreapi.com/products/category/jewelery"
)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const relatedProducts = data;

        relatedProducts.slice(1, 4).forEach((relatedProduct) => {
            const relatedProductCard = document.createElement("div");
            relatedProductsContainer.appendChild(relatedProductCard);
            relatedProductCard.classList = "related-product-card";
            relatedProductCard.innerHTML = `<div class="product-image"><img src="${relatedProduct.image}" alt"${relatedProduct.title}"></div>
            <span>${relatedProduct.category}</span>
            <h3>${relatedProduct.title}</h3>
            <p>${relatedProduct.description}</p>
            <span>${relatedProduct.price}</span>
            <div>
                <span>${relatedProduct.rating.count}</span>
                <span>${relatedProduct.rating.rate}</span>
            </div>`;
        });
    })
    .catch((error) => console.error("error", error));

const loadProducts = async () => {
    const getUrlById = new URLSearchParams(window.location.search);
    const productId = getUrlById.get("id");
    const product = await getProduct(productId);

    createProduct(product);
};
const loadRelatedProducts = async () => {
    const getUrlById = new URLSearchParams(window.location.search);
    const productId = getUrlById.get("id");
    const product = await getProduct(productId);

    createRelatedProducts(product);
};

console.log(createProduct);
loadProducts();

const footerDate = new Date();
const footerText = document.createElement("div");
document.body.appendChild(footerText);
footerText.innerHTML = `Copyright ${footerDate.getFullYear()}`;
