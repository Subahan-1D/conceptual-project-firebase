import UseAuth from "../../hooks/UseAuth";

import { FaGoogle,  FaTwitter } from "react-icons/fa";
const SocailLogin = () => {
    const {googleLogin,twitterLogin} = UseAuth();
    return (
        <div>
            <button onClick={() =>googleLogin()}  className='btn btn-primary w-full'> <FaGoogle></FaGoogle> Google login</button>
            <button onClick={() =>twitterLogin()}  className='btn btn-primary w-full mt-3'> <FaTwitter></FaTwitter> Twitter login</button>
        </div>
    );
};

export default SocailLogin;