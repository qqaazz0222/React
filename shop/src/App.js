import './App.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import data from './data.js';
import { useState } from 'react';

function App() {

  let[shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {
            shoes.map( ()=>{
              <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
              <h4>상품명</h4>
              <p>상품설명</p>
          </div>
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
