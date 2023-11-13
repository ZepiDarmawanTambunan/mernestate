import express from 'express';
import { createListing, deleteListing, getListing, updateListing } from '../controllers/listingController';

const router = express.Router();

router.post('/create', createListing);
router.post('/delete/:id', deleteListing);
router.post('/update/:id', updateListing);
router.post('/get/:id', getListing);
router.post('/get', getListing);

export default router;