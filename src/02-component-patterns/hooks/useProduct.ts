import { useState } from "react";
import { IProduct, IOnChangeArgs } from '../interfaces/interfacesProductCard';

interface IUseProductArgs  {
    product:IProduct,
    onChange?: (args:IOnChangeArgs) => void;
}

export const useProduct = ( {onChange,product}:IUseProductArgs ) => {

    const [count, setCount] = useState(0);

    /* Funcion que no permite bajar del 0 */
    const increaseBy = ( value:number ) => {
        const newValue = Math.max( count + value, 0 ) ;
        setCount( newValue );
    }

    /* Evaluamos que onChange venga con algun valor de lo contrario no se ejecutara */
    onChange && onChange({ count, product })

    return {
        increaseBy,
        count
    }
}
