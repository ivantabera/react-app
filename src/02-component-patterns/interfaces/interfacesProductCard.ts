import { IProps as IPropsProductCard } from "../components/ProductCard";

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
    ({ children, product }: IPropsProductCard ) : JSX.Element;
    Image: ( { img } : { img? : string  } ) => JSX.Element;
    Title: ( { title }: { title?: string } ) => JSX.Element
    Buttons: () => JSX.Element;
    
}