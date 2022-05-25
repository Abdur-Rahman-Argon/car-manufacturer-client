import React, { useEffect, useState } from "react";
import useParts from "../../utilites/useParts";
import PartsDetail from "../Home/PartsDetail";

const AllParts = () => {
  const [parts] = useParts([]);
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
