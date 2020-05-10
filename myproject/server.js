//Command to install express Js:
// npm install express --save

const express = require('express');
var bodyParser = require('body-parser');
const app = express();

var path = require('path');
var pg = require('pg');
var con_string = 'postgresql://super_user:super_pass@localhost:5432/grocerylistdatabase';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/selectgroceries', function (req, res) {
  var pg_client = new pg.Client(con_string);
  pg_client.connect();
  var sql = 'select * from groceries';
  var query = pg_client.query(sql);

  query.on('row', function (row, result) {
    result.addRow(row);
  });

  query.on('end', function (result) {
    pg_client.end();
    var resJSON = {
      data: result.rows,
      status: 'success',
    };
    res.json(resJSON);
  });

  query.on('error', function (err) {
    console.log('Query error: ' + err);
  });
});

app.post('/insertgroceries', function (req, res) {
  var name = req.body.name;

  console.log("data from frontend:", name, quantity);
  var pg_client = new pg.Client(con_string);
  pg_client.connect();
  var sql = "INSERT INTO groceries(name,quantity) values ('" + name + "')";
  var query = pg_client.query(sql);

  query.on("end", function (result) {
    // pg_client.end();
    var sql = 'select * from groceries';
    var query = pg_client.query(sql);

    query.on('row', function (row, result) {
      result.addRow(row);
    });

    query.on('end', function (result) {
      pg_client.end();
      var resJSON = {
        data: result.rows,
        status: 'success',
      };
      res.json(resJSON);
    });

    query.on('error', function (err) {
      console.log('Query error: ' + err);
    });

  });
  query.on('error', function (err) {
    console.log('Query error: ' + err);
  });

});

app.delete('/deletegroceries', function (req, res) {
  var id = req.query.id;

  var pg_client = new pg.Client(con_string);
  pg_client.connect();
  var sql = "delete from groceries where id=" + id;
  var query = pg_client.query(sql);

  query.on("end", function (result) {
    var sql = 'select * from groceries';
    var query = pg_client.query(sql);

    query.on('row', function (row, result) {
      result.addRow(row);
    });

    query.on('end', function (result) {
      pg_client.end();
      var resJSON = {
        data: result.rows,
        status: 'success',
      };
      res.json(resJSON);
    });

    query.on('error', function (err) {
      console.log('Query error: ' + err);
    });

  });
  query.on('error', function (err) {
    console.log('Query error: ' + err);
  });

});

app.put('/updategroceries', function (req, res) {
  var id = req.body.id;
  var name = req.body.name;

  var pg_client = new pg.Client(con_string);
  pg_client.connect();
  var sql = "update groceries set name='" + name + "' where id=" + id;
  var query = pg_client.query(sql);

  query.on("end", function (result) {
    var sql = 'select * from groceries';
    var query = pg_client.query(sql);

    query.on('row', function (row, result) {
      result.addRow(row);
    });

    query.on('end', function (result) {
      pg_client.end();
      var resJSON = {
        data: result.rows,
        status: 'success',
      };
      res.json(resJSON);
    });

    query.on('error', function (err) {
      console.log('Query error: ' + err);
    });

  });
  query.on('error', function (err) {
    console.log('Query error: ' + err);
  });

});

app.use('/assets', express.static(__dirname + '/assets/'));

app.listen(3002, function () {
  console.log(`app listening `);
});
