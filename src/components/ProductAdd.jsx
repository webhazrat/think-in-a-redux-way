import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/products/actions";

const initialState = {
  name: "",
  category: "",
  image: "",
  price: "",
  qty: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: action.name,
      };
    case "changeCategory":
      return {
        ...state,
        category: action.category,
      };
    case "changeImage":
      return {
        ...state,
        image: action.image,
      };
    case "changePrice":
      return {
        ...state,
        price: action.price,
      };
    case "changeQty":
      return {
        ...state,
        qty: action.qty,
      };
    case "clear":
      return initialState;
    default:
      return state;
  }
};

export default function ProductAdd() {
  const productDispatch = useDispatch();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleProductAdd = (e) => {
    e.preventDefault();
    productDispatch(add(state));
    dispatch({
      type: "clear",
    });
  };

  return (
    <>
      <div>
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form
            className="space-y-4 text-[#534F4F]"
            id="lws-addProductForm"
            onSubmit={handleProductAdd}
          >
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input
                className="addProductInput"
                id="lws-inputName"
                type="text"
                required
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "changeName", name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input
                className="addProductInput"
                id="lws-inputCategory"
                type="text"
                required
                value={state.category}
                onChange={(e) =>
                  dispatch({ type: "changeCategory", category: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input
                className="addProductInput"
                id="lws-inputImage"
                type="text"
                required
                value={state.image}
                onChange={(e) =>
                  dispatch({ type: "changeImage", image: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputPrice"
                  required
                  value={state.price}
                  onChange={(e) =>
                    dispatch({ type: "changePrice", price: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputQuantity"
                  required
                  value={state.qty}
                  onChange={(e) =>
                    dispatch({ type: "changeQty", qty: e.target.value })
                  }
                />
              </div>
            </div>

            <button type="submit" id="lws-inputSubmit" className="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
