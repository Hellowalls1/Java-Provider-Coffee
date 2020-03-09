import { Product } from "./Product.js";
import { useProducts } from "./productDataProvider.js";

const contentTarget = document.querySelector(".product")

export const ProductList = () => {
    const productArray = useProducts()

    for (const productObject of productArray) {
        const productHTML = Product(productObject)
        contentTarget.innerHTML += productHTML
    }
}

