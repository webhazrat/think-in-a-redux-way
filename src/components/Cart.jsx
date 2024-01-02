import { useSelector } from "react-redux";
import Billing from "./Billing";
import CartItem from "./CartItem";

export default function Cart() {
  const carts = useSelector((state) => state.carts);
  const cartItems = carts.filter((cart) => cart.qty > 0);
  return (
    <>
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cartItems.map((cart) => (
              <CartItem key={cart.id} cart={cart} />
            ))}
            {cartItems.length < 1 && (
              <p className="text-center">
                Cart is empty. Please continue shopping
              </p>
            )}
          </div>

          <div>
            <Billing carts={carts} />
          </div>
        </div>
      </div>
    </>
  );
}
