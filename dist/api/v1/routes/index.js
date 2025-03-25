"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.get('/getUser/:id?', controllers_1.getUserController);
router.get('/getUsers', controllers_1.getUserController);
router.get("/getDiscover", controllers_1.getDiscoverController);
router.get("/getSpaces", controllers_1.getSpaceController);
router.get("/getAgents", controllers_1.getAgentController);
router.get("/getCharacters", controllers_1.getCharacterController);
router.post("/updateLibrary", controllers_1.updateLibraryController);
router.post("/newLibrary", controllers_1.addNewLibraryController);
exports.default = router;
