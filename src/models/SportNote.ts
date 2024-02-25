class SportNote extends Note implements sportAndLeisure {
  //   can basically implement meetings and sportAndLeisure here
  constructor(
    creationDate: string,
    title: string,
    content: string,
    imageSrc: string,
    public place: string = "unknown",
    public dateOfEvent: string = "unkown",
    public hourOfEvent: string = "unknown",
    public neededEquipment: string[] = []
  ) {
    super(creationDate, title, content, imageSrc);
  }

  noteAlert(): void {
    alert(
      `place: ${this.place}\ntime: ${this.hourOfEvent}\nequipment:${this.neededEquipment}\n`
    );
  }

  toString(): string {
    return `place: ${this.place}\ntime: ${this.hourOfEvent}\nequipment:${this.neededEquipment}\n`;
  }
}
