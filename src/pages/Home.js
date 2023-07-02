import { products } from "../data";
import Product from "../components/Product";
import './Home.css'
const Home = () => {
  return (
    <>
      <div className="product-main-container">
        {products.map((item) => {
          return <Product id={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
