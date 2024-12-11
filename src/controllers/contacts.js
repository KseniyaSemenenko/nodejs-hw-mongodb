import * as contactServices from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getAllContacts = async (req, res) => {
  const contacts = await contactServices.getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactById = async (req, res, next) => {
  const { id } = req.params;

  const data = await contactServices.getContactById(id);

  if (!data) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data,
  });
};

export const addContact = async (req, res) => {
  const contact = await contactServices.createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactServices.deleteContact(contactId);
  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.status(204).send();
};
