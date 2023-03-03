import { AfterViewInit, Component, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  @Input() fixable : boolean = true;
  @Input() color !: string;
  @ViewChild('navbar') navbar  !: any;

  pageY : number = 0;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event : any){
    this.pageY = window.pageYOffset;
  }

  constructor(private renderer : Renderer2)  {

  }

  ngAfterViewInit(): void {
    const navbar = this.navbar?.nativeElement;
    //this.renderer.setStyle(navbar, 'background','red');
    console.log();
  }
}
