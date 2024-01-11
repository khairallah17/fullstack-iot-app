const jwt=require("jsonwebtoken");

const dotevn=require("dotenv");
dotevn.config()

async function jwtVerify(req,res,next){
       const token=req.headers.authorization;
       console.log(token);
       jwt.verify(token,process.env.SECRET_KEY,(error,data)=>
       {
              if(error){
                     res.status(401).json("un problème d'authorization");
              }else{
                     req.user={"email":data.email,"verified":true}
                     next();
              }
       
       })
}

module.exports={jwtVerify}; 