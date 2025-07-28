import createHttpError from 'http-errors';
import { User } from '../db/models/User.js';
import bcrypt from 'bcrypt';

export const userRegisterService = async (payload) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
  const encryptPassword = await bcrypt.hash(payload.password, 10);
  return await User.create({ ...payload, password: encryptPassword });
};
