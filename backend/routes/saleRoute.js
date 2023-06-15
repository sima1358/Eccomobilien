import express from 'express';




const router = express.Router();

router.post('/addNew', addNewHomeForSale);
router.get('/listHome', listOfSaleHome)








export default router;