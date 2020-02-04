import React from "react";
import { useState } from "react";

export const Item: React.FC<ItemProps> = props => {
  const [completed, setCompleted] = useState(false);

  const handleChange = () => {
    setCompleted(!completed);
  };

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      <input id={props.taskName} type="checkbox" onChange={handleChange} />
      <label htmlFor={props.taskName}>{props.taskName} </label>
    </li>
  );
};

interface ItemProps {
  taskName: string;
}
