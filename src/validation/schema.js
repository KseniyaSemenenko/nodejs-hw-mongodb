import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least 3 characters',
    'string.max': 'Name should have at most 20 characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone Number should be a string',
    'string.min': 'Phone Number should have at least 3 characters',
    'string.max': 'Phone Number should have at most 20 characters',
    'any.required': 'Phone Number is required',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Enter validate email!',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': '"isFavorite" must be a boolean value',
    'boolean.empty': '"isFavorite" cannot be empty',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'string.base': 'Contact Type should be a string',
      'string.valid': 'Contact Type must be a "work" or "home" or "personal"',
      'any.required': 'Contact Type is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
