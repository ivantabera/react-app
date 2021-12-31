import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo  from '../logo.svg';
/* archivo de rutas para hacerlos de manera dinamica */
import { routes } from './Routes';

export const Navigation = () => {

    /* hacer los NavLink de manera dinamica */
    const dinamicNavLink = routes.map((navlink) => 
        <li key={navlink.to}>
            <NavLink 
                to={navlink.to} 
                className={ ( {isActive} ) => isActive ? 'nav-active' : '' }
            >
                {navlink.name}
            </NavLink>
        </li>
    );

    /* hcer los route dinamicos  */
    const dinamicRoute = routes.map( (route) => 
        <Route 
            key={route.to}
            path={route.path} 
            element={ <route.Component/> } 
        />
    )

    return (
        <BrowserRouter>

            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo-react" />
                    <ul>
                        { dinamicNavLink }
                    </ul>
                </nav>

                <Routes>
                    { dinamicRoute }
                    <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                </Routes>
            </div>

        </BrowserRouter>
    )
}
