import { lazy, LazyExoticComponent } from "react";

/* las paginas importadas son por si queremos que una no se cargue por medio 
    del lazyload la pnemos en el Component de routes  */
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

/* Definimos una interface para saber como queremos nuestra ruta */
interface Route {
    to:string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
};

/* Definimos un componente que sea cargado bajo demanda */
const lazy1 = ( lazy( () => import('../01-lazyload/pages/LazyPage1') ));
const Lazy2 = ( lazy( () => import('../01-lazyload/pages/LazyPage2') ));
const Lazy3 = ( lazy( () => import('../01-lazyload/pages/LazyPage3') ));

/* Preparamos nuestras rutas para hacerlas dinamicas en nuestro componente Navigation */
export const routes:Route[] = [

    {
        to:'/lazy1',
        path:'lazy1',
        Component:lazy1,
        name:'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component:Lazy2,
        name:'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component:Lazy3,
        name:'Lazy-3'
    }
];