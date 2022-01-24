import { useFormik } from 'formik';

import '../styles/styles.css';

export const FormikBasicPage = () => {

    const { handleChange, values, handleSubmit } = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        }, 
        onSubmit: values => {
            console.log('values', values)
        }
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
                    value={ values.firstName }
                />
                <span>Este campo es requerido</span>

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    onChange={ handleChange}
                    value={ values.lastName }
                />
                <span>Este campo es requerido</span>

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={ handleChange}
                    value={ values.email }
                />
                <span>Verifica el formato del email</span>

                <button type="submit">Create</button>
                
            </form>
        </div>
    );
};
