import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';

const UserPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <div className="user-page">

       {isSignUp ? <SignupForm /> : <LoginForm />}
      <a onClick= {handleToggle}>
        {isSignUp ? 'Login' : 'SignUp'}
      </a>
    </div>
  );
};

export default UserPage;
