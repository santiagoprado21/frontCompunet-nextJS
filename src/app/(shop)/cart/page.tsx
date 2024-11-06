import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function CartPage() {
  const productsInCart = [
    initialData.products[0],
    initialData.products[5],
    initialData.products[2],
  ];

  // Calcular el total de productos y el precio total
  const totalItems = productsInCart.length;
  const totalPrice = productsInCart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito " />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Sección de Productos */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más Ítems</span>
            <Link href="/" className="underline mb-5">
              Continúa Comprando
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Sección de Resumen */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Resumen</h2>

            <div className="grid grid-cols-2 mb-4">
              <span>No. de Productos</span>
              <span className="text-right">{totalItems}</span>
            </div>

            <div className="grid grid-cols-2 mb-4">
              <span>Total</span>
              <span className="text-right font-semibold">${totalPrice}</span>
            </div>

            <button className="w-full text-bottom bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600">
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
