// // import { useEffect, useState } from "react";
// // import api from "../services/api";

// // function Dashboard() {
// //   const [tasks, setTasks] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [desc, setDesc] = useState("");

// //   const fetchTasks = async () => {
// //     const res = await api.get("/tasks");
// //     setTasks(res.data);
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const addTask = async () => {
// //     await api.post("/tasks", { title, description: desc });
// //     setTitle("");
// //     setDesc("");
// //     fetchTasks();
// //   };

// //   const deleteTask = async (id) => {
// //     await api.delete(`/tasks/${id}`);
// //     fetchTasks();
// //   };

// //   return (
// //     <div className="dashboard">
// //       <h2>Dashboard</h2>

// //       <input
// //         placeholder="Task Title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //       />
// //       <input
// //         placeholder="Description"
// //         value={desc}
// //         onChange={(e) => setDesc(e.target.value)}
// //       />
// //       <button onClick={addTask}>Add Task</button>

// //       <ul>
// //         {tasks.map((task) => (
// //           <li key={task._id}>
// //             <strong>{task.title}</strong> - {task.description}
// //             <button onClick={() => deleteTask(task._id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Dashboard;
// import { useEffect, useState } from "react";
// import api from "../services/api";

// function Dashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");

//   const fetchTasks = async () => {
//     const res = await api.get("/tasks");
//     setTasks(res.data);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const addTask = async () => {
//     await api.post("/tasks", { title, description: desc });
//     setTitle("");
//     setDesc("");
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await api.delete(`/tasks/${id}`);
//     fetchTasks();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>

//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Task Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             <input
//               type="text"
//               placeholder="Description"
//               value={desc}
//               onChange={(e) => setDesc(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             <button
//               onClick={addTask}
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
//             >
//               Add Task
//             </button>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Tasks</h3>
//           {tasks.length === 0 ? (
//             <p className="text-gray-500 text-center py-4">No tasks yet. Add one above!</p>
//           ) : (
//             <ul className="space-y-3">
//               {tasks.map((task) => (
//                 <li
//                   key={task._id}
//                   className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
//                 >
//                   <div className="flex-1">
//                     <strong className="text-gray-800 font-semibold">{task.title}</strong>
//                     {task.description && (
//                       <span className="text-gray-600 ml-2">- {task.description}</span>
//                     )}
//                   </div>
//                   <button
//                     onClick={() => deleteTask(task._id)}
//                     className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 text-sm font-medium"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import { useEffect, useState } from "react";
import api from "../services/api";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await api.post("/tasks", { title, description: desc });
    setTitle("");
    setDesc("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">
        {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </h2>

      {/* Admin Special Section */}
      {role === "admin" && (
        <div className="bg-yellow-100 p-4 mb-6 rounded">
          <p className="font-semibold">
            Admin Access: You can delete any task.
          </p>
        </div>
      )}

      <div className="bg-white p-6 rounded shadow-md mb-6">
        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
            </div>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
