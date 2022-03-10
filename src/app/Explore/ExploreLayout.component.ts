import { Component, OnInit } from "@angular/core";
import { CreateModel } from "./create-data.model";
import { ExploreService } from "./explore.service";

@Component({
    selector: 'mn-explore-component',
    templateUrl: 'ExploreLayout.component.html',
    styleUrls: ['ExploreLayout.component.css']
})
export class ExploreLayoutComponent implements OnInit{

    data: CreateModel [] = [];
 
    constructor(private exploreService: ExploreService){
      
    }
  ngOnInit(): void {
    this.exploreService.getExplore().subscribe((data: CreateModel [])=>
    {
      console.log("fetching items");
      for(var datas of data){
        this.data.push(datas);
      }
    });
  }
}