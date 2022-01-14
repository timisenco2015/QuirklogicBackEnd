const database = require('../config/sqlLiteConfig');
var Book = require('../entity/Book');


let bookRepo =
{
   storeBook:  async function(req, res) 
    {
        var book =  new Book(-1,req.body.bookName, req.body.bookAuthor, req.body.searchKeyword)
        var isRecordInserted =await database.createBook(book);
        if(isRecordInserted===true){
            return {status: 200,statusDesc:"succesful",message: 'Book saved successfully'};
        }
        return {status: 200,statusDesc:"failed",message: 'Book was not saved due to this error:'+isRecordInserted};
   
     },
     getAllBooks:  async function(req, res) 
     {
         var isRecordFetched = await database.fecthAllBooks();
         if(isRecordFetched.isFectched){
             var booksList =[];
            for(let record of isRecordFetched.list)
            {
                booksList.push(new Book(record.id,record.name,record.author,record.keyword ));
            }
           
             return {status: 200,statusDesc:"succesful",data:{message: 'list of all books fecth successfully','Books':booksList}};
         }
         return {status: 200,statusDesc:"failed",message: 'list of all books fecth failed due to this error:'+isRecordFetched.error};
    
      },
       deleteBook: async function(req, res) 
       {
        
           var isRecordDeleted = await database.deleteBookById(req.params.id);
          
           if(isRecordDeleted===true){
            return {status: 200,statusDesc:"succesful",message: 'Book deleted successfully'};
        }
        return {status: 200,statusDesc:"failed",message: 'Book was not deleted due to this error:'+isRecordDeleted};
        },      
}


module.exports = bookRepo;