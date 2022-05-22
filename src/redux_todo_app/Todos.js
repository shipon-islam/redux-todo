import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import TodosHeader from "./TodosHeader";
const icon = {
  del: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
  edit: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  ),
};

export default function Todos() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.todoReducer.todos);
  const [todoValue, setTodoValue] = useState("");

  const [toggle, setToggle] = useState(true);

  const [editId, setEditId] = useState(null);
  const [Alert, setAlert] = useState("");
  console.log(dataList);

  //add todos in the list
  const handleTodoAdd = () => {
    if (!todoValue) {
      alert("plzz add todo");
    } else if (todoValue && !toggle) {
      const payload = { name: todoValue, id: editId };
      dispatch({ type: "EDIT", payload });
      setEditId(null);
      setToggle(true);
      setTodoValue("");
      remove(`${todoValue} is updated successfuly`);
    } else {
      const payload = { name: todoValue, id: new Date().getTime().toString() };
      dispatch({ type: "ADD", payload });
      setTodoValue("");
      remove(`${todoValue} is added successfuly`);
    }
  };
  //edit the todo list
  const handleEdit = (index) => {
    const data = dataList.find((todo) => todo.id === index);
    setTodoValue(data.name);

    setToggle(false);

    setEditId(index);
  };
  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(dataList));
  }, [dataList]);

  //delete specific todo from the todo list
  const handleDelete = (index) => {
    dispatch({ type: "DEL", payload: index });
  };
  // clear all todo from the list
  const handleClear = () => {
    dispatch({ type: "CLEAR_ALL" });
    remove(`remove all todos successfuly`);
  };

  //set the value of input todos
  const onChangeValue = (value) => {
    setTodoValue(value);
  };
  const remove = (msg = "") => {
    setAlert(msg);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      remove();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [dataList]);

  return (
    <div className="text-white h-screen grid place-items-center">
      <div className="w-[400px] relative min-h-[500px] bg-slate-600 rounded-md shadow-md shadow-white">
        <TodosHeader />
        <div className="text-center bg-green-600/40 capitalize">
          <p>{Alert}</p>
        </div>
        <TodoInput
          add={handleTodoAdd}
          todoValue={todoValue}
          onChangeValue={onChangeValue}
          toggle={toggle}
        />
        <div className="w-full h-[400px] overflow-y-auto">
          {dataList &&
            dataList.map((todo, index) => (
              <div
                className="bg-slate-700/50 mt-1 w-[300px] rounded-md py-1  px-3 text-lg mx-auto hover:bg-slate-500 odd:bg-slate-700 flex justify-between"
                key={todo.id}
              >
                {todo.name}
                <div className="flex items-center">
                  <span
                    className="hover:text-red-600 cursor-pointer"
                    onClick={() => handleDelete(todo.id)}
                  >
                    {icon.del}
                  </span>
                  <span
                    className="hover:text-indigo-600 cursor-pointer"
                    onClick={() => handleEdit(todo.id)}
                  >
                    {icon.edit}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="py-2 relative left-[38%]">
          <button
            className=" bg-slate-500 hover:bg-indigo-600 transition-all duration-700 rounded-md px-4  uppercase"
            onClick={handleClear}
          >
            clear all
          </button>
        </div>
      </div>
    </div>
  );
}
