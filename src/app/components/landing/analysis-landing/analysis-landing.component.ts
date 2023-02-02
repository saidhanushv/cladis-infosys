import { Component } from '@angular/core';

@Component({
  selector: 'app-analysis-landing',
  templateUrl: './analysis-landing.component.html',
  styleUrls: ['./analysis-landing.component.css']
})
export class AnalysisLandingComponent {

}


const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', function(e){
        const x = e.clientX
        const y = e.clientY //tells you where the user clicked in Y axis

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft //getting the position of the button
        
        const xInside = x - buttonLeft
        const yInside = y - buttonTop //getting the clicks position inside the button
        
        const circle = document.createElement('span');
        circle.classList.add('circle') //giving a class
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500);
    })
})