// task-30 Hello Admin:

let userName = ["Ajiya", "Hadi","Admin","Minha","Shumaila"];

userName.forEach(oneUser =>{
    if(oneUser === "Admin") {
console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for loggin in again`)
    }
})