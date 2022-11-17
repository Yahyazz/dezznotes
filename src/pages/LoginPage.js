import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import TranslateContext from '../contexts/TranslateContext';

function LoginPage({ loginSuccess }) {
  const { language } = useContext(TranslateContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>
        {language === 'id' ? 'Masuk ke ' : 'Log in to '}
        <span className="text-blue">dezznotes.</span>
      </h2>
      <LoginInput login={onLogin} />
      <p className="text-center">
        {language === 'id' ? 'Belum punya akun?' : "Dosn't have an account?"}
        <Link to="/register">
          <span className="text-blue">
            <i> {language === 'id' ? 'buat akun sekarang.' : 'create account now.'}</i>
          </span>
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
