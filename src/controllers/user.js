const {response, request} = require('express')
class UserController{

  getAll(req=request, res=response){
    res.status(200).json({msg:'get API',query:req.query});
  }

  post(req, res){
    const {nombre, edad} = req.body;
    res.json({
      msg:'post API',
      nombre, 
      edad
    });
  }

  put(req, res){
    const {id} = req.params;
    res.json({msg:'put API',id});
  }

  patch(req, res){
    res.json({msg:'patch API'});
  }
  
  delete(req, res){
    res.json({msg:'delete API'});
  }
}

module.exports = new UserController();