import { Request, Response,NextFunction } from 'express';
import {getUser,getAllUser,addLibrary, getSpaces, getAgents, getCharacters, updateLibrary} from "../service/index"
import { CustomError } from '../../../types/error';


export const errorHandler = async (err: CustomError.Error, req: Request, res: Response, next: Function) => {
    console.error(err);
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  };


// GET ALL and GET user by ID (combined)
export const getUserController= async (req: Request, res: Response, next: NextFunction) => {
    
   try{
    const { id } = req.params;
    if (id) {
        const user= await getUser(id);
        if (user.length) {
            res.json({ success: true, message: "User fetched successfully", data:user});
        } else {
            res.status(404).json({ success: true, message: "User not found" });
        }
    } else {
        const users=await getAllUser();
        res.json({ success: true, message: "Users fetched successfully", data:users});
    }
   }
   catch(error){
    next(error);
   }
};

// GET ALL Discover
export const getDiscoverController= async (req: Request, res: Response, next: NextFunction) => {

    try{
        const spaces=await getSpaces();
        const agents=await getAgents();
        const characters=await getCharacters();

        res.status(200).json({success: true,message:"Data fetched successfully",data:{spaces,agents,characters}});
    }
    catch(error){
        next(error);
    }
    
};

// GET ALL Spaces
export const getSpaceController=async(req:Request, res:Response, next: NextFunction)=>{
    try{
        const spaces=await getSpaces();
        res.status(200).json({success: true,message:"Data fetched successfully",data:spaces});
    }
    catch(error){
        next(error);
    }
}

// GET ALL Agents
export const getAgentController=async(req:Request, res:Response, next: NextFunction)=>{
    try{
        const agents=await getAgents();

        res.status(200).json({success: true,message:"Data fetched successfully",data:agents});
    }
    catch(error){
        next(error);
    }
}

// GET ALL Characters
export const getCharacterController=async(req:Request, res:Response, next: NextFunction)=>{
    try{
        const characters=await getCharacters();

        res.status(200).json({success: true,message:"Data fetched successfully",data:characters});
    }
    catch(error){
        next(error);
    }
}

// Update Library data in the db
export const updateLibraryController=async(req:Request, res:Response, next: NextFunction)=>{
    
    try{
        const { id } = req.params;
        const data=req.body;
        await updateLibrary(id, data);
        res.status(200).json({success: true,message:"Library Updated Successfully successfully"});
    }
    catch(error){
        next(error);
    }
}

// ADD new Librqary data in the db
export const addNewLibraryController=async(req:Request, res:Response, next: NextFunction)=>{
    
    try{
        const newLibrary=req.body;
        const dbResult=await addLibrary(newLibrary);
        res.status(201).json({success: true,message:"Library added successfully"});
    }
    catch(error){
        next(error);
    }
}