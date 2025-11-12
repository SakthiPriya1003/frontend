const PasswordItem = ({ password, onEdit, onDelete }) => {
  return (
    <div className="password-item">
      <p><b>Website:</b> {password.website}</p>
      <p><b>Username:</b> {password.username}</p>
      <p><b>Password:</b> {password.password}</p>
      <div>
        <button onClick={() => onEdit(password._id)}>Edit</button>
        <button onClick={() => onDelete(password._id)}>Delete</button>
      </div>
    </div>
  );
};

export default PasswordItem;
