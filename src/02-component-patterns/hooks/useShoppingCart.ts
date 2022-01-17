import { useState } from "react";
import { IProduct, IProductInCart } from "../interfaces/interfacesProductCard";

export const useShoppingCart = (  ) => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: IProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count:number, product:IProduct }) => {
        
        setShoppingCart( oldShoppingCart => {

            const productInCart:IProductInCart = oldShoppingCart[product.id] || { ...product, count:0 };

            if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart, 
                    [product.id]: productInCart
                }
            }

            const { [product.id]:toDelete, ...rest} = oldShoppingCart;
            return { ...rest };

            /* Eliminar el objeto cuando su count llegue a 0 */
        /*  if (count === 0) {
                const { [product.id]:toDelete, ...rest} = oldShoppingCart;
                return {...rest}
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            } */
        })
    }

    return{
        onProductCountChange,
        shoppingCart
    }
}
