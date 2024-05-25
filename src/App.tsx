import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type User = {
  name: string;
  lastname: string;
  age: number;
};

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User>({
    name: "Miguel",
    lastname: "Ramírez",
    age: 25,
  });

  const handleChangeUser = ({ name, lastname, age }: User) => {
    setUser({
      name,
      lastname,
      age,
    });
  };

  console.log("user data --->", JSON.stringify(user));

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Starting Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="user">
        <p>User name: {user?.name}</p>
        <p>User lastname: {user?.lastname}</p>
        <p>User age: {user?.age}</p>

        <button
          onClick={() =>
            handleChangeUser({
              name: "Francisco",
              lastname: "Gonzalez",
              age: 22,
            })
          }
        >
          Change Username
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
