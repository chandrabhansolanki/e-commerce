import './CartItem.css'
import { Delete } from "@mui/icons-material";
import {useDispatch} from 'react-redux'
import { removeItem } from '../reducer/resumeReducer';

const CartItem = (props) => {
    const dispatch= useDispatch()
  const { item } = props;
  const removeItemHandler = (id)=> {
dispatch(removeItem(id))
  }
  return (
    <>
      <div className="cart-detail-container">
        <div className="cart-detail">
          <img src={item.image} />
          <div className='cart-detail-items'>
            <h1>{item.title}</h1>
            <p>{`Rs ${item.price}`}</p>
          </div>
        </div>
        <div>
          <button onClick={()=>removeItemHandler(item.id)} className='cartitem-delete-button'>
            <Delete />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
