// import { useEffect, useState } from "react";

// const useAdmin = (user) => {
//   const [admin, setAdmin] = useState(false);
//   const [adminLoading, setAdminLoding] = useState(true);
//   useEffect(() => {
//     const email = user?.email;
//     if (email) {
//       fetch(`http://localhost:5000/admin/${email}`, {
//         method: "GET",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setAdmin(data);
//           setAdminLoding(false);
//         });
//     }
//   }, [user]);

//   return [admin, setAdmin, adminLoading];
// };

// export default useAdmin;
