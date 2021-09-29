const buttons = document.getElementById('button');
const toasts = document.getElementById('toasts');

const randomMessages = [
    'message one',
    'message two',
    'message three'
];

buttons.addEventListener('click', ()=> createToastNotification());

function createToastNotification() {
    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.innerText = createRandomMessages();
   
    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function createRandomMessages() {
    return randomMessages[Math.floor(Math.random() * randomMessages.length) ] //this function is used to output randome fgures 
   
}