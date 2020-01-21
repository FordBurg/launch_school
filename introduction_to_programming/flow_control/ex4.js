function barCodeScanner(serial){
  switch (serial){
    case "123":
      console.log("Product1");
    case"113":
      console.log("Product2");
    case"142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");

//no break statements means fall through occurs and where case "113" should exit the switch, it continues onwards through the other cases.