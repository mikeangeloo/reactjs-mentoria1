import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UsersContext } from "../../contexts/users-context";

import "./user-detail.css";

export function UserDetail() {
  const { id } = useParams<{ id: string }>();
  console.log("user-id", id);
  const { state } = useContext(UsersContext);
  const user = state.users.find((user) => user.id === (id ?? "0"));
  if (!user) {
    return (
      <>
        <div>User not found</div>
        <Link to="/" className="button-link">
          Go Back
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="profile-card">
        <img src={user.avatar} alt={`${user.name}'s profile`} />
        <div className="name">{user.name}</div>
        <div className="date">
          Joined: {new Date(user.createdAt).toDateString()}
        </div>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi
          est omnis tenetur consequuntur adipisci ea nesciunt, maxime itaque
          fugit labore repellat quasi officiis doloribus. Incidunt numquam eos
          ullam pariatur?
        </div>
      </div>
      <div className="back-button">
        <Link to="/" className="button-link">
          Go back
        </Link>
      </div>
    </>
  );
}
