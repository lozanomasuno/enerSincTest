import React  from 'react';
import { UsersPage } from "./pages/UsersPage";
import { AddUserForm } from "./components/AddUserForm";
import { useSelector } from "react-redux";
function App() {

  const userState = useSelector(state => state.users )
  console.log(userState);
  return (
    <>
      <header className="App-header">
        <AddUserForm />
        <UsersPage />
      </header>
    </>
  );
}

export default App;
