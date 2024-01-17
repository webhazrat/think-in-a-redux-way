import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editActive,
  fetchTransactions,
  removeTransaction,
} from "../redux/features/transaction/transactionSlice";

export default function Transactions() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeTransaction(id));
  };

  const handleEdit = (data) => {
    dispatch(editActive(data));
  };

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        {isLoading && <p>Loading...</p>}
        {isError && <p className="error">{error}</p>}
        {!isLoading && !isError && data.length > 0 ? (
          <ul>
            {data.map((transaction) => (
              <li
                key={transaction.id}
                className={`transaction ${
                  transaction.type === "income" ? "income" : "expense"
                }`}
              >
                <p>{transaction.name}</p>
                <div className="right">
                  <p>৳ {transaction.amount}</p>
                  <button
                    className="link"
                    onClick={() => handleEdit(transaction)}
                  >
                    <img className="icon" src="./edit.svg" />
                  </button>
                  <button
                    className="link"
                    onClick={() => handleRemove(transaction.id)}
                  >
                    <img className="icon" src="./delete.svg" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions found</p>
        )}
      </div>
    </>
  );
}
