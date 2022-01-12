import { createContext, ReactElement } from "react";
import { useProduct } from '../hooks/useProduct';
import { IProduct, IProductContextProps } from "../interfaces/interfacesProductCard";

import style from "../styles/styles.module.css";


/* Creamos contexto para el producto  */
export const ProductContext = createContext( {} as IProductContextProps );

/* Proveedor para nuestro Compound Component Patther */
const { Provider } = ProductContext;

export interface IProps {
    children: ReactElement | ReactElement[] ;
    product: IProduct;
    className: string;
}

/* Componente hijo que recibe parametro */
export const ProductCard = ( { children ,product, className }: IProps ) => {

    const {count, increaseBy} = useProduct();

    return (
        <Provider value={
            {
                count,
                increaseBy, 
                product
            }
        }>
            <div className={` ${style.productCard} ${className}`}>
                { children }
            </div>
        </Provider>
    )
}
