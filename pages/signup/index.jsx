import React from "react";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../../assets/img/whiteLogo.png";
import fb from "../../assets/img/fb.png";
import go from "../../assets/img/go.png";
import PropTypes from "prop-types";

function Register(props) {
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
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' placeholder='username' />
          </div>
          <div className='form-row'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' placeholder='example@gmail.com' />
          </div>
          <div className='form-row'>
            <label htmlFor='passworf'>Password</label>
            <input id='password' type='password' placeholder='....' />
          </div>
          <div className='form-row'>
            <button className='submit btn_primary'>sign up</button>
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
