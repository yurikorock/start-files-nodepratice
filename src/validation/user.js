import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});
export const loginUserShcema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
