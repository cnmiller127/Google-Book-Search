import axios from "axios";


export default {
   
  // Gets all books
  getBooks: function(title, author) {
    var apiKey = "AIzaSyCuk_czwYFGdVmsLa50TR-c4Ttibb1Fwwg";
    var query = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${key}`;
     
    return axios.get(query);
  }
  
};
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCuk_czwYFGdVmsLa50TR-c4Ttibb1Fwwg