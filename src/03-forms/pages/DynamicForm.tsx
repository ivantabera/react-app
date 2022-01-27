import { Formik, Form } from "formik";
import { MyTextInput } from "../components";

import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const InitialValues:{ [key:string]:any } = {};
const requiredFiles:{ [key:string]:any } = {};

/* Iterar con forof  la data  para crear la validacion dinamica */
for (const typeForm of formJson) {
    
    /* llenar el initialValues le ponemos su propiedad que apunte al valor */
    InitialValues[typeForm.name] = typeForm.value;
    
    /* Si no hay validaciones continuar */
    if ( !typeForm.validations ) continue;


    let schema = Yup.string()

    /* iteramos las validaciones  */
    for (const rule of typeForm.validations) {
        /* si alguna validacion es igual a required la vamos almacenar en la variable en cada iteracion */
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
    }
    
    /* llenar el requiredFiles que tengan una validacion en nuestra variable schema */
    requiredFiles[typeForm.name] = schema;
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
