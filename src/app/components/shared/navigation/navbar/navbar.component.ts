import { user } from './../../../../core/interface/State';
import { UserQuery } from 'src/app/store/user$/user.query';
import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * @description class for control the navbar component
 * @author willelvire
 */
export class NavbarComponent implements AfterViewInit, OnInit {
  //variables
  @Input() fixable: boolean = true;
  @Input() color!: string;
  @ViewChild('navbar') navbar!: any;

  pageY: number = 0;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.pageY = window.pageYOffset;
  }
  //subscription
  subscription = new Subscription();
  connectedUser!: user;

  constructor(
    private renderer: Renderer2,
    private userQuery: UserQuery,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  /**
   * @description  get the user connected
   * @author willelvire
   */
  ngOnInit(): void {
    //get the user state
    this.subscription = this.userQuery.selectUser$.subscribe((user: any) => {
      this.connectedUser = user as user;
      this.changeDetectorRef.detectChanges();
    });
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.connectedUser);
  }
}
