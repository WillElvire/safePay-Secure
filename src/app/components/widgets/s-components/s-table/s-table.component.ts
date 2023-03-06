import { Component, Input, AfterContentInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 's-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss']
})
export class STableComponent implements AfterContentInit {

  @Input() type : string = 'sell';

  getUsers : Observable<any[]> = of([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      exchange : 'BTC',
      fiat  : 'SHIB'
    },

  ]);
  userSubscription !: Subscription ;
  listOfData : any;
  loading = true;
  pageSize = 20;
  pageIndex = 1;
  total = 1;

  onCurrentPageDataChange(event : any) {
    console.log(event);
  }


  ngAfterContentInit(): void {
      this.userSubscription = this.getUsers.subscribe(
        (users)=> {
          this.loading = false;
          this.listOfData = users;
        }
      );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
