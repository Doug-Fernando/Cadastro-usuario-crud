import userMock from '../mock/user';

const getAllUsers = async () => new Promise((resolve): void => {
  setTimeout(() => {
    resolve(userMock);
  }, 1000);
});

export default {
  getAllUsers,
};
