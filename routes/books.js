import express from 'express';
const router = express.Router();

import bookController from '../controllers/books.js';

router.get('/', bookController.getBook);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.postBook);
router.put('/:id', bookController.putBook);
router.delete('/:id', bookController.deleteBook);

export default router;
