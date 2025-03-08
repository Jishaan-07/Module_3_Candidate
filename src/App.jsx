import { useState } from 'react'
 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CandidateDetails from './Pages/CandidateDetails'
import CandidateUpload from './Pages/CandidateUpload'
import CandidateReview from './Pages/CandidateReview'
import CandidateIdGenerate from './Pages/CandidateIdGenerate'
import Pnf from './Pages/Pnf'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import EnrollmentLetter from './Pages/EnrollmentLetter'
function App() {
 
  return (
    <>
    <Header/>
       <Routes>
        <Route  path='/' element={<CandidateDetails/>}  />
        <Route  path='/candidate/documentUpload' element={<CandidateUpload/>}  />
        <Route  path='/candidate/detailsReview' element={<CandidateReview/>}  />
        <Route  path='/candidate/download_Id' element={<CandidateIdGenerate/>}  />
        <Route  path='/candidate/enrollment_letter' element={<EnrollmentLetter/>}  />

        <Route  path='*' element={<Pnf/>}  />

      </Routes>
    </>
  )
}

export default App
