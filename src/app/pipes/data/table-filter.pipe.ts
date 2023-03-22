import { Pipe, PipeTransform } from '@angular/core';
import { Publication } from 'src/app/core/interface/Api';


//filtrer le un tableau en fonction du status
@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(value : readonly Publication[] , filter : any): readonly Publication[] {
    if(!filter || ["2",'2'].includes(filter)) return value;
    return value.filter((item : any)=>{
      const mybool = filter === "true";
      console.log(mybool)
      return item.verify ==  mybool;
    });
  }

}
