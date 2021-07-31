import React,{ useState } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../../assets/img/whiteLogo.png";
import fb from "../../assets/img/fb.png";
import go from "../../assets/img/go.png";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [show, setShow] = useState(false);
  const onChange = (e) =>
    setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const togglePassword = (e) => setShow(() => !show);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const { email, password } = loginDetails;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    loginDetails.email = loginDetails.email?.toLowerCase();
    const { error, status, ok, url } = await signIn("credentials", {
      ...loginDetails,
      callbackUrl: `${process.env.REMOTE_URL}/dashboard`,
      redirect: false,
    });
    setLoading(false);
    if (error) setServerError(error?.message || "failed to login");
    if (url) router.push(url);
  }

  const isValid = () => email && password;

  return (
    <div className='authform'>
      <div className='authform__image'>
        <Image src={whiteLogo} alt='xycle logo' />
        <div>
          <h2>Let’s build a world of zero waste.</h2>
        </div>

        <div className='authform__image__footnote'>
          <p>Don’t have an account?</p>
          <Link href='/signup'>
            <a>Login</a>
          </Link>
        </div>
      </div>
      <div className='authform__form'>
        {serverError && (
          <span
            className='error'
            style={{ textAlign: "center", display: "block" }}>
            {serverError}
          </span>
        )}
        <form>
          <h2 className='form_title'>Login</h2>
          <div className='form-row'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email'
              required
              value={email}
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
              value={password}
              onChange={onChange}
            />
            <i
              className={`far ${show ? "fa-eye-slash" : "fa-eye"}`}
              id='togglePassword'
              onClick={togglePassword}></i>
          </div>

          <div className='form-row'>
            <button
              onClick={handleSubmit}
              type='submit'
               id={!isValid() || loading ? "disabled" : ""}
              className='btn_primary'>
              Login
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
                Login up with Google
              </a>
            </Link>
          </div>
          <div className='form-row'>
            <Link href='/facebook'>
              <a className='social_auth_btn'>
                <span className='soci'>
                  <Image src={fb} alt='facebook logo' />{" "}
                </span>
                Login with Facebook
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
