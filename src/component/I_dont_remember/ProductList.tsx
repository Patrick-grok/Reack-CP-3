import { useSearchParams } from 'react-router-dom';
import Product from './ProductCart.tsx';
import type { ProductProps } from './ProductCart.tsx';

const products: ProductProps[] = [
    { title: 'SSD', price: 12600, inStock: true, category: 'storage' },
    { title: '5090', price: 499999, inStock: true, category: 'gpu' },
    { title: 'Ram', price: 26999, inStock: false, category: 'memory' },
];

function List() {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category') ?? 'all';
    const sort = searchParams.get('sort');

    const updateParam = (key: string, value: string) => {
        const next = new URLSearchParams(searchParams);
        next.set(key, value);
        setSearchParams(next);
    };

    const visible = products.filter(
        (p) => category === 'all' || p.category === category
    );

    if (sort === 'price-asc') visible.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') visible.sort((a, b) => b.price - a.price);

    return (
        <div>
            <div>
                <button onClick={() => updateParam('category', 'all')}>Все</button>
                <button onClick={() => updateParam('category', 'storage')}>SSD</button>
                <button onClick={() => updateParam('category', 'gpu')}>Видеокарты</button>
                <button onClick={() => updateParam('category', 'memory')}>Память</button>
            </div>

            <div>
                <button onClick={() => updateParam('sort', 'price-asc')} disabled={sort === 'price-asc'}>
                    Цена ↑
                </button>
                <button onClick={() => updateParam('sort', 'price-desc')} disabled={sort === 'price-desc'}>
                    Цена ↓
                </button>
            </div>

            {visible.map((p) => (
                <Product key={p.title} {...p} />
            ))}
        </div>
    );
}

export default List;