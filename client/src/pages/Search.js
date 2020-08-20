import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn";
import GoogleAPI from "../utils/GoogleAPI";
import MongoAPI from "../utils/MongoAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import useDebounce from "../utils/deounceHook"

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    author: "",
    synopsis: ""
  })

  //const [saveIcons, setSaveIcons] = useState([true]);

  const debouncedSearchTerm = useDebounce(formObject, 5000);

  // Load all books and store them with setBooks
  useEffect( () => {
    if(!formObject.title && !formObject.author){
      return;
    }
    if(debouncedSearchTerm){
       loadBooks(formObject.title, formObject.author).then((data) =>{
        if(data!== undefined && data.length !== 0){
          
          data.forEach(element => {
            element.saved = false;
          });
          console.log(data);
            setBooks(data);
            //setSaveIcons([...saveIcons, ])
          }
        })
      }
      
      
  }, [debouncedSearchTerm])

  // Loads all books and sets them to books
  async function loadBooks(title, author) {
    try{
    let res = await GoogleAPI.getBooks(title, author);
    console.log(res.data.items)
    return res.data.items;
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

  function saveClick(bookInfo){
    var thumb;
    console.log(bookInfo, "BOOK INFO");
    if(bookInfo.volumeInfo.imageLinks.thumbnail !== undefined){
      thumb = bookInfo.volumeInfo.imageLinks.thumbnail
    }
    else{
      thumb = "";
    }
    var book = {
    title: bookInfo.volumeInfo.title,
    author: bookInfo.volumeInfo.authors,
    link: bookInfo.selfLink ,
    thumbnail: thumb
    }
    console.log(book);
    MongoAPI.saveBook(book).then((res) => {
      hideSaveBtn(bookInfo);
      alert(`${res} has been saved to your library!`);
      
    }).catch(err => {
      throw err; 
    })
  }

  function hideSaveBtn(book){
    let booksTemp = [...books];
    booksTemp.forEach( item => {
      if(book.id === item.id)
      {
        item.saved = true;
      }
    })
    setBooks(booksTemp);
  


  }


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
              {/* <TextArea
                onChange={() => {}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
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
                      {(book.volumeInfo.imageLinks.thumbnail !== undefined) ? (
  
                      <img src = {book.volumeInfo.imageLinks.thumbnail } />
                      ) : (<h3>Image Unavailable</h3>)}
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
                        {!book.saved ? (
                        <SaveBtn onClick={() => saveClick(book)} />
                        ) : null }
                        
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


export default Books;
