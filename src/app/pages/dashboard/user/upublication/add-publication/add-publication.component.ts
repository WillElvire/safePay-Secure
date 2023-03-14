import { Publication } from './../../../../../core/interface/Api';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SAddPublicationComponent } from 'src/app/components/widgets/s-components/s-modal/s-add-publication/s-add-publication.component';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { take, Subscription } from 'rxjs';
import { ActionSubjectService } from 'src/app/core/services/observer/action';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.scss'],
})
export class UAddPublicationComponent implements OnInit , OnDestroy {

  isVisible = false;
  isConfirmLoading = false;
  isLoad : boolean = false;
  id!: string;
  publications : Publication[] = [];
  subscription = new Subscription();
  p: number = 1;
  pageY  :number = 0;
  pageSize !: number;
  pageIndex = 1;
  total = 1;
  filter !: any;

  @HostListener("window:scroll",['$event'])onScrollEvent($event : any) {
    //this.pageY = window.pageYOffset;
    console.log($event);
  }
  constructor(
    private modalService: NzModalService,
    private appFacades: AppFacades,
    private stateFacade: StatesFacades,
    private actionSubject : ActionSubjectService
  ) {
    this.pageSize= this.pageY  > 400 ? 4 : 3;
    this.getUserId();
  }

  showModal(): void {
    this.modalService.create({
      nzWidth: 800,
      nzContent: SAddPublicationComponent,
      nzFooter: null,
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.subscription = this.actionSubject.modalSubject$.subscribe((response)=>{
      if(!!response) this.getAllPublications();
    })
    this.getAllPublications();
  }

  getAllPublications() {
    this.isLoad = true;
    this.appFacades.getPublicationById(this.id).subscribe({
      next : (response)=> {
        this.isLoad = false;
        this.publications = response.returnObject as Publication[];
        console.log(response);
      },
      error : (err)=>{
        this.isLoad = false;
        console.log(err)
      }
    });
  }

  getUserId() {
    this.stateFacade
      .selectUser()
      .pipe(take(1))
      .subscribe((user) => (this.id = user.id));

      console.log(this.id)
  }

  trackPublication(index : number , publication :any) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deletePublication(id : string) {
   this.appFacades.deletePublication(id).subscribe(
    {
      next : (response)=>{
        this.appFacades.mBuildSuccess(response.message);
        this.actionSubject.emitModalSubject(true)
      },
      error : (err)=>{
        this.appFacades.mBuildError(err.error.message ? err.error.message : err.message)
      }
    }
    )
  }



  delete(id : string): void {
    this.modalService.confirm({
      nzTitle: 'Voulez vous vraiment supprimer cette publication ?',
      nzContent: '<b style="color: red;">Cette action est irreversible</b>',
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>{
        this.deletePublication(id)
      },
      nzCancelText: 'Annuler',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
