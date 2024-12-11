import { Router } from 'express';
import {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContacts));

router.get('/contacts/:id', ctrlWrapper(getContactById));

router.post('/contacts', ctrlWrapper(addContact));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContact));

export default router;
