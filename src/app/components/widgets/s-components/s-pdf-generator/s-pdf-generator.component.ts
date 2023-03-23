import { Transaction } from './../../../../core/interface/Api';
import { Subscription } from 'rxjs';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { Component, Input, OnChanges, SimpleChanges, inject, OnDestroy, LOCALE_ID } from '@angular/core';
declare var require: any;
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
const htmlToPdfmake = require('html-to-pdfmake');
import { TDocumentDefinitions } from 'pdfmake/interfaces';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { formatDate } from '@angular/common';

@Component({
  selector: 's-s-pdf-generator',
  templateUrl: './s-pdf-generator.component.html',
  styleUrls: ['./s-pdf-generator.component.scss'],
})
export class SPdfGeneratorComponent implements OnChanges , OnDestroy {
  @Input() data!: {firstname : string ,lastname : string , transaction : Transaction};

  private readonly appFacade = inject(AppFacades);
  subscription = new Subscription();

  constructor() {
    console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['data'].currentValue;
  }

  makePdf(data: string) {
    try {
      //console.log("make pdf",data);
      var html = htmlToPdfmake(this.parseDocToHtml(data));
      const documentDefinition: TDocumentDefinitions = { content: html };
      pdfMake.createPdf(documentDefinition).print();
    } catch (ex) {
      throw new Error(ex as string);
    }
  }
  parseDocToHtml(data: any) {
    let dataToHTML = new DOMParser();
    let dataAfterParsedToHTML = dataToHTML.parseFromString(
      this.mapReceiptFile(data),
      'text/html'
    );
    console.log(dataAfterParsedToHTML);
    return dataAfterParsedToHTML.documentElement.innerHTML;
  }
  downloadRceipt(guid: string | undefined) {
    return this.readFile();
  }

  mapReceiptFile(data: string) {

    data = data.replace("[nom]",this.data?.firstname as string);
    data = data.replace("[prenom]",this.data?.lastname as string);
    data = data.replace("[date]",formatDate(this.data.transaction.createdAt,"dd/MM/yyyy",'fr').toString())
    data = data.replace("[amount]",this.data?.transaction.transactionDetail.amount as string);
    data = data.replace("[libelle]",this.data?.transaction.transactionDetail.reason as string);
    data = data.replace("[guid]",this.data?.transaction.id as string);
    data = data.replace("[now]",formatDate(this.data.transaction.createdAt,"dd/MM/yyyy",'fr').toString())
    data = data.replace("[address]",this.data?.transaction.transactionDetail.billing.address as string);
    data = data.replace("[transaction_type]",this.data.transaction.transactionType.name as string);
    data = data.replace("[expiration_data]",this.data?.transaction.transactionDetail.billing.expriationDate as string);
    data = data.replace("[mean_of_payement]",this.data?.transaction.transactionDetail.billing.mean_of_payment as string);
    data = data.replace("[reference]",this.data.transaction.id as string);

    return data;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  readFile() {
    this.subscription = this.appFacade.getReceiptFile().subscribe(
      {
        next : (response : any)=>{
          if(!!response) {
            this.makePdf(response);
          }
        },
        error : (err)=>{
          console.log(err);
        }
      }
    )
  }
}
