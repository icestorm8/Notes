class MeetingNote extends Note implements meetings {
  constructor(
    creationDate: string,
    title: string,
    content: string,
    imageSrc: string,
    public place: string,
    public meetingHour: string
  ) {
    super(creationDate, title, content, imageSrc);
  }
  noteAlert(): void {
    throw new Error("Method not implemented.");
  }
}
