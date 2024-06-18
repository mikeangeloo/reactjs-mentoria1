import { useEffect, useState } from "react";
import "./api-users.css";
import "./loader.css";

type ApiUser = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};

type Loading = {
  isLoading: boolean;
};

const apiURL = "https://6663665862966e20ef0c7f22.mockapi.io/api/v1";

const loader = (
  <div className="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

function App() {
  const [users, setApiUsers] = useState<ApiUser[]>();
  const [loading, setLoading] = useState<Loading>({
    isLoading: false,
  });

  useEffect(() => {
    setLoading({ isLoading: true });
    fetch(`${apiURL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setApiUsers(data);
          setLoading({ isLoading: false });
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching data -->", error);
        setLoading({ isLoading: false });
      });
  }, []);

  return (
    <>
      <div className="table-container">
        {loading.isLoading ? (
          loader
        ) : (
          <table>
            <caption>Api Users</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr id={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>
                    <img
                      className="avatar"
                      id={user.id}
                      src={user.avatar}
                      alt="User Avatar"
                    />
                  </td>
                  <td>{new Date(user.createdAt).toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
