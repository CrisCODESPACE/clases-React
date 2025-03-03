import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h3>Lista de Usuarios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
