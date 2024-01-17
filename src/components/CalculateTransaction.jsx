import { useSelector } from "react-redux";

export default function CalculateTransaction() {
  const transactions = useSelector((state) => state.transactions);

  const calculateTransaction = (data) => {
    let output = 0;
    data.forEach((t) => {
      if (t.type === "income") {
        output += Number(t.amount);
      } else {
        output -= Number(t.amount);
      }
    });
    return output;
  };
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳ </span>
        <span>
          {transactions.data.length > 0
            ? calculateTransaction(transactions.data)
            : 0}
        </span>
      </h3>
    </div>
  );
}
