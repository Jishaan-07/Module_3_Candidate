import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/men.png';
import SideBar from './SideBar';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#F5F5F5' }} className="w-screen shadow py-2 fixed-top">
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: '30px', color: '#002147' }} className='fw-bolder me-0'>
                        Candidate OnBoarding
                    </Navbar.Brand>
                    
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Navbar.Text className='d-flex justify-content-center align-items-center mx-5' style={{ whiteSpace: 'nowrap' }}>
                            <p className='mb-0 mx-3'>Max Miller</p>
                            <img className='img-fluid rounded-circle' src={icon} alt="Profile" style={{ width: '50px', height: '50px' }} />
                        </Navbar.Text>
                        <SideBar />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
