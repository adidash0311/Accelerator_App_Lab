import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import Header from "../../partials/Header";
// import Banner from "../../partials/Banner";
import { useUserAuth } from "../../context/UserAuthContext";

const SignUp = () => {
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  // // const auth = getAuth();

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/ssignin");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome. We exist to make entrepreneurism easier.
                </h1>
              </div>

              {error && (
                <div
                  class=" max-w-sm mx-auto bg-red-100 mb-4 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong class="font-bold">Holy smokes!</strong>
                  <span class="block sm:inline">{error}</span>
                  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    {/* <svg
                    //   class="fill-current h-6 w-6 text-red-500"
                    //   role="button"
                    //   xmlns="http://www.w3.org/2000/svg"
                    //   viewBox="0 0 20 20"
                    // >
                    //   <title>Close</title>
                    //   <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    // </svg> */}
                  </span>
                </div>
              )}

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSignup}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                        <svg
                          className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Continue with GitHub
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg
                          className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Continue with Google
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6">
                  Already using Simple?{" "}
                  <Link
                    to="/ssignin"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}
    </div>
  );
};

export default SignUp;

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export class SignUp extends Component
// {
//   render()
//   {
//     return (
//       <div>
//         <div className="az-signup-wrapper">
//           <div className="az-column-signup-left">
//             <div>
//               <i className="typcn typcn-chart-bar-outline"></i>
//               <h1 className="az-logo">Accelth</h1>
//               <h5>A Simple Way To Access Decentralized Healthcare </h5>
//               <p>Accelth is an innovative start-up company that is dedicated to improving access to healthcare and cutting-edge technologies for people around the world. Our mission is to provide high-quality, affordable, and accessible healthcare services to individuals, regardless of their location or circumstances.</p>
//               <p>Browse our site and see for yourself why you need Azia.</p>
//               <a href="#/" className="btn btn-outline-indigo">Learn More</a>
//             </div>
//           </div>{/* az-column-signup-left */}
//           <div className="az-column-signup">
//             <h1 className="az-logo">Accelth</h1>
//             <div className="az-signup-header">
//               <h2>Get Started</h2>
//               <h4>It's free to signup and only takes a minute.</h4>

//               <form action="#/">
//                 <div className="form-group">
//                   <label>Firstname &amp; Lastname</label>
//                   <input type="text" className="form-control" placeholder="Enter your firstname and lastname" />
//                 </div>{/* form-group */}
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input type="text" className="form-control" placeholder="Enter your email" />
//                 </div>{/* form-group */}
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input type="password" className="form-control" placeholder="Enter your password" />
//                 </div>{/* form-group */}
//                 <Link to="/" className="btn btn-az-primary btn-block">Create Account</Link>
//                 <div className="row row-xs">
//                   <div className="col-sm-6"><button className="btn btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</button></div>
//                   <div className="col-sm-6 mg-t-10 mg-sm-t-0"><button className="btn btn-primary btn-block"><i className="fab fa-twitter"></i> Signup with Twitter</button></div>
//                 </div>{/* row */}
//               </form>
//             </div>{/* az-signup-header */}
//             <div className="az-signup-footer">
//               <p>Already have an account? <Link to="/general-pages/signin">Sign In</Link></p>
//             </div>{/* az-signin-footer */}
//           </div>{/* az-column-signup */}
//         </div>{/* az-signup-wrapper */}
//       </div>
//     )
//   }
// }

// export default Signp
