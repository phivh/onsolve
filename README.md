## 1. WriteaJavaScriptfunctiontakesastringandreturnanewstringwithall vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

## 2. Usingyourknowledgetomakethebelowcodebetter:
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
## 3. Implementanapplicationcalled“MarvelManager”thathas
- A Home Page that lists all Marvel’s characters in 3 columns: Name,
Description (if available, limit to 100 letters) and Thumbnail. The data
(result)=>{
given by Marvel Comics API (see below to know how to use Marvel Comics API)
Here is a mockup (just sample)
 
- When use click on the Marvel’s Thumbnail, it displays the Details Page which show all information about that character: name, image, full description, list of available comics (including comic’s description & thumbnail)
Mockup:
 
Technology: you can use any front-end libs, framework that you are familiar with: ReactJs, AngularJS or even jQuery
Unit tests are required
Marvel Comics API:
- Follow this link to register an account:
https://www.marvel.com/register?referer=https%3A%2F%2Fdeveloper.
marvel.com%2Faccount
- Get public/private keys and having a look at this URL to understand how to call the APIs: https://developer.marvel.com/docs
Nice to have:
- Beautiful UI design/ Responsive design using UI framework and libs (Bootstrap, PureCSS...)
- Working well on multi-browsers
- Pagination OR infinite loading on Home page
- Can use keyboard to navigate (TAB & SHIFT-TAB to move between
items, press ENTER to access)
- Deploy your app on a live server & send us URL
- CI/CD implemented
