import Sale from "../models/saleModel.js";
import { StatusCodes } from "http-status-codes";


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const addNewHomeForSale = async (req, res) => {

    try {
        const addSaleHome = await Sale.create({
            totalPrice: req.body.totalPrice,
            floor: req.body.floor,
            room: req.body.room,
            bathroom: req.body.bathroom,
            terras: req.body.terras,
            elevator: req.body.elevator,
            garden: req.body.garden,
            parking: req.body.parking,
            warehouse: req.body.warehouse,
            area: req.body.area,
            city: req.body.city,
            province: req.body.province,
          });
        
          return res
            .status(StatusCodes.OK)
            .json({message: "New Home for sale is added", addSaleHome });
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
export const listOfSaleHome=async(req,res)=>{
    try {
        const sales = await Sale.find();
     return res.status(StatusCodes.OK).json(sales);

    } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
        
    }
}
