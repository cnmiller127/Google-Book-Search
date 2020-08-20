import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import MongoAPI from "../utils/MongoAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  
console.log(books)
  

  // Load all books and store them with setBooks
  useEffect( () => {
      loadBooks().then(res => {
        console.log(res);
        setBooks(res);
      })
  }, [])

  // Loads all books and sets them to books
  async function loadBooks() {
    try{
      let res = await MongoAPI.getBooks()
      return res.data;
    }
    catch(err){
        throw err;
    }
}

async function handleDelete(id, title) {
  
  try{
    
      await MongoAPI.deleteBook(id);
      const res = await loadBooks();
      setBooks(res);
      alert(title + " has been deleted from your library.")
  }
  catch(err){
    throw err;
  }
}

    return (
      <Container fluid>
          <Row>
          <Col size = "12">
            <Jumbotron>
              <h1>My Personal Library</h1>
            </Jumbotron>
            {books.length !== undefined ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      {(book.thumbnail) ? (
  
                      <img src = {book.thumbnail} />
                      ) : (<h3>Image Unavailable</h3>)}
                        <strong>
                          {book.title} by {book.author.join(", ")}
                        </strong>
                        <DeleteBtn onClick = {() => handleDelete(book._id, book.title)}/>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Saved;
