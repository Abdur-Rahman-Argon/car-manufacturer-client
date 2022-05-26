import React from "react";

const SingleReview = ({ reviewe }) => {
  const { review, img, userName, ratings } = reviewe;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl p-4">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {img && (
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 mr-2">
                  <img src={img} alt="" className="w-10" />
                </div>
              </div>
            )}
            <div>
              <h4 className=" text-xs font-bold">{userName}</h4>
            </div>
          </div>
          <div className="pl-2">
            <h1 className="text-xs font-bold">Ratings: {ratings}</h1>
          </div>
        </div>
        <div className="text-left mt-3">
          <h1 className="text-sm font-bold">Review:</h1>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
