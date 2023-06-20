import express from "express";
import {
    addNewUser,
    listOfUsers,updateOfUser,
    loginUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/addNew", addNewUser);
router.get("/listUsers", listOfUsers);
router.patch("/updateUser/:id", updateOfUser);
router.post("/login", loginUser);

export default router;
