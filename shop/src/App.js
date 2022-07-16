import './App.css';
import { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Detail from './components/Detail'
import Card from './components/Card';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
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
                    <Card shoes={shoes} i={i} key={i}></Card>
                )})
            }
            </div>
          </div>
          <button onClick={ ()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              
            })
            .catch(()=>{
              console.log('error')
            })
          }}>더보기</button>
        </div> 
        } />
        <Route path={ "/detail/:id" } element={ <Detail shoes={ shoes } /> } />
      </Routes>
    </div>
  );
}

export default App;
