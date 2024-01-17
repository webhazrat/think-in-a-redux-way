export const readTransactions = async () => {
  const response = await fetch("http://localhost:9000/transactions");
  return await response.json();
};

export const createTransaction = async (data) => {
  const response = await fetch("http://localhost:9000/transactions", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
};

export const updateTransaction = async (id, data) => {
  const response = await fetch(`http://localhost:9000/transactions/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
};

export const deleteTransaction = async (id) => {
  const response = await fetch(`http://localhost:9000/transactions/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
