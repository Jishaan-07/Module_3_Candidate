import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
       
      <i onClick={handleShow} style={{cursor:'pointer'}} class="fa-solid fs-3 fa-bars mx-5"></i>
     
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{fontSize:'28px',color:'#002147'}}>Menu</Offcanvas.Title> 
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
                <nav style={{color:' #333333',fontSize:'20px'}} className="d-flex flex-column my-5">
 
                    <Link className="nav-link my-2" to="/dashboard">Dashboard</Link> <hr />
                    <Link className="nav-link my-2" to="/">Candidate Onboarding</Link> <hr />
                     <Link className="nav-link my-2" to="/candidate/download_Id"> Download Digital ID </Link> <hr />
                    <Link className="nav-link my-2" to="/">Logout</Link>
                </nav>
            </Offcanvas.Body>
        </Offcanvas>
      </>
  )
}

export default SideBar