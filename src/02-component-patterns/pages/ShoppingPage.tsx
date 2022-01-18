import { IProduct } from '../interfaces/interfacesProductCard';
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
            >
                <ProductImage className='custom-image' />
                <ProductTitle className='white-text' />
                <ProductButtons className='custom-buttons' />
            </ProductCard>

        </div>
    )
}
