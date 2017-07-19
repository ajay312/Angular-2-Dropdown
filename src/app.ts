//our root app component
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'

import {brandService} from './brandService'


@Component({
  selector: 'my-app',
  providers: [brandService]
})
@View({
  templateUrl : 'brand.html'
  ,
  directives: [CORE_DIRECTIVES] 
})
export class App {
  public brandItems = [];
  public totalItems = [];
  public name=""; 
  public image ="";
  public selectedBrand=true;
  public selectedModel =true;
  //Brand Selection
  updateBranditem(brandValue:string) {
  var obj = this.totalItems.find(item=>item.make==brandValue);
  this.selectedModels=obj.models;
  this.selectedBrand =false;
  }
   
   // Mdel Selection
    onSelectModel(modelValue:string) {
    var obj = this.selectedModels.find(item=>item.model==modelValue);
    this.name=obj.name;
    this.image=obj.image;
    this.selectedModel = false;
  }
  checkItem_present(makeValue:string)
  {
    for(var i=0;i<this.makesJson.length;i++)
    {
      if(this.makesJson[i].make===makeValue)
      {
        return this.makesJson[i].is_in_navigation;
      }
    }
  }
  
  constructor(public brandService:brandService) {
      brandService.makesJson
      .subscribe(makesObj => {
      this.makesJson=makesObj;
      }
      )
    brandService.acuraJson
      .subscribe(acuraObj=> {this.result =acuraObj;
     var item_exist= this.checkItem_present(acuraObj.make);
       if(item_exist)
       {
      this.totalItems.push(acuraObj);
      this.brandItems.push(acuraObj.make);
       }
         
       }
      )
       brandService.fordJson
      .subscribe(fordObj => {
       var item_exist= this.checkItem_present(fordObj.make);
      
       if(item_exist)
       {
       this.brandItems.push(fordObj.make);
      this.totalItems.push(fordObj);
       }
      }
      )
        }

}