import { Router } from "express";
import {
  addAstrologicalDictionary,
  addDreamDictionary,
  addZodiacSign,
  deleteAstrologicalTermByID,
  deleteDreamTermByID,
  deleteZodiacSignByID,
  fetchAstrologicalDictionary,
  fetchAstrologicalTermById,
  fetchDreamDictionary,
  fetchDreamTermById,
  fetchZodiacSign,
  fetchZodiacSignById,
  fetchZodiacSignByName,
  updateAstrologicalTermByID,
  updateDreamTermByID,
  updateZodiacSignByID,
} from "../controllers/admin.controller";

const adminRouter = Router();

adminRouter.get("/astrological-dictionary", fetchAstrologicalDictionary);
adminRouter.get("/astrological-dictionary/:id", fetchAstrologicalTermById);
adminRouter.post("/astrological-dictionary/save", addAstrologicalDictionary);
adminRouter.post(
  "/astrological-dictionary/edit/:id",
  updateAstrologicalTermByID
);
adminRouter.get(
  "/astrological-dictionary/delete/:id",
  deleteAstrologicalTermByID
);
adminRouter.get("/dream-dictionary", fetchDreamDictionary);
adminRouter.get("/dream-dictionary/:id", fetchDreamTermById);
adminRouter.post("/dream-dictionary/save", addDreamDictionary);
adminRouter.get("/dream-dictionary/delete/:id", deleteDreamTermByID);
adminRouter.post("/dream-dictionary/edit/:id", updateDreamTermByID);
adminRouter.get("/zodiac-sign", fetchZodiacSign);
adminRouter.get("/zodiac-sign/:id", fetchZodiacSignById);
adminRouter.get("/zodiac-sign-details/:name", fetchZodiacSignByName);
adminRouter.post("/zodiac-sign/save", addZodiacSign);
adminRouter.get("/zodiac-sign/delete/:id", deleteZodiacSignByID);
adminRouter.post("/zodiac-sign/edit/:id", updateZodiacSignByID);

export default adminRouter;
