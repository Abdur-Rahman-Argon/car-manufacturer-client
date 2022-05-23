import React, { useEffect, useState } from "react";
import PartsDetail from "../Home/PartsDetail";

const AllParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("parts.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <div className="m-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {parts.map((part) => (
          <PartsDetail key={part._id} part={part}></PartsDetail>
        ))}
      </div>
    </div>
  );
};

export default AllParts;
