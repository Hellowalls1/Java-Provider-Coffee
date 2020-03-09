export const Product = (product) => {
    return `
    <section class="productInfo">
    <div class="productItem">${product.name}</div>
    <div class="productItem">${product.beanType}</div>
    <div class="productItem">${product.roastType}</div>
    <div class="productItem">${product.price}</div>
    </section>
    `
}