import { ContactCollection } from '../db/models/Contact.js';

export const getAllContacts = () => ContactCollection.find();

export const getContactById = (contactId) =>
  ContactCollection.findById(contactId);

export const createContact = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};

export const editContact = async (contactId, payload, options = {}) => {
  const editContact = await ContactCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    { new: true },
  );
  return editContact;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactCollection.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};
