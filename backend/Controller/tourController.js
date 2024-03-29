import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "failed to create" });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "failed to update" });
  }
};

//Delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "failed to delete" });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const getTour = await Tour.findById(id).populate('reviews');
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: getTour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "data not found " });
  }
};
//getAll tour
export const getALlTour = async (req, res) => {
  const page = parseInt(req.query.page);
  // console.log(page);
  try {
    const tours = await Tour.find({}).populate('reviews')
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Success",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "data not found " });
  }
};

//Get tour by search
export const getTourBysearch=async(req,res)=>{
  
  //here 'i' means case sensitive
  const city=new RegExp(req.query.city, 'i')
  const distance=parseInt(req.query.distance)
  const maxGroupSize=parseInt(req.query.maxGroupSize)
  
  try {
    
    //gte means grater than equal
    const tours=await Tour.find({city,distance:{$gte:distance},
      maxGroupSize:{$gte:maxGroupSize}})
      res.status(200).json({
        success: true,
        message: "Success",
        data: tours,
      });
  } catch (error) {
    res.status(404).json({ success: false, message: "data not found " });
  }
}


//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({featured:true}).populate('reviews').limit(8)
    res.status(200).json({
      success: true,
      message: "Success",
      data: tours, 
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "data not found " });
  }
};

//get tour count
export const getTourCount=async(req,res)=>{
  try {
    const tourCount=await Tour.estimatedDocumentCount();
    res.status(200).json({success:true,data:tourCount})
  } catch (error) {
    res.status(500).json({success:false,message:"failed to fetch"})
  }
}