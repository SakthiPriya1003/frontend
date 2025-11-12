import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPasswords, deletePassword } from "../services/passwordService";
import PasswordItem from "../components/PasswordItem";

const Dashboard = () => {
  const [passwords, setPasswords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPasswords();
      setPasswords(data);
    };
    fetchData();
  }, []);

  const handleEdit = (id) => navigate(`/edit/${id}`);
  const handleDelete = async (id) => {
    await deletePassword(id);
    setPasswords(passwords.filter((p) => p._id !== id));
  };

  return (
    <div>
      <h2>Your Saved Passwords</h2>
      {passwords.map((p) => (
        <PasswordItem key={p._id} password={p} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Dashboard;
