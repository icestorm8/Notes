abstract class Note {
  private static currentId: number = 0;
  public id: number;
  constructor(
    public creationDate: string,
    public title: string,
    public content: string,
    public imageSrc: string
  ) {
    this.id = Note.currentId;
    Note.currentId++;
  }

  abstract noteAlert(): void;
}
