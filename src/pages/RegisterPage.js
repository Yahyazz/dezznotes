import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="register-page">
      <h2>
        Dafter ke <span className="text-blue">dezznotes.</span>
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p className="text-center">
        Sudah punya akun?
        <Link to="/login">
          <span className="text-blue">
            <i> masuk sekarang</i>
          </span>
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
