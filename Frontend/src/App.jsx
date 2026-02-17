// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";

// function App() {
//   const isAuth = localStorage.getItem("token");

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/dashboard"
//           element={isAuth ? <Dashboard /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

      <Routes>
        <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<Register setIsAuth={setIsAuth} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
