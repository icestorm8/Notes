class MeetingNote extends Note implements meetings {
  constructor(
    creationDate: string,
    title: string,
    content: string,
    imageSrc: string,
    public place: string = "unknown",
    public meetingHour: string = "unkown"
  ) {
    super(creationDate, title, content, imageSrc);
  }
  noteAlert(): void {
    alert(
      `creation date: ${this.creationDate}\ntitle: ${this.title}\ncontent: ${this.content}\nplace: ${this.place}\nhour: ${this.meetingHour}\n`
    );
  }

  toString(): string {
    return `creation date: ${this.creationDate}\ntitle: ${this.title}\ncontent: ${this.content}\nplace: ${this.place}\nhour: ${this.meetingHour}\n`;
  }
}
