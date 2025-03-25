"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewLibraryController = exports.updateLibraryController = exports.getCharacterController = exports.getAgentController = exports.getSpaceController = exports.getDiscoverController = exports.getUserController = void 0;
const index_1 = require("../service/index");
const joi_1 = __importDefault(require("joi"));
const libraryType_1 = require("../../../types/libraryType");
const LibraryVaildation = joi_1.default.object({
    userId: joi_1.default.string().required(),
    type: joi_1.default.string().required().valid(libraryType_1.TYPE_SPACES, libraryType_1.TYPE_AGENTS, libraryType_1.TYPE_CHARACTERS),
    image: joi_1.default.string().required(),
    title: joi_1.default.string().required(),
    describtion: joi_1.default.string().required(),
    category: joi_1.default.string().required().valid(libraryType_1.CATEGORY_EDUCATION, libraryType_1.CATEGORY_BUSINESS),
    visibility: joi_1.default.string().required().valid(libraryType_1.VISIBLITY_PRIVATE, libraryType_1.VISIBLITY_PUBLIC),
    instruction: joi_1.default.string(),
    modelAI: joi_1.default.string().valid(libraryType_1.GPT_2, libraryType_1.GPT_3_5, libraryType_1.GPT_4),
    modelAIAccuracy: joi_1.default.number().min(0.0).max(1.0),
    youtubeChannelLink: joi_1.default.string(),
    youtubeVideoLink: joi_1.default.string(),
    websiteURl: joi_1.default.string(),
    webpageLink: joi_1.default.string(),
    document: joi_1.default.string()
});
// GET ALL and GET user by ID (combined)
const getUserController = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id) {
            const user = await (0, index_1.getUser)(id);
            if (user.length) {
                res.json({ success: true, message: "User fetched successfully", data: user });
            }
            else {
                res.status(404).json({ success: true, message: "User not found" });
            }
        }
        else {
            const users = await (0, index_1.getAllUser)();
            res.json({ success: true, message: "Users fetched successfully", data: users });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.getUserController = getUserController;
// GET ALL Discover
const getDiscoverController = async (req, res, next) => {
    try {
        const spaces = await (0, index_1.getSpaces)();
        const agents = await (0, index_1.getAgents)();
        const characters = await (0, index_1.getCharacters)();
        res.status(200).json({ success: true, message: "Data fetched successfully", data: { spaces, agents, characters } });
    }
    catch (error) {
        next(error);
    }
};
exports.getDiscoverController = getDiscoverController;
// GET ALL Spaces
const getSpaceController = async (req, res, next) => {
    try {
        const spaces = await (0, index_1.getSpaces)();
        res.status(200).json({ success: true, message: "Data fetched successfully", data: spaces });
    }
    catch (error) {
        next(error);
    }
};
exports.getSpaceController = getSpaceController;
// GET ALL Agents
const getAgentController = async (req, res, next) => {
    try {
        const agents = await (0, index_1.getAgents)();
        res.status(200).json({ success: true, message: "Data fetched successfully", data: agents });
    }
    catch (error) {
        next(error);
    }
};
exports.getAgentController = getAgentController;
// GET ALL Characters
const getCharacterController = async (req, res, next) => {
    try {
        const characters = await (0, index_1.getCharacters)();
        res.status(200).json({ success: true, message: "Data fetched successfully", data: characters });
    }
    catch (error) {
        next(error);
    }
};
exports.getCharacterController = getCharacterController;
// Update Library data in the db
const updateLibraryController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { error, value } = LibraryVaildation.validate(req.body);
        if (error) {
            const error = new Error();
            error.statusCode = 400;
            error.name = 'Bad Request.';
            error.message = JSON.stringify(error);
            throw error;
        }
        await (0, index_1.updateLibrary)(id, value);
        res.status(200).json({ success: true, message: "Library Updated Successfully successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.updateLibraryController = updateLibraryController;
// ADD new Librqary data in the db
const addNewLibraryController = async (req, res, next) => {
    try {
        const { error, value } = LibraryVaildation.validate(req.body);
        if (error) {
            const customError = new Error();
            customError.statusCode = 400;
            customError.message = error.message;
            throw customError;
        }
        await (0, index_1.addLibrary)(value);
        res.status(201).json({ success: true, message: "Library added successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.addNewLibraryController = addNewLibraryController;
