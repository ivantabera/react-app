import '../styles/styles.css';

export const FormikBasicPage = () => {

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate>

                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" />
                <span>Este campo es requerido</span>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" />
                <span>Este campo es requerido</span>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <span>Verifica el formato del email</span>

                <button type="submit">Create</button>
                
            </form>
        </div>
    );
};
