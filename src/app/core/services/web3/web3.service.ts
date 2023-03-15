import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import Web3 from 'web3';

declare let window: any;

@Injectable()
export class Web3Services {
  private web3js!: Web3;
  private provider: any;
  private accounts: any;

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor() {}

  async accountInfo(account: any[]) {}

  async web3Connection() {}

  async connectAccount() : Promise<any>{
    if (window.ethereum) {
      this.web3js = new Web3(window.ethereum);
      // Ask User permission to connect to Metamask
      await window.ethereum.enable();
      this.accounts = await this.web3js.eth.getAccounts();
      this.accountStatusSource.next(this.accounts);
      console.log(this.accounts);
      return Promise.resolve(this.accounts)
    }
  }
}
