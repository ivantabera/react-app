import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

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
                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle title={'hola mundo'} />
                    <ProductButtons increaseBy={function (value: number): void {
                        throw new Error('Function not implemented.');
                    } } count={0} />
                </ProductCard>

                {/* Compound Component Patther forma 2 */}
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={'hola mundo'} />
                    <ProductCard.Buttons 
                        increaseBy={function (value: number): void {
                            throw new Error('Function not implemented.');
                        } } 
                        count={0}/>
                </ProductCard>
            
            </div>
        </div>
    )
}
