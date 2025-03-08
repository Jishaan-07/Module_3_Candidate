import React, { useState } from 'react';
import ESignature from '../Components/ESignature';
import { Button, Container } from 'react-bootstrap';
import sampleEnrollemnet from '../assets/enrollment.png'
import { Link } from 'react-router-dom';

const EnrollmentLetter = () => {
    const [signature, setSignature] = useState(null);

    return (
        <Container style={{paddingTop:'100px'}} className="mt-5">
            <h1 style={{color:'#002147 '}} className="fw-bolder fs-3">Enrollment Letter</h1>
            <div className="d-flex justify-content-center align-items-center">
                <img width={'500px'} src={sampleEnrollemnet} alt="" />
            </div>
            <div className="p-4 border  " style={{ background: '#f9f9f9' }}>
                <p>Dear Candidate,</p>
                <p>Please sign this document to complete your enrollment process.</p>

                <div className="mt-3">
                    {signature ? (
                        <img src={signature} alt="E-Signature" style={{ width: '200px' }} />
                    ) : (
                        <ESignature onSave={setSignature} />
                    )}
                </div>

                <div className="mt-4 text-center">
                            <Link to={'/candidate/download_Id'}><button style={{backgroundColor:'#002147 ', color:'white' ,fontSize:'18px'}} className='mx-5 rounded-pill border py-3 px-4'>Submit</button></Link>
                </div>
            </div>
        </Container>
    );
};

export default EnrollmentLetter;
