import * as contactServices from '../services/contacts.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllContacts = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  filter.userId = req.user._id;

  const contacts = await contactServices.getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactById = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: _id } = req.params;

  const data = await contactServices.getContactById({ _id, userId });

  if (!data) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${_id}!`,
    data,
  });
};

export const addContact = async (req, res) => {
  const { _id: userId } = req.user;

  const contact = await contactServices.createContact({ ...req.body, userId });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const deleteContact = async (req, res, next) => {
  const { id: _id } = req.params;
  const { _id: userId } = req.user;

  const contact = await contactServices.deleteContact({ _id, userId });
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(204).send();
};

export const upsertContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;
  const { isNew, data } = await contactServices.editContact(contactId, {
    ...req.body,
    userId,
  });

  const status = isNew ? 201 : 200;

  if (!data) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(status).json({
    status,
    message: 'Successfully patched a contact!',
    data,
  });
};
