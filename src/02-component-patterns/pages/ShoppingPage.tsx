import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';

const product1 = {
    id:'1',
    title:'coffe mug',
    img:'./coffee-mug.png'
}

const product2 = {
    id:'2',
    title:'coffe mug 2',
    img:'./coffee-mug2.png'
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
                    product={product1}
                    className='bg-dark' 
                >
                    <ProductImage 
                        className='custom-image' 
                        img={''}
                    />
                    <ProductTitle 
                        className='white-text'
                    />
                    <ProductButtons 
                        className='custom-buttons'
                    />
                </ProductCard>

                {/* Compound Component Patther forma 2 */}
                <ProductCard 
                    product={product2} 
                    className='bg-dark' 
                >
                    <ProductCard.Image 
                        className='custom-image' 
                        img={''}
                    />
                    <ProductCard.Title 
                        className='white-text'
                    />
                    <ProductCard.Buttons 
                        className='custom-buttons'
                    />
                </ProductCard>
            
            </div>
        </div>
    )
}
