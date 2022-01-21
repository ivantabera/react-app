import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo  from '../logo.svg';

import { LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';
import { RegisterPage } from '../03-forms/pages/RegisterPage';


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
                                to="/lazypage2" 
                                className={ ( {isActive} ) => isActive ? 'nav-active' : '' }
                            >
                                Lazy page 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/lazypage3" 
                                className={ ( {isActive} ) => isActive ? 'nav-active' : '' }
                            >
                                Lazy page 3
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={ <RegisterPage/> } />
                    <Route path="lazypage2" element={ <LazyPage2/> } />
                    <Route path="lazypage3" element={ <LazyPage3/> } />
                    <Route path="register" element={ <Navigate to="register" replace /> } />
                </Routes>
            </div>

        </BrowserRouter>
    )
}
