import React from "react";
import { useUsers } from "../hooks/useUsers";
import { UserRow } from "../components/UserRow";
import { NoUsers } from "../components/NoUsers";
import { v4 as uuidv4 } from 'uuid';


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
          {users.length > 0 ? (
            users.map((user) => <UserRow key={user.email} user={user} />)
          ) : (
            <NoUsers />
          )}
        </tbody>
      </table>
    </div>
  );
};
