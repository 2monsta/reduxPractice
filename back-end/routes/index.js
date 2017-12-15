var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var config = require ("../config/config");
var connection = mysql.createConnection(config.db);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/addCountry", (req, res)=>{
  console.log(req.body.countryName);
  const name = req.body.countryName;

  const insertDB = new Promise((resolve, reject)=>{
    let insertQuery = 'insert into coutryName (Name) values (?);';
    connection.query(insertQuery, [name], (error)=>{
      if(error){
        reject(error);
      }else{
        resolve({
          msg:"success"
        })
      }
    });
  });

  const getDataFromDB = new Promise((resolve, reject)=>{
    let getDataQuery = 'select * from coutryName';
    connection.query(getDataQuery, (error, results)=>{
      if(error){
        reject(error);
      }else{
        resolve(results);
      }
    })
  });


  insertDB
  .then((msg)=>{
    console.log(msg.msg);
    return getDataFromDB;
  })
  .then((data)=>{
    console.log(data);
    res.json(data);
  })
  .catch((error)=>{
    console.log(error);
  })
});

module.exports = router;
