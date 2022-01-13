import { IPropsProductButtons } from "../components/ProductButtons";
import { IPropsProductCard } from "../components/ProductCard";
import { IPropsProductImage } from "../components/ProductImage";
import { IPropsProductTitle } from '../components/ProductTitle';

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

export interface IPropsProductHOCProps {
    ( Props : IPropsProductCard ) : JSX.Element;
    Image: ( Props : IPropsProductImage ) => JSX.Element;
    Title: ( Props : IPropsProductTitle  ) => JSX.Element
    Buttons: ( Props : IPropsProductButtons ) => JSX.Element;
}