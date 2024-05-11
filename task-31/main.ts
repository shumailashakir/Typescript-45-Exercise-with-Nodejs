// task-31 No Users:

let userName = ["Ajiya","Hadi","Admin", "Minha","Shumaila"]

userName = []

if(userName.length === 0){
    console.log("Your array is empty we need to find some users!")

}else{
    userName.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser},would u like to see a status?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again`)
        }
    })
}