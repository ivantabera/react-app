import { ProductCard as ProductCardHOC } from './ProductCard';

import { IPropsProductHOCProps } from '../interfaces/interfacesProductCard';

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";


export const ProductCard:IPropsProductHOCProps = Object.assign( ProductCardHOC, {
    Image:ProductImage,
    Title:ProductTitle,
    Buttons:ProductButtons
})