import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface IPropsProductTitle {
    title?: string;
    className?: string;
    style?: CSSProperties;
}
/* Descripcion del producto */
export const ProductTitle = ( { title, className, style }: IPropsProductTitle ) => {

    const { product } = useContext(ProductContext);

    return (
        <span 
            className={` ${styles.productDescription} ${className}`}
            style={ style }
        >
            { title ? title : product.title }
        </span>
    )
};