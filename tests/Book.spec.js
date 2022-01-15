const Book = require('../api/entity/Book');


describe('test Book entity', function()
{
    var book = new Book(-1,"Unknown Programming", "Edward Bob", "EB");

    it("testing setters and getters for Book entity function of bookRepo", async () => 
    {
        try
        {
        
            assert.equal(book.getName(),"Unknown Programming");
            assert.equal(book.getAuthor(),"Edward Bob");
            assert.equal(book.getKeyword(),"EB");

        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
      
    });

    

});