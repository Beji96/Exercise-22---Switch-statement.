let primitive = 100;

switch (primitive) {
  case typeof primitive === "number":
    console.log("This is a number");
    break;
  case typeof primitive === "boolean":
    console.log("This is a boolean");
    break;
  case typeof primitive === "string":
    console.log("This is a string");
    break;
}
