import { useState, useEffect } from "react";
import { usersApi } from "../api/UserApi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await usersApi.get("https://gorest.co.in/public/v2/users");
    setUsers(resp.data);
  };

  return {
    users,
  };
};
