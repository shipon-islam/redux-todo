import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "./icons";
import TodoInput from "./TodoInput";
import TodosHeader from "./TodosHeader";

export default function Todos() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.todoReducer.todos.reverse());
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
    <div className="text-white h-screen fixed w-full grid place-items-center bg-slate-700">
      <div className="w-[85%] md:w-[400px] relative min-h-[500px] bg-slate-600 rounded-md shadow-md shadow-white">
        <TodosHeader />
        {Alert&&<div className="text-center bg-green-600/40 capitalize">
          <p className="py-2">{Alert}</p>
        </div>}
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
        <div className="w-fit mx-auto mb-2">
          <button
            className=" bg-slate-500 hover:bg-indigo-600 transition-all duration-700 rounded-md px-5 font-medium uppercase py-[2px]"
            onClick={handleClear}
          >
            clear all
          </button>
        </div>
      </div>
      <h3 className="uppercase font-recursive text-gray-400 text-sm py-2 bottom-12">developed by shipon islam</h3>
    </div>
  );
}
