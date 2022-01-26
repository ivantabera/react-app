import { Formik, Form } from "formik";
import { MyTextInput } from "../components";

import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';

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
                                formJson.map( ( { label, name, placeholder, type, options } ) => {

                                    if ( type === 'input' || type === 'email' || type === 'password' ) {
                                        return (
                                            <MyTextInput 
                                                key={name}
                                                label={label} 
                                                name={name} 
                                                placeholder={placeholder}
                                                type={(type as any)}
                                            />
                                        )
                                    } else if ( type === 'select' ) {
                                        return (
                                            <MySelect 
                                                key={name}
                                                label={label} 
                                                name={name}
                                            >
                                                <option value="">Select an option </option>
                                                {
                                                    options?.map( opt => (
                                                        <option key={opt.id} value={opt.id}>{opt.label}</option>
                                                    ) )
                                                }
                                            </MySelect>
                                        )
                                    }
                                    
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
