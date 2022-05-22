import React, { useEffect, useState } from "react";

export default function TodoInput({ add, todoValue, onChangeValue, toggle }) {
  const [todo, settodo] = useState("");
  useEffect(() => {
    settodo(todoValue);
  }, [todoValue]);
  return (
    <div>
      <div className="mx-auto w-fit py-2">
        <input
          className="text-gray-200 pl-3 focus:outline-none bg-slate-400/50 w-[250px] h-[40px] text-lg rounded-l-md"
          type="text"
          placeholder="Write Todo.."
          value={todo}
          onChange={(e) => onChangeValue(e.target.value)}
        />
        {toggle ? (
          <button
            className="bg-gray-700 hover:bg-slate-400/50 rounded-r-md relative  bottom-[1px] h-[40px] px-2 uppercase transition-all duration-700 font-bold"
            onClick={add}
          >
            add
          </button>
        ) : (
          <button
            className="bg-gray-700 hover:bg-slate-400/50 rounded-r-md relative  bottom-[1px] h-[40px] px-2 uppercase transition-all duration-700 font-bold"
            onClick={add}
          >
            edit
          </button>
        )}
      </div>
    </div>
  );
}
