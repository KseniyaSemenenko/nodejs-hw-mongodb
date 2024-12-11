import ContactCollection from '../db/models/Contact.js';

export const getAllContacts = () => ContactCollection.find();

export const getContactById = (id) => ContactCollection.findById(id);

export const createContact = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};

export const deleteContact = async (id) => {
  const student = await ContactCollection.findOneAndDelete({
    _id: id,
  });
  return student;
};
