import React, { createContext, useReducer } from "react";
import { ADD_TASK, DELETE_TASK, LOGIN, LOGOUT, REPLACE_TASK, UPDATE_TASK } from "./sate";

type reducerType = { type: string; data: any };
const initialState = {
  auth: {
    isAuth: false,
    token: "",
    user: "",
    img: "",
  },
  tasks: [
    // {
    //   _id: 1,
    //   name: "clean the room",
    //   completed: false,
    // },
  ],
};
export const GlobalContext = createContext(initialState);

const reducer = (state: { tasks: any[] }, action: reducerType) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, auth: { isAuth: true, ...action.data } };
    }
    case LOGOUT: {
      return { ...state, auth: { ...initialState.auth } };
    }
    case REPLACE_TASK: {
      state = { ...state, tasks: [...action.data] };
      break;
    }
    case ADD_TASK: {
      state = { ...state, tasks: [...state.tasks, ...action.data] };
      break;
    }
    case UPDATE_TASK: {
      const filteredTasks = state.tasks.filter((x) => x._id != action.data._id);
      state = { ...state, tasks: [...filteredTasks, action.data] };
      break;
    }
    case DELETE_TASK: {
      const filteredTasks = state.tasks.filter((x) => x._id != action.data._id);
      state = { ...state, tasks: [...filteredTasks] };
      break;
    }
  }
  return { ...state, tasks: [...state.tasks.sort((a, b) => a._id > b._id)] };
};

export const Store = ({ subPage }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GlobalContext.Provider value={[state, dispatch]}>{subPage}</GlobalContext.Provider>;
};
