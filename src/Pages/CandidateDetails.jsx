import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";

const CandidateDetails = () => {
  const [candidateDetails, setCandidateDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dob: "",
    address: "",
    gender: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    highestEducation: "",
    cgpa: "",
  });

  const [errors, setErrors] = useState({});  
  const navigate = useNavigate(); 

  const validateForm = () => {
    let newErrors = {};

     Object.keys(candidateDetails).forEach((field) => {
      if (!candidateDetails[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      navigate("/candidate/documentUpload"); 
    }
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", width: "100%", height: "100vh" }}>
      <div style={{ paddingTop: "100px" }} className="container">
        <h1 style={{ color: "#002147", fontSize: "30px" }} className="py-5 fw-bold">
          Candidate Registration <hr />
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <Form>
              <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
                <Form.Control
                  value={candidateDetails.firstName}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, firstName: e.target.value })}
                  type="text"
                  placeholder="First Name"
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </FloatingLabel>

              <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
                <Form.Control
                  value={candidateDetails.lastName}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, lastName: e.target.value })}
                  type="text"
                  placeholder="Last Name"
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </FloatingLabel>

              <div className="d-flex justify-content-between">
                <FloatingLabel controlId="floatingAge" label="Age" className="mb-3 me-2">
                  <Form.Control
                    value={candidateDetails.age}
                    onChange={(e) => setCandidateDetails({ ...candidateDetails, age: e.target.value })}
                    type="number"
                  />
                  {errors.age && <small className="text-danger">{errors.age}</small>}
                </FloatingLabel>

                <FloatingLabel controlId="floatingDob" label="Date of Birth" className="mb-3 ms-2">
                  <Form.Control
                    value={candidateDetails.dob}
                    onChange={(e) => setCandidateDetails({ ...candidateDetails, dob: e.target.value })}
                    type="date"
                  />
                  {errors.dob && <small className="text-danger">{errors.dob}</small>}
                </FloatingLabel>
              </div>

              <FloatingLabel controlId="floatingAddress" label="Current Address" className="mb-3">
                <Form.Control
                  value={candidateDetails.address}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, address: e.target.value })}
                  type="text"
                  placeholder="Current Address"
                />
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </FloatingLabel>

              <Form.Select
                aria-label="Gender"
                className="mb-3"
                value={candidateDetails.gender}
                onChange={(e) => setCandidateDetails({ ...candidateDetails, gender: e.target.value })}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              {errors.gender && <small className="text-danger">{errors.gender}</small>}
            </Form>
          </div>

          <div className="col-lg-6">
            <Form>
              <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
                <Form.Control
                  value={candidateDetails.email}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, email: e.target.value })}
                  type="email"
                  placeholder="Email Address"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </FloatingLabel>

              <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                <Form.Control
                  value={candidateDetails.phoneNumber}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, phoneNumber: e.target.value })}
                  type="tel"
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
              </FloatingLabel>

              <FloatingLabel controlId="floatingNationality" label="Nationality" className="mb-3">
                <Form.Control
                  value={candidateDetails.nationality}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, nationality: e.target.value })}
                  type="text"
                  placeholder="Nationality"
                />
                {errors.nationality && <small className="text-danger">{errors.nationality}</small>}
              </FloatingLabel>

              <FloatingLabel controlId="floatingEducation" label="Highest Education" className="mb-3">
                <Form.Control
                  value={candidateDetails.highestEducation}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, highestEducation: e.target.value })}
                  type="text"
                  placeholder="Highest Education"
                />
                {errors.highestEducation && <small className="text-danger">{errors.highestEducation}</small>}
              </FloatingLabel>

              <FloatingLabel controlId="floatingEducationGrade" label="CGPA / %" className="mb-3">
                <Form.Control
                  value={candidateDetails.cgpa}
                  onChange={(e) => setCandidateDetails({ ...candidateDetails, cgpa: e.target.value })}
                  type="text"
                  placeholder="%"
                />
                {errors.cgpa && <small className="text-danger">{errors.cgpa}</small>}
              </FloatingLabel>
            </Form>
          </div>
        </div>

        <div className="d-flex justify-content-center my-5">
          <button className="mx-4 rounded-pill border py-2 px-3" style={{ backgroundColor: "white ", color: "#002147 ", fontSize: "18px", border: "solid #002147" }}>
            Cancel
          </button>
          <button onClick={handleNext} style={{ backgroundColor: "#002147 ", color: "white", fontSize: "18px" }} className="mx-5 rounded-pill border py-2 px-3">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
