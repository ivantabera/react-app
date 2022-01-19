import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard 
                key={ product.id }
                product={product}
                className='bg-dark'
                initialValues={{
                    count:4,
                    maxCount:10
                }}
            >
                {
                    ({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='white-text' />
                            <ProductButtons className='custom-buttons' />
                            <button onClick={reset}>reset</button>
                            <button onClick={ () => increaseBy(-2) }>-2</button>
                            { !isMaxCountReached && <button onClick={ () => increaseBy(+2) }>+2</button> }
                            
                            <span>{count} - {maxCount}</span>
                            {/* { JSON.stringify(args,null, 3)} */}
                        </>
                    )
                }
                
            </ProductCard>

        </div>
    )
}
