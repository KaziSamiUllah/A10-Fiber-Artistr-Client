import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Register = () => {

    const { signUp } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const url = formData.get('url');
        console.log(name, email, password, url)

        const validPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!validPass.test(password)) {
            if (password.length < 6) {
                toast("Password must be at least 6 characters long.");
            } else if (!/(?=.*[a-z])/.test(password)) {
                toast("Password must contain at least one lowercase letter.");
            } else if (!/(?=.*[A-Z])/.test(password)) {
                toast("Password must contain at least one uppercase letter.");
            }
        }

        else {
            signUp(email, password)
                .then(res => {
                    if (res.user) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User has been created",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div >
                    <form onSubmit={handleRegister} className="  px-8 pt-6 pb-8 mb-4 w-full max-w-xs bg-ivoryWhite shadow-md rounded ">
                        <h2 className="text-2xl text-center mb-6 text-navyBlue ">Register</h2>
                        <div className="mb-4">
                            <label className="block text-charcoalGray text-sm font-bold mb-2 ">
                                Name:
                            </label>
                            <input className="w-full" name="name" type="text" placeholder="Name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-charcoalGray text-sm font-bold mb-2">
                                Email:
                            </label>
                            <input className="w-full" type="email" placeholder="Email" name="email" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-charcoalGray text-sm font-bold mb-2">
                                Password:
                            </label>
                            <input className="w-full" type="password" placeholder="Password" name="password" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-charcoalGray text-sm font-bold mb-2">
                                Photo URL:
                            </label>
                            <input className="w-full" type="text" placeholder="Photo URL" name="url" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-champagneGold hover:bg-yellow-500 text-charcoalGray font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Register
                            </button>
                        </div>
                        <div><p>Already have an account? please <span><Link to="/login">LOGIN</Link></span></p></div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
