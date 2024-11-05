//product/<id>
import { GetServerSideProps } from 'next';
import { redirect } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ProductPageProps {
    product: Product | null;
    //will receive
}

function ProductPage({ product }: ProductPageProps) {
  
  // TODO change this to just appear when loading. It could't be "!product"
  if (!product) {
    return <div>Loading...</div>;
  }
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

async function getServerSideProps(context: GetServerSideProps) {
    //TO DO this is not being used
    const { id } = context.arguments;
  
  try {
    const response = await fetch(`https://API-back /products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const product = await response.json();
    return { props: { product } };
  } catch (error) {
    return { props: { product: null } };
  }
}

export default ProductPage;
