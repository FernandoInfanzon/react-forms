import { useState, useRef } from 'react'

export default function Login() {

const [enteredValues, setEnteredValues] = useState({
  email: '',
  password: ''
});

const [didEdit, setDidEdit] = useState({
  email: false,
  password: false
})

const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

 function handleSubmit(e){
  e.preventDefault();
  const enteredEmail = email.current.value;
  const enteredPassword = password.current.value;
}

function handleInputChange(identifier, value){
  setEnteredValues(prevState => ({
    ...prevState,
    [identifier]: value
  }));
  setDidEdit(prevState => ({
    ...prevState,
    [identifier]: false
  }));
}

function handleInputBlur(identifier){
  setDidEdit(prevState => ({
    ...prevState,
    [identifier]: true
  }));
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={(e)=>handleInputBlur('email')} onChange={(e)=> handleInputChange('email', e.target.value)} value={enteredValues.email}/>
          <div className='control-error'>{emailIsInvalid && 'Please enter a valid email address.'}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
