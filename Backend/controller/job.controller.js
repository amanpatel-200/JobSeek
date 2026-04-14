import { Job } from "../models/job.model.js";

//job post karne ke liye
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !location ||
      !position ||
      !companyId ||
      !experience ||
      !jobType
    ) {
      return res.status(404).json({
        message: "All Field are required",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirement: requirement.split(","),
      salary: Number(salary),
      location,
      position,
      company: companyId,
      experienceLevel: experience,
      created_by: userId,
      jobType,
    });
    return res.status(201).json({
      message: "job created successfully",
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
    
  }
};
//students ke liye
export const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { title: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({
      path:"company"
    }).sort({
      createdAt:-1
    })
    if (!jobs) {
      return res.status(404).json({
        message: "Job not found",
        success: true,
      });
    }
    return res.status(201).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//students ke liye
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: true,
      });
    }
    return res.status(201).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//admin ne kitne job create kiye hai
export const getAdminJobs = async (req,res) => {
    try {
      const adminId = req.id;
      const jobs = await Job.find({created_by:adminId}).populate({
        path:"company",
        createdAt:-1
      }) ;
      if(!jobs){
        return res.status(404).json({
        message: "Job not found",
        success: true,
      });
      } 
      return res.status(201).json({
        jobs,
        success:true
      })
    } catch (error) {
    console.log(error);
    }
}
