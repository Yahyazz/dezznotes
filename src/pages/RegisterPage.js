import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import TranslateContext from '../contexts/TranslateContext';

function RegisterPage() {
  const navigate = useNavigate();
  const { language } = useContext(TranslateContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="register-page">
      <h2>
        {language === 'id' ? 'Dafter ke ' : 'Sign up to '}
        <span className="text-blue">dezznotes.</span>
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p className="text-center">
        {language === 'id' ? 'Sudah punya akun?' : 'Already have an account?'}
        <Link to="/login">
          <span className="text-blue">
            <i> {language === 'id' ? 'masuk sekarang.' : 'log in now.'}</i>
          </span>
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
