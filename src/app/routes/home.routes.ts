import { Router } from "express";
import {
  fetchAstrologicalTermByLetter,
  fetchDictionaryTermByLetter,
} from "../controllers/home.controller";

const homeRouter = Router();

homeRouter.get("/astrology/:letter", fetchAstrologicalTermByLetter);
homeRouter.get("/dream/:letter", fetchDictionaryTermByLetter);

export default homeRouter;
