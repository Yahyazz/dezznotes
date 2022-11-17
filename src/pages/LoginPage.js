import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>
        Masuk ke <span className="text-blue">dezznotes.</span>
      </h2>
      <LoginInput login={onLogin} />
      <p className="text-center">
        Belum punya akun?
        <Link to="/register">
          <span className="text-blue">
            <i> buat akun sekarang</i>
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
