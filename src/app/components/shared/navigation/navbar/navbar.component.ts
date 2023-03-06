import { user } from './../../../../core/interface/State';
import { UserQuery } from 'src/app/store/user$/user.query';
import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  ViewChild,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription, shareReplay } from 'rxjs';
import { User } from 'src/app/core/interface/Api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation : ViewEncapsulation.None
})
/**
 * @description class for control the navbar component
 * @author willelvire
 */
export class NavbarComponent implements AfterViewInit, OnInit  , OnChanges{
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
  connectedUser!: User;

  constructor(
    private userQuery: UserQuery,
  ) {

    this.subscription = this.userQuery.selectUser$.pipe(shareReplay(1)).subscribe((user: any) => {
      this.connectedUser = user as User;
    });
  }

  /**
   * @description  get the user connected
   * @author willelvire
   */
  ngOnInit(): void {
    //get the user state

  }
  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
}
