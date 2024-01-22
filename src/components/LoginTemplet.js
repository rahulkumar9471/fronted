import React from 'react'
import SignupForm from './SignupForm'
import LoginFrom from './LoginFrom'

const LoginTemplet = ({title, desc1, desc2, image, formType, setLoggedIn}) => {
 
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formType === 'signup' ?
            (<SignupForm setLoggedIn={setLoggedIn}/>)
            : 
            (<LoginFrom setLoggedIn={setLoggedIn}/>)
            }

            <div></div>
            <p>OR</p>
            <div></div>

            <button>Sign up with Google</button>

        </div>
        <div>
            <img src={image} width={558} height={504} loading='lazy' alt=''/>
            <img src={image} width={558} height={504} loading='lazy' alt=''/>
        </div>
    </div>
  )
}

export default LoginTemplet