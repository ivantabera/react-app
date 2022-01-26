import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { MyTextInput } from '../components/index';

import "../styles/styles.css";

export const RegisterFormik = () => {

    return (
        <div>
            <h1>Formik Register</h1>

            <Formik
                initialValues={{
                    name:'',
                    email:'',
                    password1:'',
                    password2:''
                }}
                onSubmit={ (values) => {
                    console.log('values', values)
                } }
                validationSchema={
                    yup.object({
                        name:       yup.string()
                                        .min(2, 'El nombre debe tener mas de 2 caracteres')
                                        .max(15, 'El nombre debe tener menos de 15 caracteres')
                                        .required('Requerido'),
                        email:      yup.string()
                                        .email('Formato de email es invalido')
                                        .required('Requerido'),
                        password1:   yup.string()
                                        .min(6, 'El password debe tener mas de 6 caracteres')
                                        .required('Requerido'),
                        password2:   yup.string()
                                        .oneOf(
                                            [ yup.ref('password1') ],
                                            'El password debe coincidir'
                                        )
                                        .required('Requerido')
                    })
                }
            >

                {
                    ({handleReset}) => (
                        <Form>

                            <MyTextInput label={"Name"} name={"name"} />
                            <MyTextInput label={"Email"} name={"email"} />
                            <MyTextInput label={"Password"} name={"password1"} type='password' />
                            <MyTextInput label={"Confirm Password"} name={"password2"} type='password' />

                            <button type="submit">Create</button>

                            <button type='reset' onClick={ handleReset }>Reset</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
};
