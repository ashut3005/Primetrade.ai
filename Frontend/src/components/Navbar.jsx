// // import { Link, useNavigate } from "react-router-dom";

// // function Navbar() {
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   return (
// //     <nav className="nav">
// //       <h2>Task Manager</h2>
// //       <div>
// //         <Link to="/">Login</Link>
// //         <Link to="/register">Register</Link>
// //         <button onClick={logout}>Logout</button>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// // import { Link, useNavigate } from "react-router-dom";

// // function Navbar() {
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   return (
// //     <nav className="bg-white shadow-lg">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           <h2 className="text-xl font-bold text-gray-800">Task Manager</h2>
// //           <div className="flex items-center space-x-4">
// //             <Link 
// //               to="/" 
// //               className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
// //             >
// //               Login
// //             </Link>
// //             <Link 
// //               to="/register" 
// //               className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
// //             >
// //               Register
// //             </Link>
// //             <button 
// //               onClick={logout}
// //               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuth(!!token);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuth(false);
//     navigate("/");
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <h2 className="text-xl font-bold text-gray-800">
//             Task Manager
//           </h2>

//           <div className="flex items-center space-x-4">
//             {!isAuth ? (
//               <>
//                 <Link
//                   to="/"
//                   className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/register"
//                   className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
//                 >
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={logout}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-xl font-bold text-gray-800">
            Task Manager
          </h2>

          <div className="flex items-center space-x-4">
            {!isAuth ? (
              <>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
