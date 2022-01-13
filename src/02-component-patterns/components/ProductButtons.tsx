import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface IPropsProductButtons {
    className?:string;
    style?: CSSProperties;
}
/* Componente de la botonera de productos */
export const ProductButtons = ( { className, style }: IPropsProductButtons ) => {

    const {increaseBy, count} = useContext(ProductContext);

    return(
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={ style }
        >

                <button 
                    className={styles.buttonMinus} 
                    onClick={ () => increaseBy(-1) }
                >
                    -
                </button>
                
                <div className={styles.countLabel}>{count}</div>

                <button 
                    className={styles.buttonAdd} 
                    onClick={ () => increaseBy(+1) }
                >
                    +
                </button>

            </div>
    )
}