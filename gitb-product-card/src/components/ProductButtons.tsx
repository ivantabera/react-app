import React, { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface IPropsProductButtons {
    className?:string;
    style?: CSSProperties;
}
/* Componente de la botonera de productos */
export const ProductButtons = ( { className, style }: IPropsProductButtons ) => {

    const { increaseBy, count, maxCount } = useContext( ProductContext );

    /* Memorizar la funcion para evitar calcularlos cada renderizado, 
    esto nos permite optimizar el tiempo de carga */
    const isMaxReached = useCallback( 
        () => !!maxCount && count === maxCount,
        [count,maxCount],
    );

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
                    className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} 
                    onClick={ () => increaseBy(+1) }
                >
                    +
                </button>

            </div>
    )
}