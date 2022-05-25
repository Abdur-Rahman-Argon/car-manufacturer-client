import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
  const [part, setPart] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { displayName, email } = user;
  const { partsId } = useParams();
  const uri = `http://localhost:5000/parts/${partsId}`;

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);

  const { _id, name, img, description, Price, AvailableStock, minimumOrder } =
    part;

  const [countity, setCountity] = useState(500);

  const addPositive = () => {
    if (countity < AvailableStock) {
      const sum = countity + 1;
      setCountity(sum);
    } else {
      return;
    }
  };
  const addNagetive = () => {
    if (countity > minimumOrder) {
      const minus = countity - 1;
      return setCountity(minus);
    } else {
      return;
    }
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const phoneNumber = data.phoneNumber;
    const address = data.address;
    const parchase = {
      img: img,
      email: email,
      userName: displayName,
      productName: name,
      Price: Price,
      ordersCountity: countity,
      phoneNumber,
      address,
    };

    if (email) {
      fetch(`http://localhost:5000/parches`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(parchase),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged === true) {
            toast.success("Your Selected item purchase success");
            reset();
          }
          reset();
        });
    }
  };
  return (
    <div class=" ">
      <div class="hero bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <div className="flex-1 lg:border-r-2 text-center">
            <img src={img} alt="Shoes" className="w-60 mx-auto" />
            <h1 className="text-xl font-semibold">{name}</h1>
          </div>
          <div className="flex-1 p-4">
            <h2 class="text-2xl font-bold text-teal-700">{name}</h2>
            <h2 class="card-title">
              Price: {Price}{" "}
              <span className="text-sm"> (per one parts price)</span>
            </h2>
            <h2 class="card-title">Available Stock: {AvailableStock}</h2>
            <h2 class="card-title">MinimumOrder : {minimumOrder}</h2>
            <p>
              <b>Description: {description}</b>
            </p>
            <div className=" flex items-center">
              <div>
                <p className="text-xl font-semibold mx-5">Orders Quantity :</p>
              </div>
              <div className=" flex items-center">
                <button
                  disabled={countity == AvailableStock}
                  class="btn btn-active font-bold text-xl"
                  onClick={addPositive}
                >
                  +
                </button>
                <input
                  type="text"
                  value={countity}
                  class="input input-bordered input-primary w-20 mx-3 max-w-xs"
                  readOnly
                />

                <button
                  disabled={countity == minimumOrder}
                  onClick={addNagetive}
                  class="btn btn-active font-bold text-xl "
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl p-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left my-3">
            <label htmlFor="email">Name</label>
            <br />
            <input
              {...register("name", { required: true })}
              value={`${displayName}`}
              id="name"
              class="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", { required: true })}
              value={`${email}`}
              id="email"
              class="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="phoneNumber">Phone No:</label>
            <br />
            <input
              {...register("phoneNumber", { required: true })}
              id="phoneNumber"
              type="number"
              placeholder="Enter Phone No"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="address">Address</label>
            <br />
            <input
              {...register("address", { required: true })}
              placeholder="Enter Address"
              id="address"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="text-left my-3">
            <input
              type="submit"
              value="Parchase"
              className="btn btn-success w-full max-w-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
