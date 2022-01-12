import { ReactElement } from "react";

export interface IPropsProductCard {
    children: ReactElement | ReactElement[] ;
    product: IProduct;
}

export interface IProduct {
    id: string;
    title: string;
    img?: string;
}

export interface IProductContextProps {
    count:number;
    increaseBy: (value: number) => void;
    product: IProduct;
}