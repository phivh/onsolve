## 2. Using your knowledge to make the below code better:
### Before
   ```javascript
      const sql = require('mssql');
      const connectionString = 'some-cnn-string';
      const query1 = 'some-query-1';
      const query2 = 'some-query-2';
      const query3 = 'some-query-3';
      module.exports = {
      getAccountId: function(apiKey, cb) { sql.connect(connectionString, (connection)=>{
                  connection.query(query1, (result)=>{
                      console.log(result1);
                      connection.query(query2, { ...result1 }, (result)=>{
                          console.log(result2);
                          connection.query(query3, { ...result2 },
                              console.log(result3);
                          })
      }) });
      }) }
      };
   ```
### After

```javascript

//Code refactor

const sql = require('mssql');
const connectionString = 'some-cnn-string';
const query1 = 'some-query-1';
const query2 = 'some-query-2';
const query3 = 'some-query-3';

function getAccountId() {
    sql.connect(connectionString).then(cnn => {
        return cnn.request().query(query1)
    }).then(result1 => {
        console.log(result1)
        return cnn.request().query(query2, {...result1})
    }).then(result2 => {
        console.log(result2)
        return cnn.request().query(query3, {...result2})
    }).then(result3 => {
        console.log(result3)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getAccountId,
};
```