import { useFormik } from 'formik';
import * as yup from 'yup';

import '../styles/styles.css';

interface FormValues{ 
    firstName:string, 
    lastName:string, 
    email:string
}

export const FormikYupPage = () => {

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
        validationSchema: yup.object({
            firstName:  yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),
            lastName:   yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos').
                        required('Requerido'),
            email:      yup.string()
                        .email('Formato de email es invalido').
                        required('Required'),
        })
    })

    return (
        <div>
            <h1>Formik Yup</h1>

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
