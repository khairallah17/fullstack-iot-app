const catalogServices=require("../services/catalog.services")


async function getAllCategories(req, res) {
       try{
              let categories=[];
          if(req.query.keyword){
              categories = await catalogServices.findCategoryByQuery(req.query.keyword);
          }
          else{
              categories = await catalogServices.findCategories();
          }
       res.status(200).json(categories);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
      }
}

async function addCategory(req, res) {
       try{
              await catalogServices.saveCategory(req.body);
              res.status(201).send("Category Bien ajoutée");
       }catch(error){
              res.status(500).send("Erreur dans l'ajout de category");
       }
}

async function getCategoryById(req,res){
       const idC=req.params.id;
       try{
       const category=await catalogServices.findCategoryById(idC);
       res.json(category);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
       }

}


async function deleteCategoryById(req,res){
       const idC = req.params.id;
       try{
       await  catalogServices.removeCategoryById(idC);
       res.send("La categorie a était bien supprimée");
       }catch(error){
       res.status(500).send("Erreur dans la suppression de categorie");
       }
      
}

async function updateCategory(req,res){
       const idC = req.params.id;
       try{
       await catalogServices.editCategory(idC,req.body);
       res.send("La categorie a était bien modifiée");
       }catch(error){
       res.status(500).send("Erreur dans la suppression de categorie");
       }
       
}


module.exports={getAllCategories,addCategory,getCategoryById,deleteCategoryById,updateCategory}
