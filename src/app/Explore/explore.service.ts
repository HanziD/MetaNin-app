import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateModel } from "./create-data.model";

@Injectable(
    {providedIn: 'root'}
)

export class ExploreService{
    private baseUrl: string = "https://metanin-app-default-rtdb.firebaseio.com/";
    private exploreEndPoint: string = "Explore.json"

    constructor(private http:HttpClient){

    }
    getExplore(){
        return this.http.get<CreateModel []>(this.baseUrl + this.exploreEndPoint);
    }

    getExplor(index:number){
        return this.http.get<CreateModel>(this.baseUrl + 'Explore' + '/' + index + '.json');
    }
}