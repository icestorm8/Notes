function createListFromTextArea(textAreaValue) {
    var arr = textAreaValue.replace(/\r\n/g, "\n").split("\n");
    // console.log(arr);
    return arr;
}
