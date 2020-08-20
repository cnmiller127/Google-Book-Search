import axios from "axios";


export default {
   
  // Gets all books
  getBooks: function(title, author) {
      title = title.split(" ").join("+").trim().toLowerCase();
      author = author.split(" ").join("+").trim().toLowerCase();
      var key = "AIzaSyBiUrKqrG5TvDMPcAfISvOfiH1uy6YaGTg";
      var query;

      if(title && author){
        query = `https://www.googleapis.com/books/v1/volumes?q=${title}+intitle:${title}+inauthor:${author}&key=${key}`;
      }
      else if(title && !author){
        query = `https://www.googleapis.com/books/v1/volumes?q=${title}+intitle:${title}&key=${key}`;
      }
      else if(!title && author){
        query = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:${author}&key=${key}`
      }
    console.log(query);
    return axios.get(query)
  }
           
}
//https://www.googleapis.com/books/v1/volumes?q=rowling+inauthor:rowling&key=AIzaSyBiUrKqrG5TvDMPcAfISvOfiH1uy6YaGTg
//https://www.googleapis.com/books/v1/volumes?q=j.krowling+inauthor:j.krowling&key=AIzaSyBiUrKqrG5TvDMPcAfISvOfiH1uy6YaGTg