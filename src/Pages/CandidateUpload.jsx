import React, { useEffect, useState } from 'react'
import head from '../assets/headDoc.png'
import profilePic from '../assets/profilePic.png'
import quali from '../assets/quali.png'
import idProof from '../assets/idProof.png'
import cv from '../assets/cv.png'
import sign from '../assets/sign.png'

import { Link } from 'react-router-dom'

const CandidateUpload = () => {
  const [preview, setPreview] = useState("")
  const [userDetails,setUserDetails]=useState({
    userProfile:"",userCv:"",userQuali:"",userIdProof:""
  })
  console.log(userDetails);
  useEffect(()=>{
    if(userDetails.userProfile.type=="image/png" || userDetails.userProfile.type=="image/jpg" || userDetails.userProfile.type=="image/jpeg" ){
      setPreview(URL.createObjectURL(userDetails.userProfile))
    }else{
      setUserDetails({...userDetails,userProfile:""})
      alert("Please upload a valid image")
    }
  },[userDetails.userProfile])
  
  return (
    <>
   <div style={{backgroundColor:'#F5F5F5',width:'100%',height:'200vh'}}>
      <div className="container" style={{paddingTop:'100px'}}>
        <h1 style={{color:'#002147',fontSize:'30px'}} className="py-5 fw-bold"> Document Uploads <hr/></h1>
  
        <div className="d-flex justify-content-center align-items-center mt-5">
          <img className='img-fluid' src={head} alt="" />
        </div>
        <div className="row container my-5">
          <div className="col-lg-6">

            {/* profilepic */}
            <label className='cursor-pointer my-3 d-flex justify-center'  >
            <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={e => setUserDetails({ ...userDetails, userProfile: e.target.files[0] })}
                  />
                  <img  width={'400px'}  src={preview?preview:profilePic} alt="" />
                </label>

                {/* highestQuali */}
           <label className='cursor-pointer my-3 d-flex justify-center'  >
           <input type="file" style={{ display: "none" }} />

                  <img width={'400px'}   src={quali} alt="" />
                </label>
          </div>
          <div className="col-lg-6">

                  {/* Identity card*/}
                  <label className='cursor-pointer my-3 d-flex justify-center'  >
                  <input type="file" style={{ display: "none" }} />
                  <img  width={'400px'}   src={idProof} alt="" />
                </label>

                {/* CV */}
                <label className='cursor-pointer my-3 d-flex justify-center'  >
                <input type="file" style={{ display: "none" }} />

                  <img  width={'400px'}   src={cv} alt="" />
                </label>
          </div>
        </div>
          {/* Signature */}
          <label className='cursor-pointer my-3 d-flex justify-center'  >
                <input type="file" style={{ display: "none" }} />

                  <img  width={'400px'}   src={sign} alt="" />
                </label>
        <div className='d-flex justify-content-center my-5'>
          
          <button  className='mx-4 rounded-pill border py-3 px-4' style={{backgroundColor:'white ', color:'#002147 ' ,fontSize:'18px',border:'solid #002147'}}>Cancel</button>
          <Link to={'/candidate/download_Id'}><button style={{backgroundColor:'#002147 ', color:'white' ,fontSize:'18px'}} className='mx-5 rounded-pill border py-3 px-4'>Save</button></Link>
      </div>
        </div>
   </div>
      </>
  )
}

export default CandidateUpload