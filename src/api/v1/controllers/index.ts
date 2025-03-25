import { Request, Response, NextFunction } from 'express';
import { getUser, getAllUser, addLibrary, getSpaces, getAgents, getCharacters, updateLibrary } from "../service/index"
import { CustomError } from '../../../types/error';
import Joi from 'joi';
import { CATEGORY_BUSINESS, CATEGORY_EDUCATION, GPT_2, GPT_3_5, GPT_4, TYPE_AGENTS, TYPE_CHARACTERS, TYPE_SPACES, VISIBLITY_PRIVATE, VISIBLITY_PUBLIC } from '../../../types/libraryType';



const LibraryVaildation = Joi.object({
    userId: Joi.string().required(),
    type: Joi.string().required().valid(TYPE_SPACES,TYPE_AGENTS,TYPE_CHARACTERS),
    image: Joi.string().required(),
    title: Joi.string().required(),
    describtion: Joi.string().required(),
    category: Joi.string().required().valid(CATEGORY_EDUCATION, CATEGORY_BUSINESS),
    visibility: Joi.string().required().valid(VISIBLITY_PRIVATE, VISIBLITY_PUBLIC),
    instruction: Joi.string(),
    modelAI: Joi.string().valid(GPT_2,GPT_3_5,GPT_4),
    modelAIAccuracy: Joi.number().min(0.0).max(1.0),
    youtubeChannelLink: Joi.string(),
    youtubeVideoLink: Joi.string(),
    websiteURl: Joi.string(),
    webpageLink: Joi.string(),
    document: Joi.string()
})


// GET ALL and GET user by ID (combined)
export const getUserController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        if (id) {
            const user = await getUser(id);
            if (user.length) {
                res.json({ success: true, message: "User fetched successfully", data: user });
            } else {
                res.status(404).json({ success: true, message: "User not found" });
            }
        } else {
            const users = await getAllUser();
            res.json({ success: true, message: "Users fetched successfully", data: users });
        }
    }
    catch (error) {
        next(error);
    }
};

// GET ALL Discover
export const getDiscoverController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const spaces = await getSpaces();
        const agents = await getAgents();
        const characters = await getCharacters();

        res.status(200).json({ success: true, message: "Data fetched successfully", data: { spaces, agents, characters } });
    }
    catch (error) {
        next(error);
    }

};

// GET ALL Spaces
export const getSpaceController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const spaces = await getSpaces();
        res.status(200).json({ success: true, message: "Data fetched successfully", data: spaces });
    }
    catch (error) {
        next(error);
    }
}

// GET ALL Agents
export const getAgentController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const agents = await getAgents();

        res.status(200).json({ success: true, message: "Data fetched successfully", data: agents });
    }
    catch (error) {
        next(error);
    }
}

// GET ALL Characters
export const getCharacterController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const characters = await getCharacters();

        res.status(200).json({ success: true, message: "Data fetched successfully", data: characters });
    }
    catch (error) {
        next(error);
    }
}

// Update Library data in the db
export const updateLibraryController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const { error, value } = LibraryVaildation.validate(req.body);
        if (error) {
            const error: CustomError.Error = new Error();
            error.statusCode = 400;
            error.name='Bad Request.';
            error.message=JSON.stringify(error)
            throw error;
        }
        await updateLibrary(id, value);
        res.status(200).json({ success: true, message: "Library Updated Successfully successfully" });
    }
    catch (error) {
        next(error);
    }
}

// ADD new Librqary data in the db
export const addNewLibraryController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { error, value } = LibraryVaildation.validate(req.body);
        if (error) {
            const customError: CustomError.Error = new Error();
            customError.statusCode = 400;
            customError.message=error.message;
            throw customError;
        }
        await addLibrary(value);
        res.status(201).json({ success: true, message: "Library added successfully" });
    }
    catch (error) {
        next(error);
    }
}