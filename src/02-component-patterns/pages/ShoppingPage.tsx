import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';

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

            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

                {/* Compound Component Patther forma 1 */}
                <ProductCard 
                    product={product}
                    className='bg-dark' 
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                {/* Compound Component Patther forma 2 */}
                <ProductCard 
                    product={product} 
                    className={''} 
                >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            
            </div>
        </div>
    )
}
