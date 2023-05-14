import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  getUserProjects,
  getUserTeams,
  findUser,
  findUserByEmail,
  getNotifications,
  getWorks,
  getTasks, getAllStudent, getAllJury, getAllCoach, adminDeleteUser
} from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";
import {adminDeleteProject} from "../controllers/project.js";

const router = express.Router();

router.get("/projects",verifyToken,getUserProjects);

//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id",verifyToken, findUser);
router.get("/find",verifyToken, getUser);

router.get("/student", getAllStudent);
router.get("/jury", getAllJury);
router.get("/coach", getAllCoach);


router.delete("/admin/:id", adminDeleteUser)

//get user projects

//get user teams
router.get("/teams", verifyToken, getUserTeams);

//search a user
router.get("/search/:email",verifyToken, findUserByEmail);

//get notifications of a user
router.get("/notifications", verifyToken, getNotifications);

//get works of a user
router.get("/works", verifyToken, getWorks);

//get tasks of a user
router.get("/tasks", verifyToken, getTasks);



export default router;
