import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar className=""style={{backgroundColor:'black'}}>
        <Container>
<Link to={'/'} style={{textDecoration:'none'}}>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="https://i.postimg.cc/vmLFsjMr/f5a3d8e16677642b38608ca7b50de547.gif"
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                />{' '}
    <span style={{color:'yellow'}}>
                   <b> BookShelf</b>
        
    </span>          </Navbar.Brand>
    
</Link>        </Container>
      </Navbar>
    </div>
  )
}

export default Header
