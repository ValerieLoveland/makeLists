let taskArray = [""];
export function makeList(task: string, cb: (blah: any) => void): string[] {
  taskArray.push(task);
  console.log(taskArray);

  cb("");
  return taskArray;
}
