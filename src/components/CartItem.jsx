import { useDispatch, useSelector } from "react-redux";
import { remove, qtyDecrement, qtyIncrement } from "../redux/carts/actions";
import {
  qtyDecrement as pQtyDecrement,
  qtyIncrement as pQtyIncrement,
} from "../redux/products/actions";

export default function CartItem({ cart }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === cart.productId);

  const handleRemoveCartItem = (cartId) => {
    dispatch(remove(cartId));
    dispatch(pQtyIncrement(product.id, cart.qty));
  };

  const handleIncrementCartItem = (productId, cartId) => {
    dispatch(qtyIncrement(cartId, 1));
    dispatch(pQtyDecrement(productId, 1));
  };

  const handleDecrementCartItem = (productId, cartId) => {
    dispatch(qtyDecrement(cartId, 1));
    dispatch(pQtyIncrement(productId, 1));
  };
  return (
    <>
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          <img className="lws-cartImage" src={product.image} alt="product" />

          <div className="space-y-2">
            <h4 className="lws-cartName">{product.title}</h4>
            <p className="lws-cartCategory">{product.category}</p>
            <p>
              BDT <span className="lws-cartPrice">{product.price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <button
              className="lws-incrementQuantity"
              disabled={product.qty < 1}
              onClick={() => handleIncrementCartItem(product.id, cart.id)}
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{cart.qty}</span>
            <button
              className="lws-decrementQuantity"
              onClick={() => handleDecrementCartItem(product.id, cart.id)}
            >
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>

          <p className="text-lg font-bold">
            BDT{" "}
            <span className="lws-calculatedPrice">{cart.qty * cart.price}</span>
          </p>
        </div>

        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            className="lws-removeFromCart"
            onClick={() => handleRemoveCartItem(cart.id)}
          >
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}
