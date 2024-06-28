import { useContext, useEffect, useMemo, useState } from "react";
import { Loader } from "../loaders/loader";
import { Link } from "react-router-dom";
import "./users-list.css";
import { UsersContext } from "../../contexts/users-context";

type Loading = {
  isLoading: boolean;
};

const apiURL = "https://6663665862966e20ef0c7f22.mockapi.io/api/v1";

export function UserList() {
  const { state, dispatch } = useContext(UsersContext);
  const { users } = state;

  const [loading, setLoading] = useState<Loading>({
    isLoading: false,
  });

  // use memo
  const userCounter = useMemo(() => {
    return users?.length;
  }, [users]);

  useEffect(() => {
    if (users.length === 0) {
      setLoading({ isLoading: true });
    }
    fetch(`${apiURL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          dispatch({ type: "SET_USERS", payload: data });
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
          <Loader />
        ) : (
          <>
            <table>
              <caption>
                <div className="table-header">
                  <span>Api Users</span>
                  <span>Total users: {userCounter}</span>
                </div>
              </caption>
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
                  <Link to={`/user/${user.id}`}>
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
                  </Link>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
