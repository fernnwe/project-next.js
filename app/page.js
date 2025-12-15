import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Tienda la gata</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link href={`/product/${product.id}`}>Ver info</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
