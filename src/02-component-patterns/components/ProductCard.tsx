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

/* Componente hijo que recibe parametro */
export const ProductCard = ( { product }: Props ) => {

    const {count, increaseBy} = useProduct();

    return (
        <div className={style.productCard}>
            
            <img className={style.productImg} src={ product.img ? product.img : noImage } alt="Coffee Mug" />

            {/* Descripcion de la imagen */}
            <span className={style.productDescription}>{ product.title }</span>

            {/* Botonera de la imagen */}
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

        </div>
    )
}
