import { useEffect, useRef, useState } from "react";
import { IProduct, IOnChangeArgs } from '../interfaces/interfacesProductCard';

interface IUseProductArgs  {
    product:IProduct,
    onChange?: (args:IOnChangeArgs) => void;
    value?: number
}

export const useProduct = ( {onChange, product, value  = 0 }:IUseProductArgs ) => {

    const [count, setCount] = useState( value );
    
    const isControlled = useRef(!!onChange)

    /* Funcion que no permite bajar del 0 */
    const increaseBy = ( value:number ) => {

        /* Funcion que nos regresa el incremento o el decremento */
        if (isControlled.current && onChange ) {
            return onChange({ count:value, product})
        }

        const newValue = Math.max( count + value, 0 ) ;
        setCount( newValue );

        /* Evaluamos que onChange venga con algun valor de lo contrario no se ejecutara */
        onChange && onChange({ count:newValue, product })
    }

    useEffect(() => {
        setCount(value);
    }, [value])
    
    return {
        increaseBy,
        count
    }
}
