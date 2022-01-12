import { createContext } from "react";
import { useProduct } from '../hooks/useProduct';
import { IProductContextProps, IPropsProductCard } from "../interfaces/interfacesProductCard";

import style from "../styles/styles.module.css";


/* Creamos contexto para el producto  */
export const ProductContext = createContext( {} as IProductContextProps );

/* Proveedor para nuestro Compound Component Patther */
const { Provider } = ProductContext;


/* Componente hijo que recibe parametro */
export const ProductCard = ( { children ,product }: IPropsProductCard ) => {

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
