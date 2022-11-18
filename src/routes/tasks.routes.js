import { Router } from "express";
import * as TaskController from "../controllers/task.controller";

const router = Router();

router.get("/", TaskController.findAllTasks);

router.post("/", TaskController.createTask);

export default router;
