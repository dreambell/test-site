let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
let va = multiply(4, 7);

document.querySelector('html').onclick = function(){
    // alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    let myTitle = myImage.getAttribute('title');
    myTitle.setAttribute('title', 'mengmeng');

    if(mySrc === 'images/guangzhou.png') {
        myImage.setAttribute('src', 'images/mengmeng.JPG');
    } else {
        myImage.setAttribute('src', 'images/guangzhou.png');
    }
}
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;