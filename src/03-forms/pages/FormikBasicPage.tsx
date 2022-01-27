import { useFormik, FormikErrors } from 'formik';

import '../styles/styles.css';

interface FormValues{ 
    firstName:string, 
    lastName:string, 
    email:string
}

export const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email }:FormValues ) => {
        
        const errors:FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'Required';
        } else if ( firstName.length >= 15 ){
            errors.firstName = 'Must be 15 characteres or less';
        }

        if (!lastName) {
            errors.lastName = 'Required';
        } else if ( lastName.length >= 10 ){
            errors.lastName = 'Must be 10 characteres or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors
    };

    /* 
        handleChange : Se ejecuta si hay cambios en el input
        values : obtener el valor del input 
        handleSubmit : Se ejecuta si hay algun submit del formulario
        errors : nos informa de los errores del formulario
        touched : se ejecuta si algun input fue tocado
        handleBlur : se ejecuta si algun input fue manipulado o si se salio de el 
    */
    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        }, 
        onSubmit: values => {
            console.log('values', values)
        },
        validate
    })

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={ handleSubmit }>

                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    onChange={ handleChange}
                    onBlur={ handleBlur }
                    value={ values.firstName }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    onChange={ handleChange}
                    onBlur={ handleBlur }
                    value={ values.lastName }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={ handleChange}
                    onBlur={ handleBlur }
                    value={ values.email }
                />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type="submit">Create</button>
                
            </form>
        </div>
    );
};
