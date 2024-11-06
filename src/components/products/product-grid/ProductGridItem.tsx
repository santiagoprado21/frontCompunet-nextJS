import { Product } from "@/interfaces";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 bg-white hover:shadow-lg hover:ring-4 hover:ring-blue-300 ring-opacity-50">
      <div className="relative h-72 w-full">
        <Image
          src={`/products/${product.images[0]}`}
          alt={product.title}
          className="w-full h-full object-cover rounded-t-xl"
          layout="fill"
        />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-500 transition duration-200">
            {product.title}
          </h3>
        </Link>

        <span className="font-extrabold text-2xl text-blue-700">${product.price}</span>

        <Link href={`/product/${product.slug}`}>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md hover:shadow-lg">
            Ver Producto
          </button>
        </Link>
      </div>
    </div>
  );
};
