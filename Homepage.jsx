// import { useEffect, useState } from "react";
// import { getStaff, deleteStaff } from "../api/staffApi.js";
// import "./Homepage.css";

// function Homepage() {
//   const [staff, setStaff] = useState([]);

//   const loadStaff = async () => {
//     const res = await getStaff();
//     setStaff(res.data);
//   };

//   useEffect(() => {
//     loadStaff();
//   }, []);

//   const removeStaff = async (id) => {
//     await deleteStaff(id);
//     loadStaff();
//   };

//   return (
//     <div className="container">
//       <h1>Hotel Staff</h1>

//       {staff.map((member) => (
//         <div className="staff" key={member.id}>
//           <div>
//             <h3>{member.name}</h3>
//             <p>{member.email}</p>
//             <p>{member.phone}</p>
//             <p>{member.role}</p>
//           </div>

//           <button onClick={() => removeStaff(member.id)}>
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Homepage;


import { useEffect, useState } from "react";
import { getStaff, deleteStaff } from "../api/staffApi.js";
import "./Homepage.css";

function Homepage() {
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Anmol",
      email: "anmol@gmail.com",
      phone: "1234567890",
      role: "user",
    },
  ]);

  const loadStaff = async () => {
    const res = await getStaff();

    setStaff([
      {
        id: 1,
        name: "Anmol",
        email: "anmol@gmail.com",
        phone: "1234567890",
        role: "user",
      },
      ...res.data,
    ]);
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const removeStaff = async (id) => {
    if (id === 1) {
      setStaff((prev) => prev.filter((member) => member.id !== 1));
      return;
    }

    await deleteStaff(id);
    loadStaff();
  };

  return (
    <div className="container">
      <h1>Hotel Staff</h1>

      {staff.map((member) => (
        <div className="staff" key={member.id}>
          <div>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.phone}</p>
            <p>{member.role}</p>
          </div>

          <button onClick={() => removeStaff(member.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
