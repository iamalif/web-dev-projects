function sendNotification(email){
    if(!email.includes('@')){
        return 'Invalid Email';
    }
    else{
        const splitEmail = email.split('@');
        const username = splitEmail[0];
        const domain = splitEmail[1];
        const alert = username + " sent you an email from " + domain;
        return alert;
    }
}
const email = 'alif@dev.com';
console.log(sendNotification(email));

