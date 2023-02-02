import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

}

// EXPLORE/PREDICT SCRIPT 
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left') //dynamically changing class based on mouseenter event (ie.., hover effect)
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left') //dynamically changing class based on mouseenter event (ie.., hover effect)
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right') //dynamically changing class based on mouseenter event (ie.., hover effect)
});
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right') //dynamically changing class based on mouseenter event (ie.., hover effect)
});