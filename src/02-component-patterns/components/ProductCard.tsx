import { createContext } from "react";
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, PropsProductCard } from "../interfaces/interfacesProductCard";

import style from "../styles/styles.module.css";


/* Creamos contexto para el producto  */
export const ProductContext = createContext( {} as ProductContextProps );

/* Proveedor para nuestro Compound Component Patther */
const { Provider } = ProductContext;


/* Componente hijo que recibe parametro */
export const ProductCard = ( { children ,product }: PropsProductCard ) => {

    const {count, increaseBy} = useProduct();

    return (
        <Provider value={
            {
                count,
                increaseBy, 
                product
            }
        }>
            <div className={style.productCard}>
                { children }
            </div>
        </Provider>
    )
}
