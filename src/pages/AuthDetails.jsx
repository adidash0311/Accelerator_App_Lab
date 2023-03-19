import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <div
            class=" max-w-sm mx-auto bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900  shadow-md mb-8"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">{`Signed In as ${authUser.email}`}</p>
                <p class="text-sm">Make sure you know you are aware.</p>
              </div>
            </div>
          </div>
          {/* <p>{`Signed In as ${authUser.email}`}</p> */}
          {/* <button onClick={userSignOut}>Sign Out</button> */}
          {/* <button
            onClick={userSignOut}
            className="btn text-white bg-red-600 hover:bg-red-700 w-full"
          >
            Sign out
          </button> */}
          <div className="max-w-sm mx-auto mb-8">
            <div className="">
              <button
                onClick={userSignOut}
                className="btn text-white bg-gray-600 hover:bg-gray-700 w-full"
              >
                Sign out
              </button>
            </div>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AuthDetails;
