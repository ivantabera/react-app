import { Formik, Form } from "formik";
import { MyTextInput } from "../components";

import formJson from '../data/custom-form.json';

const InitialValues:{ [key:string]:any } = {};

for (const input of formJson) {
    InitialValues[input.name] = input.value 
}

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik 
                initialValues={ InitialValues } 
                onSubmit={ values => {
                    console.log('values', values)
                } }
            >

                {
                    (formik) => (

                        <Form noValidate>
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
