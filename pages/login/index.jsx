import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

function Login() {
  const [status, isStatus] = useState(true);
  return (
    <section className="login__section">
      <div className="login__container container">
        <div className="login__wrap">
          {status ? (
            <>
              <LoginForm />
              <div
                className="login__text-center"
                onClick={() => {
                  isStatus(!status);
                }}
              >
                {status === true ? "Sign Up" : "Login"}
              </div>
            </>
          ) : (
            <>
              <RegisterForm />
              <div
                className="login__text-center"
                onClick={() => {
                  isStatus(!status);
                }}
              >
                {status === true ? "Sign Up" : "Login"}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
