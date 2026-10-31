export type Product = {
    id: number;
    name: string;
    price: number;
    category: "phones" | "laptops";
};

export const products: Product[] = [
    {id: 1, name: "Xiaomi ", price: 500, category: "phones"},
    {id: 2, name: "Iphone", price: 500, category: "phones"},
    {id: 3, name: "LOQ", price: 1100, category: "laptops"},
    {id: 4, name: "lenovo", price: 1200, category: "laptops"},
];
