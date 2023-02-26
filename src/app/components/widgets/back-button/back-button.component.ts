import { Location } from '@angular/common';
import { Direction } from './../../../core/enum/EButton';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit,AfterContentInit {
  @Input() direction : Direction = Direction.OUT;
  @Input() text : string = 'Retour en arriere';
  @Input() margin : number = 5;

  constructor( public location :Location){

  }
  ngAfterContentInit(): void {
    const  button$ = document.getElementById("button") as HTMLMenuElement;
    button$.style.float = this.direction.valueOf() as string;
    button$.style.marginTop = this.margin + "%";
    button$.style.marginLeft = this.margin + "%";
  }
  ngOnInit(): void {

  }
}
