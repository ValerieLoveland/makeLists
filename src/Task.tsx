let nextId = 0;

export class Task {
  //this is a model for task to give it id, name, checked
  id: number = 0;
  name: string = "";
  completed: boolean = false;

  constructor(data: Partial<Task>) {
    //this is making it so we don't have to use all 3 parts of Task
    Object.assign(this, data);

    this.id = ++nextId; //giving out different id names
  }
}
