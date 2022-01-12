import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";



/* Imagen del producto */
export const ProductImage = ( { img = '' } ) => {

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
        <img className={style.productImg} src={ imgToShow } alt="Product Image" />
    )
};