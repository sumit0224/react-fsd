import React, { useEffect, useRef, useState } from "react";

interface TASK {
  task: string;
  id: number | null;
  isComplete : boolean
}

const App = () => {
  const [task, setTask] = useState<TASK>({
    task: "",
    id: null,
    isComplete:false
  });

  

  const [todo, setTodo] = useState<TASK[]>(() => {
    const data = localStorage.getItem("todo");

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task.task.trim() === "") return;

    setTodo([task, ...todo]);

    setTask({
      task: "",
      id: null,
      isComplete:false
    });
  };

 const handleComplete = (id: number | null) => {
  const updatedTodo = todo.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isComplete: true,
      };
    }

    return item;
  });

  setTodo(updatedTodo);
};


const handleDelete = (id: number |null)=>{

    const updatedTodo = todo.filter((item )=> item.id !== id)
    setTodo(updatedTodo)
}
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    
  }, [todo]);

  return (
    <div className="w-screen h-screen bg-black text-teal-600 flex flex-col justify-center gap-5 items-center py-5">
      <h1 className="text-6xl font-bold uppercase text-center">
        Task App
      </h1>

      <form
        onSubmit={submitHandler}
        className="bg-amber-50 w-90 flex justify-between px-3 py-2 gap-5 rounded-t-lg"
      >
        <input
          
          type="text"
          value={task.task}
          name="task"
          onChange={handleChange}
          placeholder="Enter your task"
          className="w-full border-none outline-none text-black "
        />

        <button
          type="submit"
          className="px-2 py-1 rounded-lg bg-teal-600 text-white active:scale-90"
        >
          ADD
        </button>
      </form>

      <div className="w-90 h-full bg-amber-200 overflow-y-auto px-4 py-2 rounded-b-lg">
        {todo.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white flex mt-2 justify-between px-3 py-1 rounded-lg"
          >
            <span className={`uppercase ${item.isComplete ? "line-through" : ""}`}>{item.task}</span>

            <div className="flex gap-3">
              <button onClick={()=> handleComplete(item.id)}>✅</button>
              <button onClick={()=> handleDelete(item.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;