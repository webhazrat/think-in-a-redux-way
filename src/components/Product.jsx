import { useDispatch } from "react-redux";
import { add } from "../redux/carts/actions";
import { qtyDecrement } from "../redux/products/actions";
export default function Product({ product }) {
  const dispatch = useDispatch();
  // add product to cart
  const handleAddToCart = (productId, price) => {
    dispatch(add(productId, price, 1));
    dispatch(qtyDecrement(productId, 1));
  };
  return (
    <>
      <div className="lws-productCard">
        <img className="lws-productImage" src={product.image} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product.name}</h4>
          <p className="lws-productCategory">{product.category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{product.price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{product.qty}</span>
            </p>
          </div>
          <button
            className="lws-btnAddToCart"
            disabled={product.qty < 1}
            onClick={() => handleAddToCart(product.id, product.price)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
