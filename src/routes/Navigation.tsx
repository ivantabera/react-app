import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";

import logo  from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo-react" />
                    <ul>
                        <li>
                            <NavLink 
                                to="/register" 
                                className={ ( {isActive} ) => isActive ? 'nav-active' : '' }
                            >
                                Register Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-basic" 
                                className={ ( {isActive} ) => isActive ? 'nav-active' : '' }
                            >
                                Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-yup" 
                                className={ ( {isActive} ) => isActive ? 'nav-active' : '' }
                            >
                                Formik Yup
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={ <RegisterPage/> } />
                    <Route path="formik-basic" element={ <FormikBasicPage/> } />
                    <Route path="formik-yup" element={ <FormikYupPage/> } />
                    <Route path="register" element={ <Navigate to="register" replace /> } />
                </Routes>
            </div>

        </BrowserRouter>
    )
}
