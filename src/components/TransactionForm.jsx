import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction,
  changeTransaction,
  editInActive,
} from "../redux/features/transaction/transactionSlice";

export default function TransactionForm() {
  const [editMode, setEditMode] = useState(false);
  const { editing } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const initailData = {
    name: "",
    type: "",
    amount: "",
  };
  const [data, setData] = useState(initailData);

  useEffect(() => {
    const { id, name, type, amount } = editing;
    if (id) {
      setEditMode(true);
      setData((prev) => ({
        ...prev,
        name,
        type,
        amount,
      }));
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  const reset = () => {
    setData((prev) => ({
      ...prev,
      ...initailData,
    }));
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(
        changeTransaction({
          id: editing?.id,
          data,
        })
      );
      setEditMode(false);
    } else {
      dispatch(addTransaction(data));
    }
    reset();
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    dispatch(editInActive());
    reset();
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="My Salary"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              id="income"
              checked={data.type === "income"}
              onChange={handleChange}
            />
            <label htmlFor="income">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              id="expense"
              checked={data.type === "expense"}
              onChange={handleChange}
            />
            <label htmlFor="expense">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="300"
            name="amount"
            value={data.amount}
            onChange={handleChange}
          />
        </div>

        <button className="btn" type="submit">
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>

        {editMode && (
          <button
            type="button"
            className="btn cancel_edit"
            onClick={handleCancelEdit}
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}
