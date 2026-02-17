
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
