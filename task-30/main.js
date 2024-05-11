// task-30 Hello Admin:
var userName = ["Ajiya", "Hadi", "Admin", "Minha", "Shumaila"];
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for loggin in again"));
    }
});
