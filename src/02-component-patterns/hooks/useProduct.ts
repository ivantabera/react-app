import { useEffect, useRef, useState } from "react";
import { IProduct, IOnChangeArgs, InitialValues } from '../interfaces/interfacesProductCard';

interface IUseProductArgs  {
    product:IProduct,
    onChange?: (args:IOnChangeArgs) => void;
    value?: number;
    initialValues?:InitialValues;
}

export const useProduct = ( {onChange, product, value  = 0, initialValues }:IUseProductArgs ) => {

    const [count, setCount] = useState<number>( initialValues?.count || value );
    
    const isMounted = useRef(false);

    /* Funcion que no permite bajar del 0 */
    const increaseBy = ( value:number ) => {

        let newValue = Math.max( count + value, 0 ) ;

        /* Validar si el initialValues viene definido con la propiedad maxCount y ejecutar el math.min */
        if (initialValues?.maxCount) {
            /* Tomara el valor mas pequeño en este caso initialvalues viene con un valor fijo y en 
            algun momento sera el mas pequeño ahi es donde frena nuestra ejecucion */
            newValue = Math.min( newValue, initialValues.maxCount ) ;
        }

        setCount( newValue );

        /* Evaluamos que onChange venga con algun valor de lo contrario no se ejecutara */
        onChange && onChange({ count:newValue, product })
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        setCount(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])
    
    return {
        increaseBy,
        count
    }
}
