import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, setLoading, signInWithGoogle, SignInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((res) => {
                console.log(res.user);
                e.target.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Something went wrong! ${error} `,
                    footer: '<a href="/">Go back to Home Page.</a>'
                });
                setLoading(false)
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
        navigate('/');


    }

    const handleGithubLogin = () => {
        SignInWithGitHub()
        navigate('/');
    }





    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-xs bg-ivoryWhite shadow-md rounded">
                    <form onSubmit={handleSignIn} className="px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl text-center mb-6 text-navyBlue">Login</h2>
                        <div className="mb-4">
                            <label className="block text-charcoalGray text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input name="email" type="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-charcoalGray leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-charcoalGray text-sm font-bold mb-2" htmlFor="password">
                                Password:
                            </label>
                            <input name="password" type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-charcoalGray leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-champagneGold hover:bg-yellow-500 text-charcoalGray font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                        </div>
                        <div><p>Do not have an account? please <span><Link to="/register">REGISTER</Link></span></p></div>
                    </form>

                    <div className="space-x-4 w-fit mx-auto m-5">
                        <button onClick={handleGoogleLogin} className="btn">Google</button>
                        <button onClick={handleGithubLogin} className="btn">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
