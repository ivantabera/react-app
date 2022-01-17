import { useState } from "react";
import { IProduct, IProductInCart } from "../interfaces/interfacesProductCard";

export const useShoppingCart = (  ) => {

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

    return{
        onProductCountChange,
        shoppingCart
    }
}
