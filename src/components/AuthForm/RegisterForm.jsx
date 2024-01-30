import cssauth from './AuthForm.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { singUpThunk } from 'slice/auth/thunk';

function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.currentTarget.elements;
    
    dispatch(
      singUpThunk({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <div className={cssauth.auth}>
      <form onSubmit={handleSubmit} className={cssauth.form} name="client-form">
        <div className={cssauth.form_div}>
          <div className={cssauth.form_container}>
            <label className={cssauth.auth_label} htmlFor="user-name"></label>
            <div className={cssauth.auth_wrapper}>
              <input
                className={cssauth.auth_input}
                type="text"
                id="user-name"
                name="name"
                placeholder="NAME"
              />
            </div>
          </div>

          <div className={cssauth.form_container}>
            <label className={cssauth.auth_label} htmlFor="e-mail"></label>
            <div className={cssauth.auth_wrapper}>
              <input
                className={cssauth.auth_input}
                type="email"
                id="e-mail"
                name="email"
                placeholder="EMAIL"
              />
            </div>
          </div>

          <div className={cssauth.form_container}>
            <label className={cssauth.auth_label} htmlFor="password"></label>
            <div className={cssauth.auth_wrapper}>
              <input
                className={cssauth.auth_input}
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
              />
            </div>
          </div>
        </div>
        <div className={cssauth.btn_div}>
          <button className={cssauth.btn_submit} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;