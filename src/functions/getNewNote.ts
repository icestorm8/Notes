function addProduct(): boolean {
  let form = document.forms["form"];
  let title = form.title.value;
  let content = form.content.value;
  let src = form.image.value;
  let date = new Date().getDate();

  alert(date);

  if (title == "" || content == "") {
    alert("fill all with valid inputs");
    return false;
  }
  let newNote: Note;

  //   switch () {
  //     case "MilkProduct":
  //       newNote = new SportNote(pName, pPrice, pDiscount, pInStock);
  //       alert("im here");
  //       break;
  //     case "Candies":
  //       newNote = new MeetingNote(pName, pPrice, pDiscount, pInStock);
  //       break;
  //     case "DrinkProduct":
  //       newNote = new toDoNote(pName, pPrice, pDiscount, pInStock);
  //       break;
  //   }
  notes.push(newNote);
  console.log(notes);
  displayNotes(true);
  return true;
}
