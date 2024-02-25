function displayType(radioBtn) {
    var type = radioBtn.value;
    var modal = document.getElementById("create-note"); // catch modal of form
    var additionalData = document.getElementById("additional-data");
    additionalData.innerHTML = "";
    var datePicker;
    switch (type) {
        case "sport":
            additionalData.innerHTML += "\n      <input type=\"text\" name=\"place\" placeholder=\"place\">\n      <input type=\"time\" name=\"time\" value=\"08:00:00\">\n      <input id=\"datePicker\" type=\"date\" name=\"eventDate\">\n      <textarea name=\"equipment\" placeholder=\"write equipment needed here, make sure to write each in a new line\"></textarea>\n      ";
            datePicker = document.getElementById("datePicker");
            datePicker.min = new Date().toLocaleDateString("fr-ca");
            modal.style.background =
                "linear-gradient(to bottom right,rgb(240, 215, 231), rgb(237, 241, 255))";
            break;
        case "meeting":
            additionalData.innerHTML += "\n      <input type=\"text\" name=\"place\" placeholder=\"place\">\n      <input type=\"time\" name=\"time\" value=\"08:00:00\">\n      ";
            modal.style.background =
                "linear-gradient(to bottom right,rgb(198, 205, 223),rgb(237, 241, 255))";
            break;
        case "todo":
            additionalData.innerHTML += "\n      <input type=\"date\" id=\"datePicker\" name=\"dueDate\" placeholder=\"place\">\n      ";
            datePicker = document.getElementById("datePicker");
            datePicker.min = new Date().toLocaleDateString("fr-ca");
            modal.style.background =
                "linear-gradient(to bottom right,rgb(222, 239, 219), rgb(237, 241, 255) )";
            break;
    }
}
