const express=require("express");
const morgan=require("morgan");
const app=express();
const POST =3000;

// app.use(morgan())

const logMiddleware=(req,res,next)=>{
    // console.log(req.name)
    req.name="Satakshi Gupta"
    console.log("Request url:",req.url,"req method:",req.method,"Time:",new Date().toLocaleString());
    // res.send("Hello from middleware");
    next();
}

const apiCheckMiddleware=(req,res,next)=>{
    if(req.query.APT_KEY==="1234"){
        console.log("Authenthicated");
        next();
    }else{
        res.send("API invalid")
    }
}

app.use(logMiddleware); //global middleware
// app.use(apiCheckMiddleware);

app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
})

app.get("/data",apiCheckMiddleware,(req,res)=>{   //route level middleware = onlu run when this function is called (need to give api key)
    console.log("Hello World");
    res.json({
        city:"New York",
        country:"USA",
        temp:32,
        humidity:80
    })
})

app.listen(POST,()=>{
    console.log(`Server is running on post $ PORT`);
})

