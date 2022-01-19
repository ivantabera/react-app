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

    /* Funcion para incrementar o decrementar */
    const increaseBy = ( value:number ) => {

        /* Tomara el valor mas grande y se asignara a la  variable, si el valor es menor a 0 se asignara por defecto el 0 */
        let newValue = Math.max( count + value, 0 ) ;

        /* Validar si el initialValues viene definido con la propiedad maxCount */
        if (initialValues?.maxCount) {
            /* Tomara el valor mas pequeño y se asignara a la  variable  */
            newValue = Math.min( newValue, initialValues.maxCount ) ;
        }

        setCount( newValue );

        /* Evaluamos que onChange venga con algun valor de lo contrario no se ejecutara */
        onChange && onChange({ count:newValue, product })
    }

    const reset = () => {
        setCount( initialValues?.count || value );
    }

    /* Mostrar el initialValue en el componente */
    useEffect(() => {
        if( !isMounted.current ) return;
        setCount(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])
    
    return {
        count,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count,
        maxCount:initialValues?.maxCount,

        increaseBy,
        reset
    }
}
