const CONTENT = 'application/json';
const URL = 'http://localhost:3001';

const loginUser = (user: IUserCredentials) => {
  const endpoint = `${URL}/users/login`;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT,
    },
    body: JSON.stringify({ ...user }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const registerUser = (newUser: INewUser) => {
  const endpoint = `${URL}/users/register`;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT,
    },
    body: JSON.stringify({ ...newUser }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginUser,
  registerUser,
};
