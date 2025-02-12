import express from "express";

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Get all movie lists");
});

router.post('/',(req,res)=>{
    res.send("Create a movie");
});

router.put('/:id',(req,res)=>{
    res.send("Updata a movie");
});

router.delete('/:id',(req,res)=>{
    res.send("Deleted a movie")
});

export default router;