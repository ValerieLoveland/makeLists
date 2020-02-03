let taskArray = [""];
export function makeList(task: string): string[] {
  taskArray.push(task);
  console.log(taskArray);

  return taskArray;
}
