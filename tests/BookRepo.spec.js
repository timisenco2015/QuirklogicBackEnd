    const bookRepo = require('../api/repo/bookRepo');


    jest.mock('../api/config/sqlLiteConfig')


    describe('test person repo', function()
    { 

    it("testing getAllBooks() function of bookRepo", async () => 
    {

    try
    {

    const Response =[{
    id:1,
    name:'Java Testing',
    author:'John Beek',
    keyword:'JB'
    },{
    id:2,
    name:'How To A Jerk',
    author:'John Bulb',
    keyword:'JB'
    }];
    let mockReq = jest.fn();
    let mockRes = jest.fn().mockImplementation(Response);

    let value = await bookRepo.getAllBooks(mockReq,mockRes.getMockImplementation());
    expect(value).toEqual({status: 200,statusDesc:"succesful",data:{message: 'List of all books fecth successfully',Books:[{
    id:1,
    name:'Java Testing',
    author:'John Beek',
    keyword:'JB'
    },{
    id:2,
    name:'How To A Jerk',
    author:'John Bulb',
    keyword:'JB'
    }]}});         
    }
    catch(err)
    {

    }

    });


    it("testing storeBook() function of bookRepo", async () => 
    {

    try
    {

    const Request ={body:{
    
    bookName:'Java Testing',
    bookAuthor:'John Beek',
    searchKeyword:'JB'
    }};
    let mockReq = jest.fn().mockImplementation(Request);
    let mockRes = jest.fn() 

    let value = await bookRepo.storeBooks(mockReq,mockRes.getMockImplementation());
    expect(value).toEqual({status: 200,statusDesc:"succesful",message: 'Book saved successfully'});         
    }
    catch(err)
    {

    }

    });

    it("testing deleteBook() function of bookRepo", async () => 
    {

    try
    {

    const Request ={param:1};
    let mockReq = jest.fn().mockImplementation(Request);
    let mockRes = jest.fn() 

    let value = await bookRepo.deleteBook(mockReq,mockRes.getMockImplementation());
    expect(value).toEqual({status: 200,statusDesc:"succesful",message: 'Book deleted successfully'});         
    }
    catch(err)
    {

    }

    });


    });


