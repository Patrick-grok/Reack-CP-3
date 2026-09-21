import 'react'
import Product from "./ProductCart.tsx";

function List() {
    return (
        <div>
            <Product title={"SSD"} price={12.600} inStock={true}/>
            <Product title={"5090"} price={499.999} inStock={true}/>
            <Product title={"Ram"} price={26.999} inStock={false}/>
        </div>
    )
}
export default List
