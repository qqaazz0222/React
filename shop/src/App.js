import './App.css';
import { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ 
        <div>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
            {
              shoes.map((a, i)=>{
                return(
                  <Card shoes={shoes} i={i}></Card>
                )})
            }
            </div>
          </div>
        </div> } />
        <Route path="/detail" element={ <div>상세페이지</div> } />
      </Routes>
    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} width="80%"/>
      <h4>{ props.shoes[props.i].title }</h4>
      <p>{ props.shoes[props.i].price }</p>
    </div>
  )
}

export default App;
