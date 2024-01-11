const loginServices=require("../services/login.services")

async function signUp(req,res){
       try{
       const user = await loginServices.saveUser(req.body);
       res.status(201).json(user);
       }catch(error){
       console.log(error);
       res.status(500).send("Erreur dans l'ajout de l'utilisateur");
       }
}

async function login(req,res){
       try{
              const token=await loginServices.loginService(req.body);
              res.status(201).json(token);
       }catch{
              res.status(500).json(error);
       }
}

module.exports={signUp,login}
