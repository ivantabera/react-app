import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import style from "../styles/styles.module.css";

/* Componente de la botonera de productos */
export const ProductButtons = ( ) => {

    const {increaseBy, count} = useContext(ProductContext);

    return(
        <div className={style.buttonsContainer}>

                <button 
                    className={style.buttonMinus} 
                    onClick={ () => increaseBy(-1) }
                >
                    -
                </button>
                
                <div className={style.countLabel}>{count}</div>

                <button 
                    className={style.buttonAdd} 
                    onClick={ () => increaseBy(+1) }
                >
                    +
                </button>

            </div>
    )
}