import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:''
                }}
                onSubmit={ (values) => {
                    console.log('values', values)
                } }
                validationSchema={
                    yup.object({
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
                }
            >
                
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name='firstName' component='span' />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name='lastName' component='span' />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name='email' component='span' />

                            <button type="submit">Create</button>

                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};
