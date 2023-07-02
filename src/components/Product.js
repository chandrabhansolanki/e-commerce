import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeItem } from "../reducer/resumeReducer";

const Product = (props) => {
  const cart = useSelector((state) => state?.resumeReducer?.cart);

  const dispatch = useDispatch();
  const { item, key } = props;
  console.log(cart, item, "hello===");
  const addItemToCartHandler = (item) => {
    dispatch(addCartItems(item));
  };
  const removeItemToCartHandler = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div className="product-container">
        <div className="image-container">
          <img src={item.image} />
        </div>
        <div>
          <h1 className="product-item-title">{item.title}</h1>
        </div>
        <div className="button-container">
          {cart.some((data) => data.id === item.id) ? (
            <button
              onClick={() => removeItemToCartHandler(item.id)}
              className="removetocart"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={() => addItemToCartHandler(item)}
              className="addtocart"
            >
              Add to Cart
            </button>
          )}

          <p>{`Rs ${item.price}`}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
