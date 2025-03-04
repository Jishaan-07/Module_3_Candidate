import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';

const CandidateDetails = () => {
  return (
    <>
      <div style={{ backgroundColor: '#F5F5F5', width: '100%', height: '100vh' }}>
        <div style={{ paddingTop: '100px' }} className="container">
          <h1 style={{ color: '#002147', fontSize: '30px' }} className="py-5 fw-bold">
            Candidate Registration <hr />
          </h1>
          <div className="row">
             <div className="col-lg-6">
              <Form>
                <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
                  <Form.Control type="text" placeholder="First Name" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
                  <Form.Control type="text" placeholder="Last Name" />
                </FloatingLabel>

                <div className="d-flex justify-content-between">
                  <FloatingLabel controlId="floatingAge" label="Age" className="mb-3 me-2">
                    <Form.Control type="number" />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingDob" label="Date of Birth" className="mb-3 ms-2">
                    <Form.Control type="date" />
                  </FloatingLabel>
                </div>
                <FloatingLabel controlId="floatingAddress" label="Current Address" className="mb-3">
                  <Form.Control type="text" placeholder="Current Address" />
                </FloatingLabel>

                <Form.Select aria-label="Gender" className="mb-3">
                  <option>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form>
            </div>

             <div className="col-lg-6">
              <Form>
                <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                  <Form.Control type="tel" placeholder="Phone Number" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingNationality" label="Nationality" className="mb-3">
                  <Form.Control type="text" placeholder="Nationality" />
                </FloatingLabel>
             
                

                <FloatingLabel controlId="floatingEducation" label="Highest Education" className="mb-3">
                  <Form.Control type="text" placeholder="Highest Education" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEducationGrade" label="CGPA / % " className="mb-3">
                  <Form.Control type="text" placeholder="%" />
                </FloatingLabel>
              </Form>
            </div>
          </div>
        <div className='d-flex justify-content-center my-5'>
          
            <button  className='mx-4 rounded-pill border py-2 px-3' style={{backgroundColor:'white ', color:'#002147 ' ,fontSize:'18px',border:'solid #002147'}}>Cancel</button>
            <Link to={'/candidate/documentUpload'}><button style={{backgroundColor:'#002147 ', color:'white' ,fontSize:'18px'}} className='mx-5 rounded-pill border py-2 px-3'>Next</button></Link>
        </div>

        </div>
      </div>
    </>
  );
};

export default CandidateDetails;
