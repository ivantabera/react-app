import { ReactElement } from "react";

export interface PropsProductCard {
    children: ReactElement | ReactElement[] ;
    product: Product;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    count:number;
    increaseBy: (value: number) => void;
    product: Product;
}