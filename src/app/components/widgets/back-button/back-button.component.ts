import { Location } from '@angular/common';
import { Direction } from './../../../core/enum/EButton';
import { AfterContentInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

type direction =  keyof  typeof Direction;

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit,AfterContentInit {
  @Input() direction :  direction  = 'left';
  @Input() text : string = 'Retour en arriere';
  @Input() margin : number = 5;

  constructor( public location :Location){

  }
  ngAfterContentInit(): void {

  }
  ngOnInit(): void {

  }
}
