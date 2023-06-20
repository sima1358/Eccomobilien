import { generateToken } from "../helper/authorization.js";
import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const addNewUser = async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            email: req.body.email,
            userName: req.body.userName,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber,
                 });
        
          return res
            .status(StatusCodes.OK)
            .json({message: "New User is added", user });
    } catch (error) {
        return res.status(500).json(error)
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
  
  export const loginUser = async(req,res)=>{

    const user = await User.findOne({userName: req.body.userName});

    if(user == null){
        return res.status(StatusCodes.OK).json({message:'Invalid username or password', user})
    }
    try {
// compare password
        const passwordValidation = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if(passwordValidation){
            const token = generateToken(user);
            
            return res.status(StatusCodes.OK).json({token})
        }
        else{
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Password is not valid")
        }

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({success: false, error: error.message})
    }
  }