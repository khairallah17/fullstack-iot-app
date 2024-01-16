const bcrypt = require("bcrypt")
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");
const { getUserByEmail } = require("../services/users.services")

dotenv.config()

async function saveUser(user){

  const { email } = user

  try {
    
    const foundUser = await getUserByEmail(email)
    if (!foundUser)
            throw new Error("user already Exists")
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password,salt);
    const createdUser = await User.create(user)

    return createdUser

  } catch(error) {
    throw new Error(error)
  }
}

async function loginService(loginData){
  
  try {

    const user = await User.find({"email":loginData.email});

    if(user.length>0){
        const result = await bcrypt.compare(loginData.password,user[0].password);
        if(result){
            const token = await jwt.sign({"email":user[0].email,"id": user[0]._id},process.env.SECRET_KEY,{expiresIn: '1d'});
            return token;
        } else {
          throw new Error("password does not match")
        }
    } else {
      throw new Error("user not found")
    }

  } catch(error) {
    throw new Error(error)
  }


}

module.exports = {saveUser,loginService};