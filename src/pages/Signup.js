import React from 'react'
import LoginTemplet from '../components/LoginTemplet'

const Signup = ({setLoggedIn}) => {
  return (
    <LoginTemplet
        title="Welcome to EducationToday!"
        desc1="Welcome to EducationToday!"
        desc2="Welcome to EducationToday!"
        image="https://educationtoday.co/assets/img/educationtoday.png"
        formType="signup"
        setLoggedIn={setLoggedIn}
    />
  )
}

export default Signup