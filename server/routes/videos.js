const router= require("express").Router();
const Video = require("../models/Video");
const User = require("../models/User");


//create a video
router.post("/", async (req, res) => {
    const newVideo = new Video(req.body)
    try{
        const saveVideo = await newVideo.save();
        res.status(200).json(saveVideo);
    }catch(err){
        res.status(500).json(err);
    }
});
//find all videos
router.get("/videos", async (req, res) => {
    try {
      const videos = await Video.find({});
      console.log(videos)
      res.status(200).json(videos);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//update a video
router.put("/:id", async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if(video.userId === req.body.userId){
            await video.updateOne({$set:req.body});
            res.status(200).json("the post has been updated")
        }else{
            res.status(403).json("you can update only your post")
        }
    }catch(err) {
        res.status(500).json(err);
}
})
//delete a post
router.delete("/:id", async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if(video.userId === req.body.userId){
            await video.deleteOne();
            res.status(200).json("the video has been deleted")
        }else{
            res.status(403).json("you can delete only your video")
        }
    }catch(err) {
        res.status(500).json(err);
}
})
//rate a video --> 
router.put("/:id/rate", async(req, res)=> {
    try{
        const video = await Video.findById(req.params.id);
        if(!video.likes.includes(req.body.userId)) {
            await video.updateOne({$push: { likes: req.body.userId}})
            res.status(200).json("The video has been liked")
        } else {
            await video.updateOne({$pull: { likes: req.body.userId}})
            res.status(200).json("The video has been disliked")
        }
        
    }catch(err) {
        res.status(500).json(err);
    }
})
//get a video

router.get("/:id", async(req, res) => {
    try{ 
        const video = await Video.findById(req.params.id);
        res.status(200).json(video); 
    }catch(err) {
        res.status(500).json(err);
    }
} );
//get timeline post


//get user's all video

router.get("/videos/:category", async (req, res) => {
    try {
      const category = await Category.findOne({ category: req.params.category});
      console.log(category)
      const videos = await Video.find({ category: category.name});
      res.status(200).json(videos);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports = router;
  


module.exports = router