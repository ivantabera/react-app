import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from '../hooks/useProduct';
import { IProduct, IProductContextProps, IOnChangeArgs, InitialValues } from '../interfaces/interfacesProductCard';

import styles from "../styles/styles.module.css";


/* Creamos contexto para el producto  */
export const ProductContext = createContext( {} as IProductContextProps );

/* Proveedor para nuestro Compound Component Patther */
const { Provider } = ProductContext;

export interface IPropsProductCard {
    // children: ReactElement | ReactElement[] ;
    children:() => JSX.Element;
    product: IProduct;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: IOnChangeArgs ) => void; 
    value?: number; 
    initialValues?:InitialValues;
}

/* Componente hijo que recibe parametro */
export const ProductCard = ( { children ,product, className, style, onChange, value, initialValues }: IPropsProductCard ) => {

    const {count, increaseBy, maxCount} = useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={
            {
                count,
                increaseBy, 
                product,
                maxCount
            }
        }>
            <div 
                className={` ${styles.productCard} ${className}`}
                style={style}
            >
                { children() }
            </div>
        </Provider>
    )
}
