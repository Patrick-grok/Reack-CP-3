import { Link, Navigate, useSearchParams } from "react-router-dom";
import { products } from "../../data/Product";

const ProductsPage = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get("category");
    const sort = params.get("sort");

    // задание-1: нет category в адресе -> редирект на category=all
    if (!category) {
        return <Navigate to="/products?category=all" replace />;
    }

    // задание-2: сортировка хранится в URL А5
    const setSort = (value: string) => setParams({category, sort: value});
    const setCategory = (value: string) => setParams(sort ? {category: value, sort} : {category: value});

    let list = category === "all" ? [...products] : products.filter((p) => p.category === category);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return (
        <div>
            <h1>Каталог</h1>

            <div>
                Категория:{" "}
                <button onClick={() => setCategory("all")}>Все</button>
                <button onClick={() => setCategory("phones")}>Телефоны</button>
                <button onClick={() => setCategory("laptops")}>Ноутбуки</button>
            </div>

            <div>
                Сортировка:{" "}
                <button onClick={() => setSort("price-asc")}>Цена ↑</button>
                <button onClick={() => setSort("price-desc")}>Цена ↓</button>
            </div>

            <ul>
                {list.map((p) => (
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`}>{p.name}</Link> — {p.price} $
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;