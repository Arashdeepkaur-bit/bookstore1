import express from "express";
import {getBook} from "../controllers/controllers";
const router =express.Router();
router.get("/",getBook);
export default router;