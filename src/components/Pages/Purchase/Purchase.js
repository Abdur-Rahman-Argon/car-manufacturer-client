import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
  const [part, setPart] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const [countity, setCountity] = useState();
  const { displayName, email } = user;
  const { partsId } = useParams();
  const uri = `https://hidden-harbor-39382.herokuapp.com/parts/${partsId}`;

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setPart(data);

        setCountity(parseFloat(data.minimumOrder));
      });
  }, []);

  const { _id, name, img, description, Price, AvailableStock, minimumOrder } =
    part;

  // if (minimumOrder) {
  //   setCountity(minimumOrder);
  // }

  const addValue = (e) => {
    const num = e.target.value;
    setCountity(num);
  };
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
      fetch(`https://hidden-harbor-39382.herokuapp.com/parches`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(parchase),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged === true) {
            toast.success("Your Selected item purchase success");
            reset();
          }
          reset();
        });
    }
  };
  return (
    <div className=" ">
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 lg:border-r-2 text-center p-6">
            <img src={img} alt="Shoes" className="w-96 mx-auto" />
            <h1 className="text-xl font-semibold">{name}</h1>
          </div>
          <div className="flex-1 p-4 md:w-96 mx-auto">
            <h2 className="text-2xl font-bold text-teal-700">{name}</h2>
            <h2 className="card-title">
              Price: {Price}{" "}
              <span className="text-sm"> (per one parts price)</span>
            </h2>
            <h2 className="card-title">Available Stock: {AvailableStock}</h2>
            <h2 className="card-title">MinimumOrder : {minimumOrder}</h2>
            <p>
              <b>Description: {description}</b>
            </p>
            <div className=" flex items-center w-full">
              <div className="">
                <p className="text-md font-semibold mx-5">Orders Quantity:</p>
              </div>
              <div className=" flex items-center">
                <button
                  disabled={countity == AvailableStock}
                  className="btn btn-active font-bold text-xl"
                  onClick={addPositive}
                >
                  +
                </button>
                <input
                  onChange={addValue}
                  type="number"
                  name="quantity"
                  value={countity}
                  className="input input-bordered input-primary w-20 mx-3 max-w-xs"
                />

                <button
                  disabled={countity == minimumOrder}
                  onClick={addNagetive}
                  className="btn btn-active font-bold text-xl "
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl p-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left my-3">
            <label htmlFor="email">Name</label>
            <br />
            <input
              {...register("name", { required: true })}
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
              {...register("email", { required: true })}
              value={`${email}`}
              id="email"
              className="input input-bordered w-full max-w-xs"
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
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="address">Address</label>
            <br />
            <input
              {...register("address", { required: true })}
              placeholder="Enter Address"
              id="address"
              className="input input-bordered w-full max-w-xs"
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
