import React from "react";
import { useState } from "react";
import "./App.css";
import { TaskInput } from "./TaskInput";
import { Task } from "./Task";
import { TaskList } from "./TaskList";

export const App: React.FC = () => {
  const [taskArray, setTaskArray] = useState<Task[]>([]);

  function onSelect(taskName: string) {
    const newTaskArray = [...taskArray, new Task({ name: taskName })];

    setTaskArray(newTaskArray);
  }

  function handleToggle(taskId: number) {
    const newTaskArray = toggleTask(taskArray, taskId);

    setTaskArray(newTaskArray);
  }

  return (
    <>
      <TaskInput onSelect={onSelect} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <TaskList
          title="Active Tasks"
          tasks={getActive(taskArray)}
          onToggle={handleToggle}
        />
        <TaskList
          title="Done Tasks"
          tasks={getDone(taskArray)}
          onToggle={handleToggle}
        />
      </div>
    </>
  );
};

export default App;

function getActive(tasks: Task[]) {
  return tasks.filter(item => item.completed === false);
}

function getDone(tasks: Task[]) {
  return tasks.filter(item => item.completed === true);
}

function toggleTask(taskArray: Task[], taskId: number) {
  return taskArray.map(task => {
    if (task.id === taskId) {
      return new Task({ ...task, completed: !task.completed });
    }

    return new Task({ ...task });
  });
}
