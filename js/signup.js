const button = document.querySelector('button');
const user = () => {
    const username = document.getElementById('username').value
    return username
}
const email = () => {
    const useremail = document.getElementById('useremail').value
    return useremail
}
const passwd = () => {
    const userepasswd = document.getElementById('userpasswd').value
    return userepasswd
}
const confirm_passwd = () => {
    const userconfirmpasswd = document.getElementById('confirmpasswd').value
    return userconfirmpasswd
}


import PocketBase from "../node_modules/pocketbase/dist/pocketbase.es.mjs";

const pb = new PocketBase('http://127.0.0.1:8090');


button.addEventListener('click', async () => {
    const data = {
        "username": user(),
        "email": email(),
        "emailVisibility": true,
        "password": passwd(),
        "passwordConfirm": confirm_passwd()
    };
    const authData = await pb.collection('users').create(data);
    window.location.href = "/login.html"
    
})

