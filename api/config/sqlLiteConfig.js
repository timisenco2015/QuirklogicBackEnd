const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

class SqlLiteDbConfig {
    constructor() {
        
    }

    initialize(){
      this.db = new sqlite3.Database(`${process.env.SQLLITEDBFILELOCATION}`, sqlite3.OPEN_READWRITE|sqlite3.OPEN_CREATE, (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('Connected to the quirklogic database.');
          });
        return this;
    };

    createTables() {
        this.db.run('CREATE TABLE IF NOT EXISTS books(id integer primary key autoincrement, name text not null, author not null, keyword varchar(10) not null)')
    };

    createBook(book){
      return new Promise((resolve, reject) => {

      this.db.run(`INSERT INTO books(name,author,keyword) VALUES(?,?,?)`, [book.getName(),book.getAuthor(),book.getKeyword()], function(err) {
        if (err) {
          reject(err.message);
        }
        resolve(true);
        console.log(`Record has been inserted`);
      });
    });
    };

    fecthAllBooks(){
      return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM books",
      (error, rows) => {
        if(error){
          reject({isFectched:false, error:err.message});
        }
        resolve({isFectched:true, list:rows});
      });
    });
    };
    deleteBookById(id){
      return new Promise((resolve, reject) => {

        this.db.run(`DELETE FROM books where id=${id}`, function(err) {
          if (err) {
            reject(err.message);
          }
          resolve(true);
          console.log(`Record has been deleted`);
        });
      });

    }
  }


module.exports = new SqlLiteDbConfig();