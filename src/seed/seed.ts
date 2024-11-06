interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  category: "deporte" | "hogar" | "automotor" | "mascotas";
}

interface SeedData {
  products: SeedProduct[];
}
export const initialData: SeedData = {
  products: [
    {
      description:
        "Elegante lavamanos para el hogar, ideal para añadir un toque moderno a cualquier baño.",
      images: ["lavamanosHogar.jpg"],
      inStock: 7,
      price: 120,
      slug: "lavamanos_moderno_hogar",
      tags: ["lavamanos", "hogar", "baño"],
      title: "Lavamanos Moderno",
      category: "hogar",
    },
    {
      description:
        "Tenis deportivos con soporte adicional, diseñados para mejorar el rendimiento en cualquier actividad física.",
      images: ["tenisDeportivos.jpg"],
      inStock: 5,
      price: 85,
      slug: "tenis_deportivos",
      tags: ["tenis", "deporte", "calzado"],
      title: "Tenis Deportivos",
      category: "deporte",
    },
    {
      description:
        "Spoiler aerodinámico para mejorar el rendimiento del vehículo y darle un toque moderno.",
      images: ["spoilerAutomotor.jpg"],
      inStock: 4,
      price: 300,
      slug: "spoiler_automotriz",
      tags: ["spoiler", "automotor", "accesorio"],
      title: "Spoiler Aerodinámico",
      category: "automotor",
    },
    {
      description:
        "Remedio natural para mascotas, ayuda a mejorar el sistema digestivo y mantiene el pelaje brillante.",
      images: ["remedioMascotas.jpg"],
      inStock: 15,
      price: 20,
      slug: "remedio_natural_mascotas",
      tags: ["remedio", "mascotas", "salud"],
      title: "Remedio Natural para Mascotas",
      category: "mascotas",
    },
    {
      description:
        "Perfume suave y duradero especialmente diseñado para mascotas. Aroma fresco que elimina olores.",
      images: ["perfumeMascotas.jpg"],
      inStock: 50,
      price: 15,
      slug: "perfume_mascotas",
      tags: ["perfume", "mascotas", "aroma"],
      title: "Perfume para Mascotas",
      category: "mascotas",
    },
    {
      description:
        "Cama doble con diseño elegante y estructura de madera sólida, ideal para cualquier dormitorio.",
      images: ["camaHogar.jpg"],
      inStock: 10,
      price: 500,
      slug: "cama_doble_moderna",
      tags: ["cama", "hogar", "muebles"],
      title: "Cama Doble Moderna",
      category: "hogar",
    },
    {
      description:
        "Alimento balanceado para perros, enriquecido con proteínas y nutrientes esenciales.",
      images: ["comidaMascotas.jpg"],
      inStock: 150,
      price: 25,
      slug: "comida_perros",
      tags: ["comida", "mascotas", "perros"],
      title: "Comida para Perros",
      category: "mascotas",
    },
    {
      description:
        "Balón de baloncesto oficial, ideal para partidos y entrenamientos en interiores y exteriores.",
      images: ["balonBasket.jpg"],
      inStock: 17,
      price: 30,
      slug: "balon_basketball",
      tags: ["balón", "deporte", "baloncesto"],
      title: "Balón de Basketball",
      category: "deporte",
    },
    {
      description:
        "Aceite de motor de alta calidad para mejorar el rendimiento y proteger el motor de tu vehículo.",
      images: ["aceiteAutomotor.jpg"],
      inStock: 17,
      price: 40,
      slug: "aceite_motor",
      tags: ["aceite", "automotor", "motor"],
      title: "Aceite para Motor",
      category: "automotor",
    },
    {
      description:
        "Vitrina de madera con estantes ajustables, perfecta para exhibir objetos decorativos en el hogar.",
      images: ["vitrinaHogar.jpg"],
      inStock: 10,
      price: 150,
      slug: "vitrina_madera",
      tags: ["vitrina", "hogar", "decoración"],
      title: "Vitrina de madera",
      category: "hogar",
    },
  ],
};
