import { Router } from 'express';
import {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  upsertContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContacts));

router.get('/contacts/:contactId', ctrlWrapper(getContactById));

router.post('/contacts', ctrlWrapper(addContact));

router.patch('/contacts/:contactId', ctrlWrapper(upsertContact));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContact));

export default router;
