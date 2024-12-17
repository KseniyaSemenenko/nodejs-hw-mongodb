import { Router } from 'express';
import {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  upsertContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/schema.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContacts));

router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactById));

router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(addContact),
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(upsertContact),
);

router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContact));

export default router;
