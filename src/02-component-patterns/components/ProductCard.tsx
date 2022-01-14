import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from '../hooks/useProduct';
import { IProduct, IProductContextProps, IOnChangeArgs } from '../interfaces/interfacesProductCard';

import styles from "../styles/styles.module.css";


/* Creamos contexto para el producto  */
export const ProductContext = createContext( {} as IProductContextProps );

/* Proveedor para nuestro Compound Component Patther */
const { Provider } = ProductContext;

export interface IPropsProductCard {
    children: ReactElement | ReactElement[] ;
    product: IProduct;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: IOnChangeArgs ) => void
    value?: number
}

/* Componente hijo que recibe parametro */
export const ProductCard = ( { children ,product, className, style, onChange, value }: IPropsProductCard ) => {

    const {count, increaseBy} = useProduct( { onChange, product, value } );

    return (
        <Provider value={
            {
                count,
                increaseBy, 
                product
            }
        }>
            <div 
                className={` ${styles.productCard} ${className}`}
                style={style}
            >
                { children }
            </div>
        </Provider>
    )
}
