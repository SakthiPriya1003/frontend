import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPasswords, updatePassword } from "../services/passwordService";

const EditPassword = () => {
  const [data, setData] = useState({ website: "", username: "", password: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const all = await getPasswords();
      const record = all.find((p) => p._id === id);
      if (record) setData(record);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePassword(id, data);
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Edit Password</h2>
      <form onSubmit={handleSubmit}>
        <input value={data.website} onChange={(e) => setData({ ...data, website: e.target.value })} />
        <input value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
        <input value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPassword;
