import React, { useState } from "react";

export const TaskInput: React.FC<TaskInputProps> = props => {
  const [input, setInput] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  function handleClick() {
    //both of these do the same thing but with click or enter
    props.onSelect(input); //this save button selects what is in the box and saves it as props
    setInput(""); //sets input field back to nothing after the save
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
  //exporting the data so other files can use it
  onSelect(taskName: string): void;
}
