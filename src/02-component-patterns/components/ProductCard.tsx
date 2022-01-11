import { createContext, ReactElement, useContext } from "react";
import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from '../hooks/useProduct';

interface Props {
    children: ReactElement | ReactElement[] ;
    product: Product;
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

interface ProductContextProps {
    count:number;
    increaseBy: (value: number) => void;
    product: Product;
}

/* Creamos contexto para el producto  */
const ProductContext = createContext( {} as ProductContextProps );

/* Proveedor para nuestro Compound Component Patther */
const { Provider } = ProductContext;


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

/* Descripcion del producto */
export const ProductTitle = ( { title = '' } ) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={style.productDescription}>
            { title ? title : product.title }
        </span>
    )
};


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

/* Componente hijo que recibe parametro */
export const ProductCard = ( { children ,product }: Props ) => {

    const {count, increaseBy} = useProduct();

    return (
        <Provider value={
            {
                count,
                increaseBy, 
                product
            }
        }>
            <div className={style.productCard}>
                { children }
            </div>
        </Provider>
    )
}


ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;