import React from 'react';

const LoginPage = ({ name, setName, auth }) => {
  const handleSubmit = e => {
    e.preventDefault();
    auth.login();
    auth.dispName(name);
    setName('');
  };

  return (
    <div>
      <h4 className='center'>Login Page</h4>
      <form
        action=''
        onSubmit={handleSubmit}
        className='card-panel grey lighten-3'>
        <div className='input-field'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='input-field'>
          <button className='btn blue'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
