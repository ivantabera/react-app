import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

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

                            <MyTextInput label={'First name'} name={'firstName'} placeholder='Ivan' />
                            
                            <MyTextInput label={'Last name'} name={'lastName'} placeholder='tabera' />
                            
                            <MyTextInput label={'Email'} name={'email'} placeholder='ivantabera@gmail.com' />

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
