import React from "react";
import { Task } from "./Task";

export const TaskListItem: React.FC<ItemProps> = props => {
  const handleChange = () => {
    props.onToggle(props.task.id);
  };

  return (
    <li
      style={{
        textDecoration: props.task.completed ? "line-through" : "none"
      }}
    >
      <input
        id={props.task.name}
        type="checkbox"
        onChange={handleChange}
        checked={props.task.completed}
      />
      <label htmlFor={props.task.name}>{props.task.name} </label>
    </li>
  );
};

interface ItemProps {
  task: Task;
  onToggle(taskId: number): void;
}
