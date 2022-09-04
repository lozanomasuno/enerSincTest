import { UsersPage } from "./pages/UsersPage";
import { AddUserForm } from "./components/AddUserForm";

function App() {

 
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
