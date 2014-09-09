var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
  server: '10.0.0.9',
  userName: 'sa',
  password: 'Control123!'
  /*
  ,options: {
    debug: {
      packet: true,
      data: true,
      payload: true,
      token: false,
      log: true
    },
    database: 'DBName',
    encrypt: true // for Azure users
  }
  */
};

var connection = new Connection(config);

connection.on('connect', function(err) {
    // If no error, then good to go...
    executeStatement();
  }
);

connection.on('debug', function(text) {
    //console.log(text);
  }
);


function executeStatement() {
  request = new Request("EXEC sp_databases;", function(err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }

    connection.close();
  });

  request.on('row', function(columns) {
    columns.forEach(function(column) {
      if (column.value === null) {
        console.log('NULL');
      } else {
        console.log(column.value);
        console.log(column.metadata.colName);
        console.log(column.metadata.type.name);
      }
    });
  });

  request.on('done', function(rowCount, more) {
    console.log(rowCount + ' rows returned');
  });

  // In SQL Server 2000 you may need: connection.execSqlBatch(request);
  connection.execSql(request);
}
