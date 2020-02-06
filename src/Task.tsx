let nextId = 0;

export class Task {
  id: number = 0;
  name: string = "";
  completed: boolean = false;

  constructor(data: Partial<Task>) {
    Object.assign(this, data);

    this.id = ++nextId;
  }
}
