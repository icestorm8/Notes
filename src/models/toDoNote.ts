class toDoNote extends Note implements toDo {
  constructor(
    creationDate: string,
    title: string,
    content: string,
    imageSrc: string,
    public dueDate: string
  ) {
    super(creationDate, title, content, imageSrc);
  }
  noteAlert(): void {
    alert(`creation date: ${this.creationDate}\ndueDate: ${this.dueDate}`);
  }

  toString(): string {
    return `creation date: ${this.creationDate}\ndueDate: ${this.dueDate}`;
  }
}
