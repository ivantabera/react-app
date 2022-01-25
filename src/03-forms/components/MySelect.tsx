import { useField } from 'formik';

interface Props{
    label:string;
    name:string;
    placeholder?:string;
    [x:string]:any;
}

export const MySelect = ( { label, ...props }:Props ) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select className='text-input' { ...field } { ...props } />
            { meta.error && meta.touched && <span className='error'> { meta.error } </span> }
        </>
    );
};
