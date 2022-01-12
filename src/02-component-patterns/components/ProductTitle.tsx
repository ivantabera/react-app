import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import style from "../styles/styles.module.css";

/* Descripcion del producto */
export const ProductTitle = ( { title = '' } ) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={style.productDescription}>
            { title ? title : product.title }
        </span>
    )
};