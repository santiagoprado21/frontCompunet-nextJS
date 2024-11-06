export interface Product {
    //id: string
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    category: 'deporte' | 'hogar' | 'automotor' | 'mascotas';
}

export type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';
