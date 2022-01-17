import { IProduct } from "../interfaces/interfacesProductCard";

const product1 = {
    id:'1',
    title:'coffe mug',
    img:'./coffee-mug.png'
}

const product2 = {
    id:'2',
    title:'coffe mug 2',
    img:'./coffee-mug2.png'
}

export const products:IProduct[] = [ product1, product2 ];