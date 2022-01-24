import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { formData, handleInputChange, name, email, password1, password2, resetForm, isValidEmail } = useForm({
        name:'',
        email:'',
        password1:'',
        password2:'',
    });

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log( formData );
    };  

    return (
        <div>
            <h1>Register page</h1>

            <form onSubmit={ onSubmit }>

                <input 
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={ name }
                    onChange={ handleInputChange }
                    className={ `${name.trim().length <= 0 && "has-error"}` }
                />
                { name.trim().length <= 0 && <span>Este campo es requerido</span> }
                
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    value={ email }
                    onChange={ handleInputChange }
                    className={ `${ !isValidEmail(email) && "has-error" }` }
                />
                { !isValidEmail(email) && <span>El correo es invalido</span> }

                <input 
                    name="password1"
                    type="password" 
                    placeholder="Password"
                    value={ password1 }
                    onChange={ handleInputChange }
                    className={ `${password1.trim().length <= 5 && "has-error" }` }
                />
                { password1.trim().length === 0 && <span>Este campo es requerido</span>  }
                { password1.trim().length < 5 && <span>La contraseña debe tener más de 6 caracteres</span> }

                <input 
                    name="password2"
                    type="password" 
                    placeholder="Repeat Password"
                    value={ password2 }
                    onChange={ handleInputChange }
                />
                {  password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }

                <button type="submit">Create</button>

                <button onClick={ resetForm }>Reset</button>

            </form>
        </div>
    )
};
