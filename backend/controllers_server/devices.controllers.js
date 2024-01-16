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

       console.log("FILE ==> ",req.file);

       const { deviceName, deviceSeries, category, user, consumptionLimit } = req.body

       if (!deviceName || !deviceSeries || !category || !user || !consumptionLimit) 
              return res.status(400).json({error: "missing required params"})

       try{
        console.log("FILE ==> ",req.file);
        console.log("BODY ==> ",req.body);
        const image = "/public/uploads/"+req.file.filename;
        console.log("IMAGE ==> ", image)
        await catalogServices.saveDevice({
              deviceName,
              deviceSeries,
              category,
              user,
              consumptionLimit,
              image
        });
        res.status(201).json("device added");
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

async function consume(req, res) {

	const id = req.params.id

	try {

        const device = await catalogServices.findCategoryById(id)
		const data = await catalogServices.consumeData(device[0]._id)

        console.log(data)

	} catch(error) {
		res.status()
	}

}

async function getDevicesByUser(req, res) {

    const id = req.params.id

    if (!id)
        return res.status(400).json({error: "no id found"})

    try {
        
        const devices = await catalogServices.getDevicesByUser(id)

        return res.status(200).json(devices)

    } catch(error) {
        return res.status(500).json({error: error.message})
    }

}

module.exports={getAllDevices, getDeviceById, addDevice, deleteDeviceById, updateDevice, getDevicesByUser}
