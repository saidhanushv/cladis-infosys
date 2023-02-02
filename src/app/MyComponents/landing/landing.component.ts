import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public router : Router){}
  
  ngOnInit(): void {
    setTimeout(function(){
      var elements = document.getElementsByClassName("overlap");
      for (var i = 0; i < elements.length; i++) {
           elements[i].classList.add("overlap");
      }
   },10000);
  //this.nextpage(); 
  setTimeout(() => {
    this.router.navigate(['landing']);
}, 10000);  //10s

  }

 
}










