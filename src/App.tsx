import { Route, Routes, Navigate } from "react-router-dom";
import { UserList } from "./components/users/user-list";
import { UserDetail } from "./components/users/user-detail";
import { UsersProvider } from "./contexts/users-context";

function App() {
  return (
    <UsersProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/user/:id" element={<UserDetail />}></Route>
      </Routes>
    </UsersProvider>
  );
}

export default App;
