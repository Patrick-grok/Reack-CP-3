import 'react'

interface ProductCart {
    title: string;
    price: number;
    inStock: boolean;
}

function Product({title, price, inStock }: ProductCart) {
    return (
        <p>
            {title} цена {price} {inStock ? "В наличии" : "Нет в наличии" }
        </p>
    )
}
export default Product
