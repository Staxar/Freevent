import { Small_User, Lock_Closed, Facebook, Instagram, Tiktok } from './Icons/Icons'
export default function LoginForm(status, isStatus) {
    
  return (
    <form className="login__form" name='login__form'>
                    <div className="login__title">Login</div>

                    <div className="login__input_box">
                        <div className="login__span">Username</div>
                        <div className="login__flex">
                            <span className='login__span_icon'><Small_User /></span>
                            <input type="text" name='username' placeholder='Type your username' className='login__input_form'></input>
                        </div>
                    </div>

                    <div className="login__input_box">
                        <div className="login__span">Password</div>
                        <div className="login__flex">
                            <span className='login__span_icon'><Lock_Closed /></span>
                            <input type="text" name='password' placeholder='Type your password' className='login__input_form'></input>
                        </div>
                    </div>

                    <div className="login__text-right">Forgot password?</div>

                    <div className="login__form_button">
                        <div className="login__form_button_wrap">
                            <div className="login__form__button_box">
                                <button className="login__button_login">Login</button>
                            </div>
                        </div>
                    </div>

                    <div className="login__text-center">Or Sign Up Using</div>
                    <div className="login__providers">
                        <Facebook />
                        <Instagram />
                        <Tiktok />
                    </div>
                    <div className="login__text-center">Or Sign Using Account</div>                    
                </form>
  )
}



