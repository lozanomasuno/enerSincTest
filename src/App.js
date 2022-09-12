import React  from 'react';
import { UsersPage } from "./pages/UsersPage";
import { AddUserForm } from "./components/AddUserForm";
import { useSelector } from "react-redux";
import { AppRouter } from './router/AppRouter';

function App() {
  const userState = useSelector(state => state.users )

  return (
    <>
      <header className="App-header">
        <AppRouter />
      </header>
    </>
  );
}

export default App;
