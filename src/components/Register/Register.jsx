
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";

const Register = () => {
    const {createUser,updateUserProfile} = UseAuth();
    const { register,handleSubmit,  formState: { errors },  } = useForm();

    const onSubmit= data => {
        const {email,password,name,image} = data;
        createUser(email,password,)
        .then(result =>{
            updateUserProfile(name,image)
            console.log(result);
        })
    }
      
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("fullName", { required: true })}
                                />
                                 {errors.fullName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name="image" placeholder="Image Url" className="input input-bordered" {...register("ImageUrl")}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p><Link to='/login'>Already have an account <button className="btn btn-link">Login Now !</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;