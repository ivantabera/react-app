import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface IPropsProductImage {
    img?: string;
    className? : string;
    style?: CSSProperties;
}

/* Imagen del producto */
export const ProductImage = ( { img, className, style }: IPropsProductImage ) => {

    const { product } = useContext(ProductContext);
    let imgToShow = img;

    if (img) {
        imgToShow = img;
    } else if (product.img){
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img 
            alt="Product" 
            className={` ${styles.productImg} ${className}`} 
            src={ imgToShow } 
            style={ style }
        />
    )
};