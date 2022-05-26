import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loading from "../Sheared/Loading";
import { useQuery } from "react-query";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("user", () =>
    fetch(`https://hidden-harbor-39382.herokuapp.com/user/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  // if (user) {
  //   console.log(user);
  // }

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
  };
  const { displayName, email, phoneNumber, photoURL, linkedIn, faceBook } =
    users;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto text-center">
      <div className="card-body">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img src={photoURL} alt="profile" />
          </div>
        </div>

        <div>
          <div className="text-left my-3">
            <label htmlFor="email">Name</label>
            <br />
            <input
              value={`${displayName}`}
              id="name"
              className="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              value={`${email}`}
              id="email"
              className="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="phone">Phone No:</label>
            <br />
            <input
              value={`${phoneNumber}`}
              id="phone"
              className="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div>
            {linkedIn && faceBook && (
              <>
                <a href={faceBook}>
                  <button className="btn btn-success w-full max-w-xs">
                    Facebook
                  </button>{" "}
                </a>
                <br />
                <br />
                <a href={linkedIn}>
                  <button className="btn btn-success w-full max-w-xs">
                    LinkedIn
                  </button>
                </a>
              </>
            )}
          </div>
          <div className="divider"></div>

          <div className="text-left my-3">
            <Link to="/update" className="btn btn-primary w-full max-w-xs">
              Update
            </Link>
          </div>
        </div>
        <div className="divider">OR</div>
        <div>
          <button onClick={logOut} className="btn btn-outline w-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
