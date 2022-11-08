import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero w-full ">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />

                </div>
                <div className="card  w-full max-w-md shadow-2xl bg-base-100 p-8">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email"
                                name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>

                    <p className='px-8 text-center font-bold '>Don't have an account? Please <Link to='/signup' className='text-orange-600 '>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;