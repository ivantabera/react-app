import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';
import { IProduct } from '../interfaces/interfacesProductCard';
import { useState } from 'react';

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

    /* el hook state su primitivo sera un objeto con el arreglo key de tipo string 
        "no es un arreglo es para indicarle al state que seran X cantidad de llaves"
    */
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:IProductInCart }>({});

    const onProductCountChange = () => {
        console.log('onProductCountChange');
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
                            onChange={ () => onProductCountChange()  }
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='white-text' />
                            <ProductButtons className='custom-buttons'/>
                        </ProductCard>
                    ))
                }
            
            </div>

            <div className='shopping-cart'>
                <ProductCard 
                    product={product1}
                    className='bg-dark'
                    style={{ width: '100px' }}
                    onChange={ () => onProductCountChange()  }
                >
                    <ProductImage className='custom-image' />
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>

                <ProductCard 
                    product={product2}
                    className='bg-dark'
                    style={{ width: '100px' }}
                >
                    <ProductImage className='custom-image' />
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>
            </div>

        </div>
    )
}
