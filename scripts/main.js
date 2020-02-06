/*var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello Jimmy!';*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/1514532564113125626.jpg') {
        myImage.setAttribute ('src', 'images/103575.jpg');
    }   else {
        myImage.setAttribute('src', 'images/1514532564113125626.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the Jungle, ' + myName;    
}

myButton.onclick = function() {
    setUserName();
}