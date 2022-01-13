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
                    product={product} 
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

                {/* Compound Component Patther forma 1 */}
                <ProductCard 
                    product={product}
                    style={{ backgroundColor: '#70D1F8' }}
                >
                    <ProductImage 
                        img={''}
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                    />
                    <ProductTitle 
                        style={{ fontWeight: 'bold' }}
                    />
                    <ProductButtons 
                        style={{ 
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>
            
            </div>
        </div>
    )
}
