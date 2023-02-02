import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// APPEAR DISAPPEAR ANIMATION 
setTimeout(function(){
  var elements = document.getElementsByClassName("overlap");
  for (var i = 0; i < elements.length; i++) {
       elements[i].classList.add("overlap");
  }
},10000);

document.addEventListener("click", redirect);
document.addEventListener("keydown", redirect);

function redirect(){
 window.location.href = "index.html";
}

//  CLICK ANYWHERE PART
setTimeout(function() {
var div = document.createElement("div");
div.classList.add("click");
div.innerHTML = "Click anywhere to continue";
document.getElementById("continue-text").appendChild(div);
document.getElementById("continue-text").style.display = "block";
}, 9000);