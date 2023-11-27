import React, { useState } from 'react'
import InputformComponent from '../../components/inputform/InputformComponent'
import ButtonComponent from '../../components/button/ButtonComponent';

const DefaultFormValue = {
  Email:'',
  FullName:'',
  Username: '',
  Pass:'',
}

const SignupPage = () => {
  const [formfield, setformfield] = useState(DefaultFormValue);

  const handlechange = (event) =>{
    const {name,value} = event.target;
    setformfield({...formfield,[name]:value})
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form action="">

        <InputformComponent
         inputDetails={{
            onChange: handlechange,
            placeholder:'Email address',
            type:'email',
            value:formfield.Email,
            name:'Email',
          }}
        />
        <InputformComponent
         inputDetails={{
            onChange: handlechange,
            placeholder:'Full Name',
            type:'text',
            value:formfield.FullName,
            name:'FullName',
          }}
        />
         <InputformComponent
         inputDetails={{
            onChange: handlechange,
            placeholder:'Username',
            type:'text',
            value:formfield.Username,
            name:'Username',
          }}
        />
         <InputformComponent
         inputDetails={{
            onChange: handlechange,
            placeholder:'Password',
            type:'password',
            value:formfield.Pass,
            name:'Pass',
          }}
        />

        <ButtonComponent type='submit'>
          Log in with Google 
        </ButtonComponent>
      </form>
    </>
  )
}

export default SignupPage
