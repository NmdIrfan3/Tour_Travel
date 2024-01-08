import express from "express";
import {
  createTour,
  deleteTour,
  getALlTour,
  getFeaturedTour,
  getSingleTour,
  getTourBysearch,
  getTourCount,
  updateTour,
} from "../Controller/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour route
router.post("/",verifyAdmin,createTour);
router.put("/:id",verifyAdmin, updateTour);
router.delete("/:id",verifyAdmin, deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getALlTour);
router.get("/search/getTourBySearch", getTourBysearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
