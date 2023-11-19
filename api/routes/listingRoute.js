import express from 'express';
import { createListing, deleteListing, getListing, updateListing } from '../controllers/listingController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.post('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.post('/get/:id', getListing);
router.post('/get', getListing);

export default router;