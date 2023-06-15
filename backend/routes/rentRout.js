import express from 'express';




const router = express.Router();

router.post('/addNew', addNewHomeForRent);
router.get('/listHome', listOfRentHome)








export default router;