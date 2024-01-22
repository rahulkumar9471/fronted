import React from 'react'
import LoginTemplet from '../components/LoginTemplet'

const Login = ({setLoggedIn}) => {
  return (
    <LoginTemplet
        title="Welcome to EducationToday!"
        desc1="Welcome to EducationToday!"
        desc2="Welcome to EducationToday!"
        image="https://educationtoday.co/assets/img/educationtoday.png"
        formType="login"
        setLoggedIn={setLoggedIn}
    />
  )
}

export default Login