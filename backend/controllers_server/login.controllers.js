const loginServices = require("../services/login.services")
const { getUserByEmail } = require("../services/users.services")

async function signUp(req,res){

       const { email } = req.body

       if (!email)
              return res.status(400).json({error: "required email"})

       try{

              const foundUser = await getUserByEmail(email)
              if (foundUser)
                     return res.status(400).json({error: "user already exists"})
              const user = await loginServices.saveUser(req.body);
              res.status(201).json(user);

       } catch(error) {

              console.log(error);
              res.status(500).send("Erreur dans l'ajout de l'utilisateur");

       }
}

async function login(req,res){
       try{
              const token=await loginServices.loginService(req.body);
              res.status(201).json(token);
       } catch(error) {
              res.status(500).json(error);
       }
}

module.exports={signUp,login}
