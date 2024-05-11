// task-31 No Users:
var userName = ["Ajiya", "Hadi", "Admin", "Minha", "Shumaila"];
userName = [];
if (userName.length === 0) {
    console.log("Your array is empty we need to find some users!");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would u like to see a status?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
