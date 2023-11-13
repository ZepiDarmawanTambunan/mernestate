import express from 'express';
import { deleteUser, getUser, getUserListings, test, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/listings/:id', getUserListings);
router.get('/:id', getUser);

export default router;