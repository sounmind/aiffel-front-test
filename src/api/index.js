export const fetchUser = async ({ email, password }) => {
  const response = await fetch(
    `http://localhost:5000/login?email=${email}&password=${password}`,
  );

  return response.json();
};

export const fetchForum = async ({ page, limit = 5 }) => {
  const response = await fetch(
    `http://localhost:5000/forum?_page=${page}&_limit=${limit}`,
  );

  return response.json();
};

export const toggleQuestionLike = async ({ id }) => {
  const response = await fetch(`http://localhost:5000/forum/${id}`, {
    method: 'PUT',
  });

  return response.json();
};

export const deleteQuestion = async ({ id }) => {
  const reponse = await fetch(`http://localhost:5000/forum/${id}`, {
    method: 'DELETE',
  });

  return reponse.json();
};
