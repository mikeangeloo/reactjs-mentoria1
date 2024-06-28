import { Dispatch, createContext, useReducer } from "react";
import { User } from "../interfaces/users.interface";

type State = {
  users: User[];
};

type Action = { type: "SET_USERS"; payload: User[] };

const initialState: State = {
  users: [],
};

export const UsersContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const usersReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
}
