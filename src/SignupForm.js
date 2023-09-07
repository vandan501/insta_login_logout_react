import React from 'react';
import './App.css'
const SignupForm = () => {
  return (
    <div className='instaborder'>
    <img alt='insta logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLsApKNpkDLc2DCaOkGqg7hRYxJuFwod5RbFwwH2nLh4rjFtqMzK0PAtMNs6GiM1nvvA&usqp=CAU' className='logo'/>
    <form className="signup-form">
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email id " />
      <input type="Password" placeholder=" Password" />
      <input type="Password" placeholder=" Confirm Password" />
    

     <button>SignUp</button>
    </form>
    <p>Already have an account?
        
    </p>

    </div>
  );
};

export default SignupForm;
