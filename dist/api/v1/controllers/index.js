"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewLibraryController = exports.updateLibraryController = exports.getCharacterController = exports.getAgentController = exports.getSpaceController = exports.getDiscoverController = exports.getUserController = exports.errorHandler = void 0;
const index_1 = require("../service/index");
const errorHandler = async (err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
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
        const data = req.body;
        await (0, index_1.updateLibrary)(id, data);
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
        const newLibrary = req.body;
        const dbResult = await (0, index_1.addLibrary)(newLibrary);
        res.status(201).json({ success: true, message: "Library added successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.addNewLibraryController = addNewLibraryController;
