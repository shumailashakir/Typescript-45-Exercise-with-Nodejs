// task-37 Large Shirts:
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, ", print on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I Love Pakistan");
