const Device=require("../models/Device")
const Category=require("../models/Category")

async function findDevices() {
       return await Device.find().populate("category");

}

async function findDeviceById(idP){
       return await Device.findById(idP).populate("category");

}

async function findDeviceByQuery(query){
       return await Device.find({name:{$regex:query,$options:"i"}}).populate("category");
}

async function saveDevice(p){
       
       return await Device.create(p);
      
}

async function removeDeviceById(idP){
       return Device.findByIdAndDelete(idP);
}

async function editDevice(idP,p){
       return await Device.findByIdAndUpdate(idP,p);      
}

async function findCategories() {
       return await Category.find();
}


async function saveCategory(c) {
       return Category.create(c);
}

async function findCategoryById(idC){
       return await Category.findById(idC);
}

async function findCategoryByQuery(query){
       return await Category.find({name:{$regex:query,$options:"i"}})
}


async function removeCategoryById(idC){
       await  Category.findByIdAndDelete(idC);
       await Device.deleteMany({ category: idC });
      
}

async function editCategory(idC,c){

       return await Category.findByIdAndUpdate(idC,c);
       
}

module.exports={findDevices, findDeviceById, saveDevice, removeDeviceById, editDevice,
findCategories,findCategoryById,findCategoryByQuery,saveCategory,editCategory,removeCategoryById,findDeviceByQuery}
