//npm i pg@^6.2.2

var pg = require ('pg');

var con_string = "postgresql://vikram_user:vikram_passwd@localhost:5432/ecommerce";

function selectcustomer() {
	
	var pg_client = new pg.Client(con_string);
	pg_client.connect();
     	var sql = "select * from customers";

	var query = pg_client.query(sql);
	
	query.on('row', function (row, result) { 
        result.addRow(row); 
    });
    

    query.on("end", function (result) {        
        pg_client.end();
        console.log(result.rows);  
    });
    query.on('error', function(err) {
		console.log('Query error: ' + err);
	});
}

function insert_customer(name,address) {
   var pg_client = new pg.Client(con_string);
   pg_client.connect();

   var sql = "INSERT INTO customers(name,address) values ('"+name+"','"+address+"')";
  
   const query = pg_client.query(sql);
   query.on("end", function (result) {
       pg_client.end();
       console.log("insert customer success")

   });
   query.on('error', function(err) {
     console.log('Query error: ' + err);
   });
}

function delete_customer(customerid) {   
   
    var pg_client = new pg.Client(con_string);
    pg_client.connect();
    var sql = "delete from customers where customerid="+customerid; 
    const query = pg_client.query(sql);
    query.on("end", function (result) {          
        pg_client.end(); 
	console.log("customer deleted");

    });
    query.on('error', function(err) {
      console.log('Query error: ' + err);
    });
    
}

function update_customer(name,address,customerid) {   
   
    var pg_client = new pg.Client(con_string);
    pg_client.connect();
    var sql = "update customers set name='"+name+"' ,address='"+address+"'where customerid="+customerid; 
    const query = pg_client.query(sql);
    query.on("end", function (result) {          
        pg_client.end(); 
	console.log("customer updated");

    });
    query.on('error', function(err) {
      console.log('Query error: ' + err);
    });
    
}


//insert_customer("raju","mysore");
selectcustomer();
//delete_customer(3);
//update_customer("vik","kundapur",1);

