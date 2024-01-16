const loginServices = require("../services/login.services")

async function signUp(req,res){

    const { email, lName, fName, password } = req.body

    if (!email || !lName || !fName || !password)
        return res.status(400).json({error: "required fields not found"})

    try{

        const user = await loginServices.saveUser(req.body);

        return res.status(201).json(user);

    } catch(error) {
        return res.status(500).send({error: error.message});
    }

}

async function login(req,res){

       try{
            const token = await loginServices.loginService(req.body);
            return res.status(200).json(token);
       } catch(error) {
            return res.status(500).json({error: error.message});
       }
}

module.exports={signUp,login}
