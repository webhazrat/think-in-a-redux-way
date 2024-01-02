import { useSelector } from "react-redux";

export default function Header({ setShow }) {
  const carts = useSelector((state) => state.carts);
  const items =
    carts.length > 0 ? carts.reduce((total, item) => item.qty + total, 0) : 0;
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <button onClick={() => setShow("home")}>
          <img src="./logo.png" alt="LWS" className="max-w-[140px]" />
        </button>

        <div className="flex gap-4">
          <button
            onClick={() => setShow("home")}
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </button>
          <button
            className="navCart"
            id="lws-cart"
            onClick={() => setShow("cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{items}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
