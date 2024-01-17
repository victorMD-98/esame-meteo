import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'
import download from "../Assets/img/download.jpg"
import "../Assets/fileCss/Navbar.css"


export default function NavBar() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home" > <img className='logo' src= {download} alt="logo" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}
