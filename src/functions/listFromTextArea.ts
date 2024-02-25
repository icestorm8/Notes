function createListFromTextArea(textAreaValue: string) {
    var arr: string[] = textAreaValue.replace(/\r\n/g, "\n").split("\n");
    // console.log(arr);
    return arr;
  }