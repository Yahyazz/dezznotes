import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import TranslateContext from '../contexts/TranslateContext';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { language } = useContext(TranslateContext);

  function onSubmitHandler(event) {
    event.preventDefault();

    register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <form onSubmit={onSubmitHandler} className="note-input">
      <input
        type="text"
        placeholder={language === 'id' ? 'Nama' : 'Name'}
        value={name}
        onChange={onNameChange}
      />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button className="btn btn-main">{language === 'id' ? 'Daftar sekarang' : 'Sign up'}</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
