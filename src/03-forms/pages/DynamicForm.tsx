import { Formik, Form } from "formik";
import { MyTextInput } from "../components";

import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const InitialValues:{ [key:string]:any } = {};
const requiredFiles:{ [key:string]:any } = {};

for (const input of formJson) {
    InitialValues[input.name] = input.value;
    
    if ( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
    }
    
    requiredFiles[input.name] = schema;
}

const validationSchema = Yup.object( {...requiredFiles} );


export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik 
                initialValues={ InitialValues } 
                onSubmit={ values => {
                    console.log('values', values)
                } }
                validationSchema={ validationSchema }
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
