import { createContext, CSSProperties } from "react";
import { useProduct } from '../hooks/useProduct';
import { IProduct, IProductContextProps, IOnChangeArgs, InitialValues, IProductCardHandlers } from '../interfaces/interfacesProductCard';

import styles from "../styles/styles.module.css";


/* Creamos contexto para el producto  */
export const ProductContext = createContext( {} as IProductContextProps );

/* Proveedor para nuestro Compound Component Patther */
const { Provider } = ProductContext;

export interface IPropsProductCard {
    product: IProduct;
    // children: ReactElement | ReactElement[] ;
    children:( args: IProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: IOnChangeArgs ) => void; 
    value?: number; 
    initialValues?:InitialValues;
}

/* Componente hijo que recibe parametro */
export const ProductCard = ( { children ,product, className, style, onChange, value, initialValues }: IPropsProductCard ) => {

    const {count, increaseBy, maxCount, isMaxCountReached, reset} = useProduct( { onChange, product, value, initialValues } );

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
                { children({
                    count:count,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset

                }) }
            </div>
        </Provider>
    )
}
