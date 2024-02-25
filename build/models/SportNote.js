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
var SportNote = /** @class */ (function (_super) {
    __extends(SportNote, _super);
    //   can basically implement meetings and sportAndLeisure here
    function SportNote(creationDate, title, content, imageSrc, place, dateOfEvent, hourOfEvent, neededEquipment) {
        if (place === void 0) { place = "unknown"; }
        if (dateOfEvent === void 0) { dateOfEvent = "unkown"; }
        if (hourOfEvent === void 0) { hourOfEvent = "unknown"; }
        if (neededEquipment === void 0) { neededEquipment = []; }
        var _this = _super.call(this, creationDate, title, content, imageSrc) || this;
        _this.place = place;
        _this.dateOfEvent = dateOfEvent;
        _this.hourOfEvent = hourOfEvent;
        _this.neededEquipment = neededEquipment;
        return _this;
    }
    SportNote.prototype.noteAlert = function () {
        alert("place: ".concat(this.place, "\ntime: ").concat(this.hourOfEvent, "\nequipment:").concat(this.neededEquipment, "\n"));
    };
    SportNote.prototype.toString = function () {
        return "place: ".concat(this.place, "\ntime: ").concat(this.hourOfEvent, "\nequipment:").concat(this.neededEquipment, "\n");
    };
    return SportNote;
}(Note));
