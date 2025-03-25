import express from "express"
import { getUserController, addNewLibraryController, getDiscoverController, getSpaceController, getCharacterController, getAgentController, updateLibraryController } from "../controllers";

const router = express.Router();

router.get('/getUser/:id?', getUserController);
router.get('/getUsers', getUserController);
router.get("/getDiscover", getDiscoverController);
router.get("/getSpaces", getSpaceController);
router.get("/getAgents", getAgentController);
router.get("/getCharacters", getCharacterController);
router.post("/updateLibrary", updateLibraryController);
router.post("/newLibrary", addNewLibraryController);
export default router;
