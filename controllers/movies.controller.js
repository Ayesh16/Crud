export const MovieIndex=(req,res)=>{
    res.send("Get all movie lists");
};

export const MovieCreate=(req,res)=>{
    //id,title,desc
    //create the movie info
    console.log(req.body);
    // res.send("Create a movie");
    return res.json(req.body);
};

export const MovieUpdate=(req,res)=>{
    res.send("Updata a movie");
};

export const MovieDelete=(req,res)=>{
    res.send("Deleted a movie")
};