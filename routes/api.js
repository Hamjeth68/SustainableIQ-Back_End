import Express from "express";
import {
  getApi,
  createUser,
  adminCreate,
} from "../controller/UserController.js";

const router = Express.Router();

router.get("/", getApi);
router.post("/create", createUser);
router.post("/create-admin", adminCreate);

export default router;
