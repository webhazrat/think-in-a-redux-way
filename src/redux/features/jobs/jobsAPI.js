export const readJobs = async (type) => {
  const query = type ? `?type=${type}` : "";
  const response = await fetch(`http://localhost:9000/jobs${query}`);
  return await response.json();
};

export const createJob = async (data) => {
  const response = await fetch(`http://localhost:9000/jobs`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
};

export const findOne = async (id) => {
  const response = await fetch(`http://localhost:9000/jobs/${id}`);
  return await response.json();
};

export const updateJob = async (id, data) => {
  const response = await fetch(`http://localhost:9000/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
};

export const deleteJob = async (id) => {
  const response = await fetch(`http://localhost:9000/jobs/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
