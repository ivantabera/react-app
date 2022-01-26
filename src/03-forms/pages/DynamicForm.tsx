import { Formik, Form } from "formik";
import { MyTextInput } from "../components";

import formJson from '../data/custom-form.json';

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik 
                initialValues={{
                    firstName:''
                }} 
                onSubmit={ values => {
                    console.log('values', values)
                } }
            >

                {
                    (formik) => (

                        <Form>
                            {
                                formJson.map( ( { label, name, placeholder, type, value } ) => {

                                    return (
                                        <MyTextInput 
                                            key={name}
                                            label={label} 
                                            name={name} 
                                            placeholder={placeholder}
                                            type={(type as any)}
                                        />
                                    )
                                })
                            }

                            <button type="submit">Enviar</button>
                        </Form>

                    )
                }

            </Formik>
        </div>
    );
};
