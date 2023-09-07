import React from 'react';
const LoginForm = () => {
  return (
    <div className='instaborder'>
    <img alt='insta logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLsApKNpkDLc2DCaOkGqg7hRYxJuFwod5RbFwwH2nLh4rjFtqMzK0PAtMNs6GiM1nvvA&usqp=CAU' className='logo'/>
    <form className="login-form">
      <input type="text" placeholder="Username" />  <br/><br/>
      <input type="password" placeholder="Password" /><br/><br/>
      <button> Login</button>

      
    </form>
    <p>Don't have account?
        
    </p>
    </div>
  );
};

export default LoginForm;
