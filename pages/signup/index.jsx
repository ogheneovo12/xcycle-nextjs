import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../../assets/img/whiteLogo.png";
import fb from "../../assets/img/fb.png";
import go from "../../assets/img/go.png";
import { string as yupString } from "yup";
import checkPasswordStrength from "../../src/Utils/PasswordGuage";



const validationSchema = {
    username: yupString().trim()
      .required()
      .required("username is required")
      .matches(/^[a-zA-Z0-9_]*$/gm, "only alphabet, numbers and underscore allowed"),
  
    email: yupString()
      .trim()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "invalid email format"
      )
      .required("email is required"),
    password: yupString().required("password is required"),
  };
  





function Register(props) {
  const [regDetails, setRegDetails] = useState({
    username: {
      value: "",
      touched: "",
      error: "",
    },
    email: {
      value: "",
      touched: "",
      error: "",
    },
    password: {
      value: "",
      touched: "",
      error: "",
    }
  });

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [show, setShow] = useState(false);
  const [gauge, setGauge] = useState("");
  const { username, email, password,  } = regDetails;

  const onChange = (e) => {
    const { value, name } = e.target;
    const { value: val, error } = validate(name, value);
    setRegDetails(() => ({
      ...regDetails,
      [name]: { value: val.trim(), error, touched: true },
    }));
  };

  const togglePassword = (e) => setShow(() => !show);

  function validate(name, value) {
    let error = "";
    try {
      
        value = validationSchema[name]?.validateSync(value);
    
    } catch (err) {
      if (err.name === "ValidationError") {
        error = err.errors.join(",");
      }
    }
    return { value, error };
  }
  // check the strength of the password
  const runGauge = () => {
    let gaugeValue = checkPasswordStrength(password.value);
    setGauge(gaugeValue);
  };

  // make the submit button appear disabled if there are any errors with the input field
  function isValid() {
    const { username, email } = regDetails;
    return (
      !(username.error || email.error ) &&
      gauge === "strong"
    );
  }

  function validateAll() {
    let iserror = false;
    for (let key in regDetails) {
      let { value } = regDetails[key];
      const { value: val, error } = validate(key, value);
      if (!iserror && error) iserror = true;
      setRegDetails(() => ({
        ...regDetails,
        [key]: { value: val.trim(), error, touched: true },
      }));
    }
    return iserror;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateAll()) return;
    const {
      name: { value: username },
      email: { value: email },
      password: { value: password },
    } = regDetails;

    if (gauge !== "strong") {
      setShowTooltip(true);
    }

    setLoading(true);
    setServerError("");
    const res = await fetch("http://xycle.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
    });
    const user = await res.json();
    setLoading(false);
    // If no error and we have user data, return it
    if (res.ok && user) {
      console.log(user);
    }

    if (!res.ok) {
      setServerError("failed to register");
    }
  }
  return (
    <div className='authform'>
      <div className='authform__image'>
        <Image src={whiteLogo} alt='xycle logo' />
        <div>
          <h2>Let’s build a world of zero waste.</h2>
        </div>

        <div class='authform__image__footnote'>
          <p>Already have an account?</p>
          <Link href='/login'>
            <a>Sign In</a>
          </Link>
        </div>
      </div>
      <div className='authform__form'>
        <form>
          <h2 className='form_title'>Sign up</h2>
          <div className='form-row'>
            <label htmlFor='name'>
              Username{" "}
              {username.error && <span className='error'>({name.error})</span>}
            </label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
              value={username.value}
              onChange={onChange}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='email'>
              Email{" "}
              {email.error && <span className='error'>({email.error})</span>}
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email'
              required
              value={email.value}
              onChange={onChange}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='password'>Password</label>
            <input
              type={`${show ? "text" : "password"}`}
              name='password'
              id='password'
              placeholder='password'
              required
              value={password.value}
              onChange={onChange}
              onKeyUp={runGauge}
            //   onFocus={() => setShowTooltip(true)}
            //   onBlur={() => setShowTooltip(false)}
            />
            <i
              className={`togglePassword far ${
                show ? "fa-eye-slash" : "fa-eye"
              }`}
              onClick={togglePassword}></i>
          </div>

          <div className='passwordStrength'>
            <progress
              className={
                gauge === "weak"
                  ? "weak"
                  : gauge === "fair"
                  ? "fair"
                  : gauge === "good"
                  ? "good"
                  : gauge === "strong"
                  ? "strong"
                  : ""
              }
              value={
                password.value === ""
                  ? "0"
                  : gauge === "weak"
                  ? "10"
                  : gauge === "fair"
                  ? "40"
                  : gauge === "good"
                  ? "65"
                  : gauge === "strong"
                  ? "100"
                  : "0"
              }
              max='100'></progress>
            <p>
              {password.value === ""
                ? "Input password"
                : gauge === "weak"
                ? "Weak"
                : gauge === "fair"
                ? "Fair"
                : gauge === "good"
                ? "Good"
                : gauge === "strong"
                ? "Strong"
                : "Input password"}
            </p>
          </div>
          <div className='form-row'>
            <button
              onClick={handleSubmit}
              id={!isValid() ? "disabled" : ""}
              className='submit btn_primary'>
              {loading && <i className='fa fa-spin fa-spinner'></i>} sign up
            </button>
          </div>
          <div className='horizontal-container'>
            <span className='horizontal'></span>
            <small>or</small>
            <span className='horizontal'></span>
          </div>
          <div className='form-row'>
            <Link href='/google'>
              <a className='social_auth_btn'>
                <span className='soci'>
                  <Image src={go} alt='facebook logo' />{" "}
                </span>{" "}
                Sign up with google
              </a>
            </Link>
          </div>
          <div className='form-row'>
            <Link href='/facebook'>
              <a className='social_auth_btn'>
                <span className='soci'>
                  <Image src={fb} alt='facebook logo' />{" "}
                </span>
                Signup with Facebook
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {};

export default Register;
