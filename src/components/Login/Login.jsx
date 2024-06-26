
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocailLogin from "../SocailLogin/SocailLogin";
import UseAuth from "../../hooks/UseAuth";
import GithubLogin from "../GithubLogin/GithubLogin";

const Login = () => {
    const { signInUser, } = UseAuth();

    const {
        register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        const {email,password} = data;
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })}  />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p><Link to='/register'>Please <button className="btn btn-link">Register Now !</button></Link></p>
                        <SocailLogin></SocailLogin>
                        <GithubLogin></GithubLogin>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;