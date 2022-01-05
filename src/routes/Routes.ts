import { lazy, LazyExoticComponent } from "react";

/* las paginas importadas son por si queremos que una no se cargue por medio 
    del lazyload la pnemos en el Component de routes  */
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { LazyLayout } from '../01-lazyload/layout/LazyLayout';

type JSXComponent = () => JSX.Element;

/* Definimos una interface para saber como queremos nuestra ruta */
interface Route {
    to:string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
};

/* Definimos un componente que sea cargado bajo demanda */
/* Renombramos el chunk para verlo en la red/network de nuestro navegador */
// const lazy1 = ( lazy( () => import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1') ));
// const Lazy2 = ( lazy( () => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2') ));
// const Lazy3 = ( lazy( () => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3') ));

const noLazy = lazy( ()=> import( /* webpackChunkName: "NoLazyPage" */ '../01-lazyload/pages/NoLazyLoadComponent' ) );

/* Preparamos nuestras rutas para hacerlas dinamicas en nuestro componente Navigation */
export const routes:Route[] = [

    {
        path:'/lazylayout/*',
        to:'/lazyLayout/',
        Component:LazyLayout,
        name:'Lazy-Layout'
    },
    {
        path:'/nolazy',
        to:'noLazy',
        Component:noLazy,
        name:'No-Lazy'
    }/* ,
    {
        to:'/lazy3',
        path:'lazy3',
        Component:Lazy3,
        name:'Lazy-3'
    } */
];