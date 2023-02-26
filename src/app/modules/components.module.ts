import { NgModule } from "@angular/core";
import { BackButtonComponent } from '../components/widgets/back-button/back-button.component';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  declarations : [
    BackButtonComponent
  ],
  exports : [BackButtonComponent],
  imports :[NzButtonModule,NzIconModule]
})
export class ComponentModule{

}
