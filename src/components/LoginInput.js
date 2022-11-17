import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import TranslateContext from '../contexts/TranslateContext';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { language } = useContext(TranslateContext);

  function onSubmitHandler(event) {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  }

  return (
    <form onSubmit={onSubmitHandler} className="note-input">
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button className="btn btn-main">{language === 'id' ? 'Masuk' : 'Log in'}</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
