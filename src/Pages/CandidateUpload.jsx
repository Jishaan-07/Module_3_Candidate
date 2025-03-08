import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import head from "../assets/headDoc.png";
import profilePic from "../assets/profilePic.png";
import quali from "../assets/quali.png";
import idProof from "../assets/idProof.png";
import cv from "../assets/cv.png";

const CandidateUpload = () => {
  const [previews, setPreviews] = useState({
    userProfile: profilePic, userQuali: quali, userIdProof: idProof, userCv: cv });

  const [userDetails, setUserDetails] = useState({
    userProfile: "",  userQuali: "", userIdProof: "", userCv: "" 
   });

  const [missingFields, setMissingFields] = useState({  userProfile: false,  userQuali: false, userIdProof: false,  userCv: false
  });

  const navigate = useNavigate();

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const type = ["image/png", "image/jpg", "image/jpeg", "application/pdf"].includes(file.type);
      if (type) {
        setUserDetails({ ...userDetails, [key]: file });
        setPreviews({ ...previews, [key]: URL.createObjectURL(file) });
        setMissingFields({ ...missingFields, [key]: false });  
      } else {
        alert("Invalid file type. Please upload an image (PNG, JPG, JPEG) or PDF.");
      }
    }
  };

  const handleSubmit = () => {
    const newMissingFields = {
      userProfile: !userDetails.userProfile,
      userQuali: !userDetails.userQuali,
      userIdProof: !userDetails.userIdProof,
      userCv: !userDetails.userCv
    };

    setMissingFields(newMissingFields);

    if (Object.values(newMissingFields).some((isMissing) => isMissing)) {
      alert("Please upload all required documents  .");
    } else {
      navigate("/candidate/enrollment_letter");
    }
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", width: "100%", minHeight: "100vh", paddingBottom: "50px" }}>
      <div className="container pt-5">
        <h1 style={{ color: "#002147", fontSize: "30px" }} className="py-5 fw-bold">
          Document Uploads
          <hr />
        </h1>

        <div className="d-flex justify-content-center align-items-center mt-5">
          <img className="img-fluid" src={head} alt="Header Image" />
        </div>

        <div className="row my-5">
          <div className="col-lg-6">
            {/* Profile Picture Upload */}
            <label className="cursor-pointer my-3 d-flex flex-column align-items-center">
              <input type="file" style={{ display: "none" }} onChange={(e) => handleFileChange(e, "userProfile")} />
              <img
                width={"400px"}
                src={previews.userProfile}
                alt="Profile Preview"
                style={{ border: missingFields.userProfile ? "3px solid red" : "none" }}
              />
            </label>

            {/* Qualification Upload */}
            <label className="cursor-pointer my-3 d-flex flex-column align-items-center">
              <input type="file" style={{ display: "none" }} onChange={(e) => handleFileChange(e, "userQuali")} />
              <img  width={"400px"}  src={previews.userQuali} alt="Qualification Preview"  style={{ border: missingFields.userQuali ? "3px solid red" : "none" }}  />
            </label>
          </div>

          <div className="col-lg-6">
            {/* ID Proof Upload */}
            <label className="cursor-pointer my-3 d-flex flex-column align-items-center">
              <input type="file" style={{ display: "none" }} onChange={(e) => handleFileChange(e, "userIdProof")} />
              <img  width={"400px"} src={previews.userIdProof} alt="ID Proof Preview"  style={{ border: missingFields.userIdProof ? "3px solid red" : "none" }}  />
            </label>

            {/* CV Upload */}
            <label className="cursor-pointer my-3 d-flex flex-column align-items-center">
              <input type="file" style={{ display: "none" }} onChange={(e) => handleFileChange(e, "userCv")} />
              <img  width={"400px"}  src={previews.userCv}  alt="CV Preview" style={{ border: missingFields.userCv ? "3px solid red" : "none" }}  />
            </label>
          </div>
        </div>

        <div className="d-flex justify-content-center my-5">
          <button className="mx-4 rounded-pill border py-3 px-4" style={{ backgroundColor: "white", color: "#002147", fontSize: "18px", border: "solid #002147" }}>
            Cancel
          </button>
          <button onClick={handleSubmit} style={{ backgroundColor: "#002147", color: "white", fontSize: "18px" }} className="mx-5 rounded-pill border py-3 px-4">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateUpload;
