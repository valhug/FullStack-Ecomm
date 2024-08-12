const bcrypt = require('bcrypt');

export const hashPassword = async (password) => {
  try {
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};