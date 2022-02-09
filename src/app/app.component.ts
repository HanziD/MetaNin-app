import { Component } from '@angular/core';
import { CreateModel } from './Explore/create-data.model';
import { mock_create_list } from './Explore/mock-create-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MetaNin';
  data: CreateModel [] = [];
 
  constructor(){
    for(var datas of mock_create_list){
      console.log(datas);
      this.data.push(datas);
      
      
    }
  }
}
