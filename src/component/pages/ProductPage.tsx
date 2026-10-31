// динамический маршрут /products/:id с типизированным useParams
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/Product";

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div>
                <p>Товар не найден.</p>
                <Link to="/products?category=all">Назад в каталог</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Цена: {product.price} $</p>
            <p>Категория: {product.category}</p>
            <Link to="/products?category=all">Назад в каталог</Link>
        </div>
    );
};

export default ProductPage;