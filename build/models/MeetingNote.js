var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MeetingNote = /** @class */ (function (_super) {
    __extends(MeetingNote, _super);
    function MeetingNote(creationDate, title, content, imageSrc, place, meetingHour) {
        if (place === void 0) { place = "unknown"; }
        if (meetingHour === void 0) { meetingHour = "unkown"; }
        var _this = _super.call(this, creationDate, title, content, imageSrc) || this;
        _this.place = place;
        _this.meetingHour = meetingHour;
        return _this;
    }
    MeetingNote.prototype.noteAlert = function () {
        alert("creation date: ".concat(this.creationDate, "\ntitle: ").concat(this.title, "\ncontent: ").concat(this.content, "\nplace: ").concat(this.place, "\nhour: ").concat(this.meetingHour, "\n"));
    };
    MeetingNote.prototype.toString = function () {
        return "creation date: ".concat(this.creationDate, "\ntitle: ").concat(this.title, "\ncontent: ").concat(this.content, "\nplace: ").concat(this.place, "\nhour: ").concat(this.meetingHour, "\n");
    };
    return MeetingNote;
}(Note));
