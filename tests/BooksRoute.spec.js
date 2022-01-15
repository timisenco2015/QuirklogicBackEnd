const bookRepo = require('../api/repo/BookRepo');
const request = require('supertest');
const spy = require('spy');
const {  mockResponse } = require('mock-req-res');
const sinon = require('sinon');
const assert = require('assert');
var api = require('../app');

describe('temperatureRoute Test', function() 
{
    it('test for getAllBooks function', async()=> 
    {

        const bookList=[
            {
                id:1,
                name:"Learning Java Testing",
                author:'John Brown',
                keyword:'JB'
            },
            {
                id:2,
                name:"Java Beginners",
                author:'Paul Rob',
                keyword:'PR'
            },
            {
                id:2,
                name:"How To Be A Nigeria",
                author:'Ayobami Idowu',
                keyword:'AI'
            }  
        
        ]
        
        var data={status: 200,
            statusDesc:"succesful",
            data:{message: 'list of all books fecth successfully',Books:bookList}
        };


        let  req,res;

        // Stub getAllBooks function and make it return book list always
        sinon.stub(bookRepo, "getAllBooks").returns(data);
        options={
            send: spy(),
            status: spy(),
        }
        res = mockResponse(options)
        const result = await request(api)
        .get('/v1/api/books',req,res)
        .expect(200)
        .expect((res)=> {
            assert.equal(res.body.statusDesc, 'succesful');
          });
       
    });

    it('test for storeBook function',  async() =>
    {
        let res, req;
        req = {"body":{
           
            bookName:"How To Be A Nigeria",
            bookAuthor:'Ayobami Idowu',
            searchKeyword:'AI'
        }};

        var data={status: 200,statusDesc:"succesful",message: 'Book saved successfully'}

        // Stub storeBook function and make it return response object data always
        const getAllStub = sinon.stub(bookRepo, "storeBook").returns(data);
        options={
            send: spy(),
            status: spy(),
        }
        res = mockResponse(options)
        const result = await request(api)
        .post('/v1/api/book',req,res)
        .expect(200)
        .expect((res)=> {
            assert.equal(res.body.statusDesc, 'succesful');
          });
    });

    it('test for deleteBook function',  async() =>
    {
        let res, req;
        req = {"params":{
           
           id:1
        }};

        var data={status: 200,statusDesc:"succesful",message: 'Book deleted successfully'}

        // Stub deleteBook function and make it return response object data always
        const getAllStub = sinon.stub(bookRepo, "deleteBook").returns(data);
        options={
            send: spy(),
            status: spy(),
        }
        res = mockResponse(options)
        const result = await request(api)
        .delete('/v1/api/book/:id',req,res)
        .expect(200)
        .expect((res)=> {
            assert.equal(res.body.statusDesc, 'succesful');
          });
    });
    
});