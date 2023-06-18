import express from "express";
import {
  addNewHomeForSale,
  listOfSaleHome,updateOfSaleHome
} from "../controllers/saleController.js";

const router = express.Router();

router.post("/addNew", addNewHomeForSale);
router.get("/listHome", listOfSaleHome);
router.patch("/updateSale/:id", updateOfSaleHome);

export default router;
