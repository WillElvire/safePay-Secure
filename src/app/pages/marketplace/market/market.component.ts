import { Subscription } from 'rxjs';
import { Publication } from './../../../core/interface/Api';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { ActionSubjectService } from 'src/app/core/services/observer/action';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit , OnDestroy {
  buyPublication: Publication[] = [];
  sellPublication: Publication[] = [];
  allPublication : Publication[] = [];
  subscription = new Subscription();
  isSpinning = false;

  constructor(private appFacades: AppFacades, private actionSubject : ActionSubjectService) {
    this.loadPublications();
  }

  ngOnInit(): void {
    console.log(this.buyPublication)
    this.refreshPublication();
  }


  loadPublications() {
    this.isSpinning = true;
    this.appFacades.getLastPublication().subscribe((response) => {
      this.allPublication =  response.returnObject as Publication[];
      this.isSpinning = false;
      this.getSpecifiquePublication();
    },(err)=> this.isSpinning = false);
  }

  getSpecifiquePublication() {
    this.allPublication.forEach((element) => {
      if (element.detail.title?.includes('VENTE')) {
        this.sellPublication.push(element);
      }
      if (element.detail.title?.includes('ACHAT')) {
        this.buyPublication.push(element);
      }
    });
  }


  refreshPublication() {
    this.subscription =this.actionSubject.actionSubject$.subscribe((response)=> {
      if(!!response) return this.loadPublications();
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
