import { useState } from "react";
import { addPassword } from "../services/passwordService";
import { useNavigate } from "react-router-dom";

const AddPassword = () => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPassword({ website, username, password });
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Add Password</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddPassword;
