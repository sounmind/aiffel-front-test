export const fetchUser = async ({ email, password }) => {
  const response = await fetch(
    `localhost:5000/login?email=${email}&password=${password}`,
  );

  return response.json();
};
