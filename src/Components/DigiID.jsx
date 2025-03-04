import React from "react";
import cmpny from "../assets/cmpny.png";
import icon from "../assets/men.png";
import signatureSample from "../assets/signatureSample.jpeg";
import qr from "../assets/qr.png";
const DigiID = () => {
    return (
        <>
            <div style={{ paddingTop: "100px" }} className="container">
                <h1 style={{ color: "#002147", fontSize: "30px" }} className="py-5 fw-bold">
                    Candidate Digi-ID <hr />
                </h1>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div
                        className="rounded shadow"
                        style={{
                            backgroundColor: "#002147",
                            width: "350px",
                            height: "480px",
                            borderRadius: "15px",
                            textAlign: "center",
                            padding: "20px",
                            color: "white",
                        }}
                    >
                        <div
                            style={{ backgroundColor: "#4A90E2", borderRadius: "10px", padding: "8px" }}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <h5 className="mx-2 my-2 fw-bold">Company Name</h5>
                            <img width={"50px"} className="mx-3 img-fluid" src={cmpny} alt="Company Logo" />
                        </div>

                        <div className="mt-3 d-flex justify-content-center my-3">
                            <img
                                src={icon}
                                alt="Profile"
                                style={{
                                    width: "100px",
                                    borderRadius: "50%",
                                    border: "3px solid white",
                                }}
                            />
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <p className="   text-white">ID:  EMP12345 </p>

                            <h5 className=" fs-5 fw-bold  text-center text-white">Max Miller</h5>
                        </div>
                        <p className="mt-3 text-start text-white">maxmiller@gmail.com</p>
                        <p className="mt-3 text-start text-white">+91 123456789</p>

                        <div className="d-flex justify-content-between align-items-center">
                            
                                <div>
                                    <p className="mt-3 text-start text-white">Age:  21</p>
                                    <p className=" mt-3  text-start text-white">Male</p>
                                </div>
                                <div className="">
                                    <img className="img-fluid " width={'100px'} src={qr} alt="" />
                                </div>
    
                        
                        </div>
                        <p className="text-white text-start mt-2">Indian</p>


                    </div>
                </div>

            </div>
        </>
    );
};

export default DigiID;
