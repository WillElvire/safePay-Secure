import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import Web3Modal from 'web3modal';


@Injectable()
export class Web3Services {

  private web3js!: Web3;
  private provider: any;
  private accounts: any;
  web3Modal !: Web3Modal;

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor() {
    this.enableWeb3Modal();
  }


  async accountInfo(account: any[]) {

  }

  enableWeb3Modal() {
    const providerOptions = {
      walletconnect: {
       package: null, // required
        options: {
          infuraId: "2feba8d780ba456997c88297b08e5e3c" // required
        }
      }
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions : providerOptions as any, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });





  }

  async connectAccount() {
    this.web3Modal.clearCachedProvider();
    this.web3Modal.toggleModal();
    this.provider = await this.web3Modal.connect();
    this.web3js = new Web3(this.provider);
   // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();
    this.accountStatusSource.next(this.accounts);
  }
}
