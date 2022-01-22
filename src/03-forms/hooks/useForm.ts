import { ChangeEvent, useState } from "react";

export const useForm = <T>( initState:T ) => {

    const [formData, setFormData] = useState( initState );

    const handleInputChange = ( event:ChangeEvent<HTMLInputElement> ) => {
        console.log('event', event.target.value)

        setFormData({
            ...formData,
            [ event.target.name ]: event.target.value
        })
    };

    return {
        ...formData,
        formData,
        handleInputChange
    }

};
