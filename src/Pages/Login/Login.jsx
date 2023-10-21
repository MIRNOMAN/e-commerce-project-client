import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signIn,googleSignIn} = useContext(AuthContext)
   const location = useLocation();
   const navigate = useNavigate();
   
   const handleGoogle = () =>{
    googleSignIn()
    .then(result => {
        console.log(result.user)
        
        navigate('/')
     navigate(location?.state ? location.state : '/');
    })
    .catch(err => {
        console.log(err)
    })
   }


    const handleLogin = (e) => {
        e.preventDefault();
     const form = new FormData(e.currentTarget)
     const email = form.get('email');
     const password = form.get('password');
     toast("successfully logged in")
     signIn(email,password)
     .then((result) => {
     console.log(result.user)
     
       
     navigate('/')
     navigate(location?.state ? location.state : '/');
     
     
     })
     .catch(Error => {
      console.log(Error)
      const errCode = Error.code;
        if(errCode === 'auth/invalid-login-credentials'){
          return toast("Invalid login credentials")
        }
       
       })
    }


    return (
        <div className="flex justify-center items-center mx-auto">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error text-white">Login</button>
        </div>
        <p>Don't Have An account?<Link className="text-red-500 font-semibold" to ="/register">Register</Link></p>

        <button onClick={handleGoogle} className="btn w-full btn-error text-white"><FcGoogle className="text-xl"></FcGoogle>Sign in With Google</button>
      </form>
      <ToastContainer />
    </div>
   
        </div>
    );
};

export default Login;