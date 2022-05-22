import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user.photoURL} alt="profile" />
        </div>
      </div>
      <div>
        <h1>{user.displayName}</h1>
        <h1>{user.email}</h1>
      </div>
      <div>
        <button onClick={() => signOut(auth)} class="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
