import { Component } from '@angular/core';

@Component({
  selector: 'app-prediction-landing',
  templateUrl: './prediction-landing.component.html',
  styleUrls: ['./prediction-landing.component.css']
})
export class PredictionLandingComponent {

}


const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let load = 0
let int = setInterval(blurring, 30)
function blurring(){
    load++;
    if(load>99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (num,in_min, in_max, out_min, out_max)=>{
    return(num-in_min)*(out_max-out_min)/(in_max - in_min)+out_min;
}

// MAIN CONTENT
setTimeout(function(){
    document.getElementById("appear").style.width = "100%";
}, 500);