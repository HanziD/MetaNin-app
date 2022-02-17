import { Component } from "@angular/core";
import { CreateModel } from "./create-data.model";
import { mock_create_list } from "./mock-create-list";

@Component({
    selector: 'mn-explore-component',
    templateUrl: 'ExploreLayout.component.html',
    styleUrls: ['ExploreLayout.component.css']
})
export class ExploreLayoutComponent {

    data: CreateModel [] = [];
 
    constructor(){
      for(var datas of mock_create_list){
        console.log(datas);
        this.data.push(datas);
        
        
      }
    }
}