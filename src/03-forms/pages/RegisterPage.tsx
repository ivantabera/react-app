import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name:'',
        email:'',
        password1:'',
        password2:'',
    });

    const { name, email, password1, password2 } = registerData;

    const handleInputChange = ( event:ChangeEvent<HTMLInputElement> ) => {
        console.log('event', event.target.value)

        setRegisterData({
            ...registerData,
            [ event.target.name ]: event.target.value
        })
    };

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log( registerData );
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
                />
                
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    name="password1"
                    type="password" 
                    placeholder="Password"
                    value={ password1 }
                    onChange={ handleInputChange }
                />

                <input 
                    name="password2"
                    type="password" 
                    placeholder="Repeat Password"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button type="submit">Create</button>

            </form>
        </div>
    )
};
