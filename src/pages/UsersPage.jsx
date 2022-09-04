import React from "react";
import { useUsers } from "../hooks/useUsers";
import { UserRow } from "../components/UserRow";

export const UsersPage = () => {
  const { users } = useUsers();
  return (
    <div className="mt-5">
      <h2>Users</h2>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>gender</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.email} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
