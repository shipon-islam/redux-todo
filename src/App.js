import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import Todos from "./redux_todo_app/Todos";
export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-slate-700 min-h-screen">
              <Todos />
            </div>
          }
        />
      </Routes>
    </Provider>
  );
}
