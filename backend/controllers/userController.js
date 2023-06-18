import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const addNewUser = async (req, res) => {

    try {
        const addUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
                 });
        
          return res
            .status(StatusCodes.OK)
            .json({message: "New User is added", addUser });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error)
    }

};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const listOfUsers=async(req,res)=>{
    try {
        const users = await User.find();
     return res.status(StatusCodes.OK).json(users);

    } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
        
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateOfUser = async (req, res) => {
    try {
      const updateUsers = await User.findByIdAndUpdate(req.params.id,{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
      });
      return res.status(StatusCodes.OK).json(updateUsers);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };
  