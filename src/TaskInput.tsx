import React, { useState } from "react";

export const TaskInput: React.FC<TaskInputProps> = props => {
  const [input, setInput] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  function handleClick() {
    props.onSelect(input);
    setInput("");
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.charCode === 13) {
      props.onSelect(input);
      setInput("");
    }
  }

  return (
    <div className="App">
      <label htmlFor="taskInput">Input Task: </label>
      <input
        id="taskInput"
        type="task"
        placeholder="input task"
        onChange={onChange}
        onKeyPress={handleKeyPress}
        value={input}
      />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

interface TaskInputProps {
  onSelect(taskName: string): void;
}
