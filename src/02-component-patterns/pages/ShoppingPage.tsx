import { useState } from 'react';
import { IProduct } from '../interfaces/interfacesProductCard';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';


interface IProductInCart extends IProduct {
    count:number;
}

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

                {
                    products.map( (product) => (
                        /* Compound Component Patther forma 1 */ 
                        <ProductCard 
                            key={ product.id }
                            product={product}
                            className='bg-dark'
                            onChange={ onProductCountChange  }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='white-text' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    )) 
                }
            
            </div>

            <div className='shopping-cart'>

                {/* Asi tratamos use state para recorrerlo  */}
                { 
                    Object.entries(shoppingCart).map( ([key, product]) => (

                        <ProductCard 
                            key={key}
                            product={product}
                            className='bg-dark'
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange  }
                            value={product.count}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons 
                                className='custom-buttons'
                                style={{ 
                                    display:'flex',
                                    justifyContent:'center'
                                }}
                            />
                        </ProductCard>
                        )
                    ) 
                }
                
            </div>

        </div>
    )
}
