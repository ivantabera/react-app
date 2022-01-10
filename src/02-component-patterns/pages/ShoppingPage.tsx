import { ProductCard } from "../components/ProductCard"

const product = {
    id:'1',
    title:'coffe mug',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div>
            
            <h1>Shopping Store</h1>
            <hr />

            {/* Componente al cual le enviamos datos como parametro */}
            <ProductCard product={product}  />

        </div>
    )
}
