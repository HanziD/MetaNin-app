import { Component, Input} from "@angular/core";

@Component({
    selector: 'mn-vertical-card',
    templateUrl: 'vertical.card.component.html',
    styleUrls: ['vertical.card.component.css']
})

export class VerticalCardComponent{
  
    @Input() name: string;
    @Input() mastery: string;
    @Input() Fort: number;
    @Input() Chak: number;
    @Input() int: number;
    @Input() str: number;
    @Input() agi: number;
    @Input() weapon: string;
    @Input() creationDate: string;
    @Input() updateDate: string;

    constructor(){
        this.name = "Default name";
        this.mastery = "Default mastery";
        this.Fort = 0;
        this.Chak = 0;
        this.int = 0;
        this.str = 0;
        this.agi = 0;
        this.weapon = "Default Weapon";
        this.creationDate = "00/00/00 00:00 xx";
        this.updateDate = "00/00/00 00:00 xx";
    }
}