import { QuantitySelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <img
          src={`/products/${product.images[0]}`}
          alt={product.title}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">$ {product.price}</p>
        <QuantitySelector quantity={2} />
        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-lg">{product.description}</p>
      </div>
    </div>
  );
}
