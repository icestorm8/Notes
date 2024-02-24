var Note = /** @class */ (function () {
    function Note(creationDate, title, content, imageSrc) {
        this.creationDate = creationDate;
        this.title = title;
        this.content = content;
        this.imageSrc = imageSrc;
        this.id = Note.currentId;
        Note.currentId++;
    }
    Note.currentId = 0;
    return Note;
}());
