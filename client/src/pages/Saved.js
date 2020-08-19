import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import MongoAPI from "../utils/MongoAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    author: "",
    synopsis: ""
  })

  const debouncedSearchTerm = useDebounce(formObject, 1000);

  // Load all books and store them with setBooks
  useEffect( () => {
      // Will mount
  }, [])

  // Loads all books and sets them to books
  async function loadBooks(title, author) {
    try{
    // get route from MONGODB goes here
    }
    catch(err){
        throw err;
    }
}


  function handleInputChange(event) {
    //console.log(event.target.value)
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


    return (
      <Container fluid>
        <Row>
          <Col size = "12">
          
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={() => {}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {}}
              >
                Submit Book
              </FormBtn>
            </form>
            </Col>
          </Row>
          
          <Row>
          <Col size = "12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book.id}>
                      {(book.volumeInfo.imageLinks.thumbnail) ? (
  
                      <img src = {book.volumeInfo.imageLinks.thumbnail} />
                      ) : (<h3>Image Unavailable</h3>)}
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
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
