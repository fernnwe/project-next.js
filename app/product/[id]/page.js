import { products } from "../../../data/products";

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Producto no encontrado</p>;
  }

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </main>
  );
}
