import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit{
  constructor(public router : Router){}
  ngOnInit(): void {}
  prediction(){
    this.router.navigate(['prediction-landing'])
  }
  analysis(){
    this.router.navigate(['analysis-landing'])
  }
}
