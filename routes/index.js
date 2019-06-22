var express = require('express');
const user = require ('../database/user');
const USER = user.model;
const USERSCHEMA = user.schema;
var valid = require("../utils/valid");
const PRODUCT = require ('../database/product');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
      msn: "Bienvenido a la API Tienda Movil"
  })
});

router.post('/user', async(req, res) => {
  var params = req.body;
  params["register"] = new Date();
  params["fullname"] = "";
  if(!valid.checkparams(USERSCHEMA, params)){
    res.status(300).json({
      msn : "parametros incorrectos"
    })
    return;
  }

  if(!valid.checkfullname(params.name)){
    res.status(300).json({
      msn : "El parametro name debe contener al menos 3 caracteres"
    })
    return;
  }
  if(!valid.checkfullname(params.lastname)){
    res.status(300).json({
      msn : "El parametro lastname debe contener al menos 3 caracteres"
    })
    return;
  }
  params["fullname"] = params.name +" "+params.lastname;
  if(!valid.checkemail(params.email)){
    res.status(300).json({
      msn : "email invalido"
    })
  }
  if(!valid.checkpassword(params.password)){
    res.status(300).json({
      msn : "La contraseña debe contener al menos 8 caracteres y un caracter debe ser numerico"
    })
  }
  if(!valid.checkcel(params.cel)){
    res.status(300).json({
      msn : "El parametro cel debe contener 8 numeros"
    })
  }
  //var email = {email: params.email};
  //if(USER.find(email)){
  //  res.status(300).json({
  //  msn : "el email ya fue registrado"
  //  })
  //}

  var user = new USER(params);
  var result = await user.save();
  res.status(200).json(result)
});

router.get("/user",(req, res)=>{
  var params = req.query;
  var limit=20;
  if(params.limit != null){
    limit = parseInt(params.limit);
  }
  var order = -1;
  if(params.order != null){
    if(params.order == "desc"){
      order = -1;
    }
    if(params.order == "asc"){
      order = 1;
    }
  }
  var skip = 0;
  if(params.skip != null){
  skip = parseInt(params.skip);
  }
  var find = {};
  if(params.find != null){
    find = {"fullname": params.find};
  }
  USER.find(find).limit(limit).sort({_id: order}).skip(skip).exec((err, docs) => {
    res.status(200).json(docs);
  });
});


router.post('/product', (req, res) => {
  var params = req.body;
  params["registerdate"] = new Date();
  var user = new PRODUCT(params);
  user.save().then(()=>{
    res.status(200).json({
      msn : "producto creado"
    })
  });
});
module.exports = router;
