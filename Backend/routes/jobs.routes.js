 import express from"express"
 import { getAdminJobs, getAllJob, getJobById, postJob} from "../controller/job.controller.js"
 import isAuthenticated from"../middlewares/isauthenticated.js"
 const router = express.Router();
 router.route("/post").post(isAuthenticated,postJob);
 router.route("/get").get(getAllJob); 
 router.route("/getadminjobs").get( isAuthenticated,getAdminJobs)
 router.route("/get/:id").get(getJobById);

  export default router