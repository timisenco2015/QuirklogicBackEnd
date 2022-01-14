 class Book{
    
    constructor(id,bookName, bookAuthor, searchKeyword){
       this.id=id
        this.name = bookName;
        this.author=bookAuthor;
        this.keyword=searchKeyword;
     
    }




    getName(){
        return this.name;
    }

    getAuthor(){
       return this.author;
    }

    getKeyword(){
        return this.keyword;
    }
}

module.exports = Book;

