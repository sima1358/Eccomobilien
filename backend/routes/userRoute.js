import express from "express";
import {
    addNewUser,
    listOfUsers,updateOfUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/addNew", addNewUser);
router.get("/listUsers", listOfUsers);
router.patch("/updateUser/:id", updateOfUser);

export default router;
