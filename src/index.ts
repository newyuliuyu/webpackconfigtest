
import './style.css';
import myImage from './a.jpeg';
import myFun from './another-module';
import * as $ from 'jquery';

function component() {
    $('#myDiv1').text('test=============')
    var element = document.createElement('div');
    var myIcon = new Image();
    myIcon.src = myImage;
    element.appendChild(myIcon);
    myFun(12);
    return element;
}
console.log("test.........................")
document.body.appendChild(component());