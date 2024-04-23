import { FaGithub } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";

const GithubLogin = () => {
    const { githubLogin} = UseAuth()
    return (
        <div className="mb-4 mt-4">
            <button onClick={() =>githubLogin()}  className='btn btn-primary w-full'> <FaGithub></FaGithub> GitHub Login</button>
        </div>
    );
};

export default GithubLogin;