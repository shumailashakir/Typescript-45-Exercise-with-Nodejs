// task-32 Checking Usernames:

// Array of current user

let current_users = ["Iqra","Bushra","faiza","Ahsan","Mirha"]

//  Array of new user

let new_users = ["Aqib","Shariq","Iqra","Mahrukh","Faiza"]

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken`)

    }else{
        console.log(`This username ${new_one_user} is available`)
    }
    
})
    






