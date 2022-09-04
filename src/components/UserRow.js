import React from "react";

export const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.status}</td>
      <td>
        <button className="button muted-button">Edit</button>
        <button className="button muted-button">Delete</button>
      </td>
    </tr>
  );
};
