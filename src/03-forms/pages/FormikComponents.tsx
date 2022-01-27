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
                    email:'',
                    jobType:'',
                    terms:false
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
                        jobType:    yup.string()
                                        .notOneOf( ['it-jr'], 'Esta opcion no esta disponible')
                                        .required('Requerido'),
                        terms:      yup.boolean()
                                        .oneOf( [true], 'Debe aceptar terminos y condiciones' )
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

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Acepta los terminos y las condiciones
                            </label>
                            <ErrorMessage name='terms' component='span' />

                            <button type="submit">Create</button>

                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};
