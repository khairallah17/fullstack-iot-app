const catalogServices=require("../services/catalog.services")

async function getAllDevices(req, res) {
       try{
              console.log(req.headers);
              let devices=[];
          if(req.query.keyword){
              devices = await catalogServices.findDeviceByQuery(req.query.keyword);
          }
          else{
              devices = await catalogServices.findDevices();
          }
       res.json(devices);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
      }
}
   

async function getDeviceById(req,res){
       const idP=req.params.id;
       try{
       const device = await catalogServices.findDeviceById(idP);
       res.json(device);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
       }

}

async function addDevice (req,res){
       try{
        console.log(req.file);
        console.log(req.body);
        const p=JSON.parse(req.body.deviceData);
        p.image="/uploads/"+req.file.filename;
        await catalogServices.saveDevice(p);
        res.status(201).json("");
       }catch(error){
         res.status(500).send("erreur d'ajout");
       }
       
    }

async function deleteDeviceById(req,res){
       const idP = req.params.id;
       try{
       await catalogServices.removeDeviceById(idP);
       res.send("L'appareil a était bien supprimé");
       }catch(error){
       res.status(500).send("Erreur dans la suppression d'appareil");
       }
      
}

async function updateDevice(req,res){
       const idP = req.params.id;
       try{
       await catalogServices.editDevice(idP,req.body);
       res.send("L'appareil a était bien modifié");
       }catch(error){
       res.status(500).send("Erreur dans la suppression d'appareil");
       }
       
}

module.exports={getAllDevices, getDeviceById, addDevice, deleteDeviceById, updateDevice}
