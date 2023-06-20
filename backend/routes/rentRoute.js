import express from "express";
import {
  addNewHomeForRent,
  listOfRentHome,
  updateOfRentHome
} from "../controllers/rentController.js";

const router = express.Router();

router.post("/addNew", addNewHomeForRent);
router.get("/listHome", listOfRentHome);
router.patch("/updateRent/:id", updateOfRentHome);


export default router;
