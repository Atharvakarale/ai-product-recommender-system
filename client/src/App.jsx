// "use client";

// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import UserSelect from "./pages/UserSelect";
// import Dashboard from "./pages/Dashboard";
// import Admin from "./pages/Admin";
// import AddNewProduct from "./pages/AddNewProduct";

// function App() {
//   const [selectedUserId, setSelectedUserId] = useState(
//     localStorage.getItem("selectedUserId") || null
//   );

//   useEffect(() => {
//     if (selectedUserId) {
//       localStorage.setItem("selectedUserId", selectedUserId);
//     } else {
//       localStorage.removeItem("selectedUserId");
//     }
//   }, [selectedUserId]);

//   return (
//     <Router>
//       <Routes>
//         {/* User selection */}
//         <Route
//           path="/"
//           element={
//             selectedUserId ? (
//               <Navigate to="/dashboard" />
//             ) : (
//               <UserSelect onSelectUser={setSelectedUserId} />
//             )
//           }
//         />

//         {/* User dashboard */}
//         <Route
//           path="/dashboard"
//           element={
//             selectedUserId ? (
//               <Dashboard
//                 userId={selectedUserId}
//                 onLogout={() => setSelectedUserId(null)}
//               />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />

//         {/* Admin home */}
//         <Route path="/admin" element={<Admin />} />

//         {/* ✅ Add new product page */}
//         <Route path="/admin/add-product" element={<AddNewProduct />} />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

"use client";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import UserSelect from "./pages/UserSelect";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AddNewProduct from "./pages/AddNewProduct";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(
    localStorage.getItem("selectedUserId") || null
  );

  useEffect(() => {
    if (selectedUserId) {
      localStorage.setItem("selectedUserId", selectedUserId);
    } else {
      localStorage.removeItem("selectedUserId");
    }
  }, [selectedUserId]);

  return (
    <Router>
      <Routes>
        {/* Always show user selection first */}
        <Route
          path="/"
          element={
            <UserSelect onSelectUser={setSelectedUserId} />
          }
        />

        {/* Dashboard — accessible only if a user is selected */}
        <Route
          path="/dashboard"
          element={
            selectedUserId ? (
              <Dashboard
                userId={selectedUserId}
                onLogout={() => setSelectedUserId(null)}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Admin home */}
        <Route path="/admin" element={<Admin />} />

        {/* Add new product page */}
        <Route path="/admin/add-product" element={<AddNewProduct />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
