import React from "react";
import { TaskListItem } from "./TaskListItem";
import { Task } from "./Task";

export const TaskList: React.FC<TaskListProps> = props => {
  return (
    <>
      <h3>{props.title}</h3>
      <ul className="App-list">
        {props.tasks.map(task => {
          return <TaskListItem task={task} onToggle={props.onToggle} />;
        })}
      </ul>
    </>
  );
};

interface TaskListProps {
  title: string;
  tasks: Task[];
  onToggle(taskId: number): void;
}
