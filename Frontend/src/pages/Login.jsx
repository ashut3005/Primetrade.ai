// // import { useState } from "react";
// // import api from "../services/api";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const [message, setMessage] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await api.post("/auth/login", form);
// //       localStorage.setItem("token", res.data.token);
// //       navigate("/dashboard");
// //     } catch (err) {
// //       setMessage(err.response?.data?.message || "Invalid credentials");
// //     }
// //   };

// //   return (
// //     <div className="form">
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           placeholder="Email"
// //           onChange={(e) => setForm({ ...form, email: e.target.value })}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           onChange={(e) => setForm({ ...form, password: e.target.value })}
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //       <p>{message}</p>
// //     </div>
// //   );
// // }

// // export default Login;
// import { useState } from "react";
// import api from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
        
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//             </div>
            
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>
//           </div>

//           {message && (
//             <div className="rounded-md bg-red-50 p-4">
//               <p className="text-sm text-red-700 text-center">{message}</p>
//             </div>
//           )}

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
        
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      setIsAuth(true);      // 👈 important
      navigate("/dashboard");

    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">

        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {message && (
            <div className="bg-red-50 p-3 rounded text-red-700 text-center">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
