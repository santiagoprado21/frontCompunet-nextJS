import { Title } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";
import {notFound} from "next/navigation";

const seedProducts = initialData.products;


interface Props { 
    params:{
        id: string;
    }
}

export default function ({params}:Props){

    const {id} = params;
    const products = seedProducts.filter (product => product.category === id)

    const category = {
        'deporte':'Deporte',
        'hogar':'Hogar',
        'automotor':'Automotor',
        'mascotas':'Mascotas',

    }

    if(id === "casa"){
        notFound();
    }
    return (
       <>
       <Title 
       title = {`Productos de la categoria ${(category as any )[id]}`}
    subtitle = "Todos los productos"
    className = "mb-2"
       
       />

       <ProductGrid
       products={products}
       /> 
       
       
       </>
    )
}