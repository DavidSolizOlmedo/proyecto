var express = require('express');
const USER = require ('../database/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
      msn: "Bienvenido a la API Tienda Movil"
  })
});

router.post('/user', (req, res) => {
  var params = req.body;
  params["register"] = new Date();
  var user = new USER(params);
  user.save().then(()=>{
    res.status(200).json({
      msn : "Usuario creado"
    })
  });
});
module.exports = router;
