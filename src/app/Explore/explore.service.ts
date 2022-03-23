import { Injectable } from "@angular/core";
import { CreateModel } from "./create-data.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class ExploreService{
    constructor(private db:AngularFireDatabase){

    }
    getExplore(){
        return this.db.list<CreateModel>("explore").valueChanges();
    }

    getExplor(index:number){

    }
}