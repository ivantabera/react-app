import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from '../hooks/useProduct';

interface Props {
    product: Product
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

/* Imagen del producto */
export const ProductImage = ( { img = '' } ) => {
    return (
        <img className={style.productImg} src={ img ? img : noImage } alt="Product Image" />
    )
};

/* Descripcion del producto */
export const ProductTitle = ( { title = '' } ) => {
    return (
        <span className={style.productDescription}>{ title }</span>
    )
};

/* interface de como va recibir las variables nuestro componente */
interface ProductButtonsProps {
    increaseBy:(value: number) => void;
    count: number;
}

/* Componente de la botonera de productos */
export const ProductButtons = ( {increaseBy, count}:ProductButtonsProps ) => {
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
export const ProductCard = ( { product }: Props ) => {

    const {count, increaseBy} = useProduct();

    return (
        <div className={style.productCard}>
            
            {/* Imagen del producto */}
            <ProductImage img={ product.img } />

            {/* Descripcion de la imagen */}
            <ProductTitle title={ product.title } />

            {/* Botonera de la imagen */}
            <ProductButtons 
                increaseBy={increaseBy} 
                count={count} 
            />

        </div>
    )
}
