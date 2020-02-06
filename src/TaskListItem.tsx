import React from "react";
import { Task } from "./Task";

export const TaskListItem: React.FC<ItemProps> = props => {
  const handleChange = () => {
    props.onToggle(props.task.id);
  };

  return (
    <li
      style={{
        textDecoration: props.task.completed ? "line-through" : "none" //setting the strikethrough depending on if it has completed tag
      }}
    >
      {/* gives all the properties of the checkbox input */}
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
  //making props to share with other files
  task: Task;
  onToggle(taskId: number): void;
}
