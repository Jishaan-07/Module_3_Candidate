import React from 'react'
import DigiID from '../Components/DigiID'
import { Link } from 'react-router-dom'

const CandidateIdGenerate = () => {
  return (
    < >
  <div style={{backgroundColor:'#F5F5F5',width:'100%',height:'200vh'}}>
     <DigiID/>
     <div className='d-flex justify-content-center my-5'>
            
            
             <button style={{backgroundColor:'#002147 ', color:'white ' ,border:'solid 2px #002147 ',fontSize:'18px'}} className='mx-5 rounded-pill border py-3 px-4'>Download ID</button>
        </div>
  </div>
      </>
  )
}

export default CandidateIdGenerate