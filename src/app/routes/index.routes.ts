import { Router } from "express";
import homeRouter from "./home.routes";
import adminRouter from "./admin.routes";
import userRouter from "./user.routes";
const router = Router();

router.use("/admin", adminRouter);
router.use("/home", homeRouter);
router.use("/", userRouter);

export default router;
