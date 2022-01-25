import { useField } from 'formik';

interface Props{
    label:string;
    name:string;
    [x:string]:any;
}

export const MyCheckbox = ( { label, ...props }:Props ) => {

    const [field, meta] = useField({ ...props, type:'checkbox' });

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            { meta.error && meta.touched && <span className='error'> { meta.error } </span> }
        </>
    );
};
