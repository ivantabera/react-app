import { useState } from 'react';
import { IProduct } from '../interfaces/interfacesProductCard';
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

const products:IProduct[] = [ product1, product2 ];

interface IProductInCart extends IProduct {
    count:number;
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: IProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count:number, product:IProduct }) => {
        
        setShoppingCart( oldShoppingCart => {
            /* Eliminar el objeto cuando su count llegue a 0 */
            if (count === 0) {
                const { [product.id]:toDelete, ...rest} = oldShoppingCart;
                return {...rest}
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        })
    }

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
                    products.map( product => (
                        /* Compound Component Patther forma 1 */ 
                        <ProductCard 
                            key={ product.id }
                            product={product}
                            className='bg-dark'
                            onChange={ onProductCountChange  }
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
