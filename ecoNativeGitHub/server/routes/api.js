const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
// declare axios for making http requests
const axios = require('axios');
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;
var db;
MongoClient.connect('mongodb+srv://carolyn:12345@fwebcluster.l0h9pbg.mongodb.net/1econativeDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, database) => {
  if (err) return console.log(err);
  db = database.db('1econativeDB');
});
// router.route('/authuser').post(function (req, res) {
//   var username = req.body.username;
//   var password = req.body.password;

//   console.log(username)
//   console.log(password)
//   db.collection('users').findOne({ "name": username }, {
//     password: 1, role: 1,
//     _id: 0
//   }, function (err, result) {
//     if (result == null) res.send([{ "auth": false }]);
//     else {
//       bcrypt.compare(password, result.password, function (err, res) {
//         if (err || res == false) {
//           console.log("else false")
//           res.send([{ "auth": false }]);
//         } else {
//           res.send([{ "auth": true, "role": result.role }]);
//         }
//       });
//     }
//   });
// });




router.route('/authuser').post(function (req, res2) {
  var username = req.body.username;
  var password = req.body.password


  db.collection('users').findOne({ "name": username }, {
    password: 1, role: 1,
    _id: 0
  }, function (err, result) {
    if (result == null) res2.send([{ "auth": false }]);
    else {
      bcrypt.compare(password, result.password, function (err, res) {
        if (err || res == false) {
          res2.send([{ "auth": false }]);
        } else {
          res2.send([{ "auth": true, "role": result.role }]);
        }
      });
    }
  });
});


router.route('/reguser').post(function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;
  bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function (err, hash) {
    db.collection('users').insertOne({
      "name": username, "password": hash,
      "role": role
    }, (err, result) => {
      if (err) return console.log(err)
      console.log('user registered')
      res.send(result);
    });
  });
})


//retrieve products from database
router.route('/products').get(function (req, res) {
  db.collection('products').find().toArray(function (err, results) {
    if (err) return console.log(err);
    console.log(results);
    res.send(results);
  });
});
//get product by id
router.route('/products/:_id').get(function (req, res) {
  db.collection('products').findOne({ "_id": ObjectId(req.params._id) }, (err, results) => {
    if (err) return console.log(err);
    res.send(results)
  })
})

//findone product 

//add to cart
router.route('/add-to-cart').post(function (req, res) {
  console.log('hello');
  console.log(req.body);
  db.collection('orders').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log(results);
    res.send(results);
  });
});
//get from cart
router.route('/get-cart/:user').get(function (req, res) {
  db.collection('orders').find({ 'user': req.params.user }).toArray(function (err, results) {
    if (err) return console.log(err);
    console.log(results);
    res.send(results);
  });
});
// delete product based on id
router.route('/delete-product/:_id').delete(function (req, res) {
  db.collection('orders').deleteOne({ "_id": ObjectId(req.params._id) }, (err,
    results) => {
    res.send(results);
  });
});
// create new order details
router.route('/add-details').post(function (req, res) {
  db.collection('details').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.send(results);
  });
});
// retrieve all order details based on user logged in
router.route('/get-details/:user').get(function (req, res) {
  db.collection('details').find({ 'user': req.params.user }).toArray(function (err, results) {
    if (err) return console.log(err);
    console.log(results);
    res.send(results);
  });
});
// delete order details based on id
router.route('/delete-details/:_id').delete(function (req, res) {
  db.collection('details').deleteOne({ "_id": ObjectId(req.params._id) }, (err,
    results) => {
    res.send(results);
  });
});
// update order details based on id
router.route('/update-details/:_id').put(function (req, res) {
  db.collection('details').updateOne({ "_id": ObjectId(req.params._id) }, {
    $set: req.body
  }, (err, results) => {
    res.send(results);
  });
});
//add to favorites
router.route('/add-fav').post(function (req, res) {
  db.collection('favorites').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log('added fav to database!');
    res.send(results);
  });
});
router.route('/get-fav/:user').get(function (req, res) {
  db.collection('favorites').find({ 'user': req.params.user }).toArray(function (err, results) {
    if (err) return console.log(err);
    console.log(results);
    console.log('retrieved from database!');
    res.send(results);
    
  });
});
// delete order details based on id
router.route('/delete-fav/:_id').delete(function (req, res) {
  db.collection('favorites').deleteOne({ "_id": ObjectId(req.params._id) }, (err,
    results) => {
      console.log('deleted from database!');
    res.send(results);
  });
});
router.route('/all-orders').get(function (req, res) {
  db.collection('orders').find().toArray(function (err, results) {
    if (err) return console.log(err);
    console.log(results);
    res.send(results);
  });
});
module.exports = router;



