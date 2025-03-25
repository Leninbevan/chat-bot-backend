import express from "express"
import { getUserController, addNewLibraryController, getDiscoverController, getSpaceController, getCharacterController, getAgentController, updateLibraryController } from "../controllers";
import { upload } from "../../../utils/upload";

const router = express.Router();

router.get('/getUser/:id?', getUserController);
router.get('/getUsers', getUserController);
router.get("/getDiscover", getDiscoverController);
router.get("/getSpaces", getSpaceController);
router.get("/getAgents", getAgentController);
router.get("/getCharacters", getCharacterController);
router.post("/updateLibrary", updateLibraryController);
router.post("/newLibrary", addNewLibraryController);
// router.post("/updateLibrary", upload,updateLibraryController);
// router.post("/newLibrary", upload,addNewLibraryController);
export default router;
