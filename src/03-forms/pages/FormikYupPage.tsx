import { useFormik } from 'formik';
import * as yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    /* 
        handleChange : Se ejecuta si hay cambios en el input
        values : obtener el valor del input 
        handleSubmit : Se ejecuta si hay algun submit del formulario
        errors : nos informa de los errores del formulario
        touched : se ejecuta si algun input fue tocado
        handleBlur : se ejecuta si algun input fue manipulado o si se salio de el 

        -*-*-*-*-*-*-*-*-*-*-
        Con esta propiedad reducimos el codigo bastante ya que nos envia las 
        propiedades del campo en un objeto ejecutando el nombre del campo para que 
        identifique sus validaciones del yup.
        Estas son las propiedades del hook que nos ahorramos por este objeto (handleChange, values, handleBlur)
        -*-*-*-*-*-*-*-*-*-*-
        getFieldProps : envia las propiedades de los campos
    */
    const { 
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
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
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),
            email:      yup.string()
                        .email('Formato de email es invalido')
                        .required('Requerido'),
        })
    })

    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={ handleSubmit }>

                <label htmlFor="firstName">First Name</label>
                <input type="text" { ...getFieldProps('firstName') } />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" { ...getFieldProps('lastName') } />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email</label>
                <input type="email" { ...getFieldProps('email') } />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type="submit">Create</button>
                
            </form>
        </div>
    );
};
