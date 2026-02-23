import { products } from "../data/data";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;