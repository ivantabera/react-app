import "../styles/styles.css";

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register page</h1>

            <form>

                <input 
                    type="text"
                    placeholder="Name"
                />
                
                <input 
                    type="email" 
                    placeholder="Email" 
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                />

                <input 
                    type="password2" 
                    placeholder="Repeat Password" 
                />

                <button type="submit">Create</button>

            </form>
        </div>
    )
};
