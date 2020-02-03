import { App } from "./App";

let taskArray = [""];
export function makeList(task: string, cb: (blah: string) => void): string[] {
  taskArray.push(task);
  console.log(taskArray);

  cb("");
  return taskArray;
}
